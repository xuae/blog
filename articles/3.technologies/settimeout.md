---
    title: 经典面试题setTimeout输出顺序分析
    date: 2021-10-15
    tags:
     - javascript
     - es6
     - es7
     - promise
---

<Boxx/>

## 定时器（setTimeout）

让我们由一道简单的面试题开启我们本篇文章的内容


```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

console.log(i);
```

这是一段简单易懂的代码，以下四个选项是大部分人关于这段代码运行结果给出最多的答案。当然其中只有一个正确答案。

- A. 0,1,2,3,4,5
- B. undefined,0,1,2,3,4
- C. 5,0,1,2,3,4
- D. 5,5,5,5,5,5

如果你对javascript的作用域，闭包，同步异步等概念有一定的了解，那应该能轻松得出正确答案是D

如果我们约定，用箭头表示其前后的两次输出之间有 1 秒的时间间隔，而逗号表示其前后的两次输出之间的时间间隔可以忽略，代码实际运行的结果该如何描述？会有下面两种答案：

- A. 5->5,5,5,5,5
- B. 5->5->5->5->5->5

正确答案是A，你答对了吗？

## 分析

第一问中，主要是考察你对javascript作用域的理解。我们都知道，var申明变量相对于let const少了块级作用域这个概念，所以在这里for循环中申明的变量i其实相当于全局变量i，循环完成后，i的值已经成为5，当然，我们这里有个默认条件就是：0-5的循环能在一秒钟之内完成哈哈，不然答案就混乱且不唯一了。所以我们5个输出值均为5

第二问中，主要考察的则是对同步异步的理解，其实这里如果大家对setTimeout的运行机制不够了解大都也是能得出正确答案的，但是我们稍微修改一下呢

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    });
}

console.log('code end');
```

这段代码又会输出什么结果呢？code end,5,5,5,5,5 还是0,1,2,3,4,code end?这个就涉及到setTimeout的运行机制以及javascript宏任务微任务的区别了，感兴趣的小伙伴可以自己下来研究研究

## 继续 

下面我们对问题做一定的修改，如果我们想输出5,0,1,2,3,4该如何改变代码呢？

- 第一种方式，我们使用自执行函数（IIFE：Immediately Invoked Function Expression）来解决闭包的问题：

```javascript
for (var i = 0; i < 5; i++) {
    (function(i) {
      setTimeout(function() {
          console.log(i);
      }, 1000);
    })(i)
}
console.log(i);
```

- 如果你认真读过api文档，对setTimeout有足够的了解的话，那还有一种更简单且易懂的方法：

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function(i) {
      console.log(i);
  }, 1000, i);
}
console.log(i);
```

- 问题的根本在于i本身作用域的影响，那我们能不能利用作用域来达到目的呢？当然可以：

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
      console.log(i);
  }, 1000);
}
console.log(i);
```

注意，这里有一个问题就是使用let申明i后，i的作用域被锁定在每一次循环中，循环外并没有申明变量i,所以还应该稍微添加一部分：

```javascript
let j = 0
for (let i = 0; i < 5; i++) {
  j++
  setTimeout(function() {
      console.log(i);
  }, 1000);
}
console.log(j);
```

## 再继续

如果我们再次提出需求，需要输出0,1,2,3,4,5且每次输出时间间隔大概为1秒（这里使用大概的原因是因为javascript的定时器触发机制，准确描述应该是在设置的时间之后触发，而不是在设置的时间之后马上触发，这里不展开讲解，感兴趣的同学可以自行研究）

- 第一种方式当然是最简单的，我们控制定时器时间和i挂钩即可：

```javascript
    for (var i = 0; i < 5; i++) {
      setTimeout(function(i) {
          console.log(i);
      }, 1000*i, i);
    }
    setTimeout(function(i) {
      console.log(i);
    }, 1000 * i, i);
```

- 第二种我们使用ES6的promise该怎么实现呢？梳理一下，我们可以在循环中生成多个promise，然后等所有异步操作完成后再输出最后的i(5)即可:

```javascript
    let task = []
    for (var i = 0; i < 5; i++) {
      task.push(new Promise((resolve, reject) => {
          setTimeout(function(i) {
            console.log(i);
            resolve()
          }, 1000*i, i);
      }))
    }
    Promise.all(task).then(() => {
        setTimeout(function(i) {
              console.log(i);
        }, 1000, i);
    })
```
- 如果我们对ES7的async await有一定的了解的话，还可以换一种更简洁，可读性也更高的方式完成：

我们定义一个暂停函数，在每次输出前暂停1秒钟即可

```javascript
    const sleep = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, time)
        })
    }
    (async function(){
        let i
        for (i = 0; i < 5; i++) {
            await sleep(1000)
            console.log(i);
        }
        await sleep(1000)
        console.log(i);
    })()
```
