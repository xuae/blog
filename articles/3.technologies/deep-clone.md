---
    title: 如何实现一个深拷贝
    date: 2021-10-14
    tags:
     - javascript
     - es6
---

<Boxx/>

## 前言

这篇文章我们来看看一道必会面试题，即如何实现一个深拷贝。本文会详细介绍对象、数组情况下的深拷贝实践，欢迎阅读。

## 分析

比较简单的深拷贝方式当然是JSON.parse(JSON.stringify(obj)),但是这种模式下对象的函数，undefined，Symbol等类型的属性会丢失，此方式在部分情况下有缺陷，今天我们主要说一说递归的方式实现一个深拷贝函数。

其实深拷贝可以拆分成 2 步，浅拷贝 + 递归，浅拷贝时判断属性值是否是对象，如果是对象就进行递归操作，两个一结合就实现了深拷贝。

浅拷贝的方式有多种，以下简单列举几种(组合，解构，循环)。

```javascript
// Object:
let obj = {}
let newObj
newObj = Object.assign({}, obj)
newObj = {...obj}
Object.keys(obj).forEach((ket) => {
    newObj.key = obj.key
})

//Array
let arr = []
let newArr
newArr = [].concat(arr);
newArr = [...arr]
arr.forEach((item,index) => {
    newArr[index] = item
})
```

- `Function，Date`: 解构方式无法解构Function Date类型属性，且Function Date属于引用对象类型。

## 类型判断

javascript拥有多种对象类型判断方式，这里我们主要讲三种：构造函数（constructor），原型链，内置函数（typeof）。instanceof 运算符用来检测左侧对象的原型__proto__(constructor.prototype) 是否存在于右侧对象的原型链上,所以会出现 [] instanceof Array  [] instanceof Object都为true的情况，https://juejin.cn/post/6844903984335945736#heading-19 详细讲述了原型链的知识，感兴趣的童鞋可以看一看

```javascript
// 构造函数
// 原型链
// typeof
let source


source = []
source.constructor === Array
Object.prototype.toString.call(source) === '[object Array]'
typeof source === 'object'

source = {}
source.constructor === Object
Object.prototype.toString.call(source) === '[object Object]'
typeof source === 'object'

source = ''
source.constructor === String
Object.prototype.toString.call(source) === '[object String]'
typeof source === 'string'

source = null 
source.constructor
// TypeError: Cannot read properties of null
Object.prototype.toString.call(source) === '[object Null]'
typeof source === 'object'

source = undefined
source.constructor
// TypeError: Cannot read properties of undefined
Object.prototype.toString.call(source) === '[object Undefined]'
typeof source === 'undefined'

source = false
source.constructor === Boolean
Object.prototype.toString.call(source) === '[object Boolean]'
typeof source === 'boolean'

source = 1
source.constructor === Number
Object.prototype.toString.call(source) === '[object Number]'
typeof source === 'number'

source = function () {}
source.constructor === Function
Object.prototype.toString.call(source) === '[object Function]'
typeof source === 'function'

source = new Date()
source.constructor === Date
Object.prototype.toString.call(source) === '[object Date]'
typeof source === 'object'
```

- 由上可见，三种类型判断方式，typeof部分内置对象类型重叠。构造函数判断null和undefined类型会报错且我们可以自定义构造函数名，此类构造函数创建的对象的构造函数即为我们自定义的构造函数，无法统一判断，所以可以使用原型链判断

- 但是如果需要单独识别构造函数创建对象时，可以使用constructor方式实现

```javascript
let b = function (name) {
    this.name = name
    this.getName = function () {
        console.log(this.name)
    }
}
let b1 = new b('b1')
// b1: {name: 'b1, getName: ƒ}
Object.prototype.toString.call(b1) === '[object Object]'
b1.constructor === b
typeof b1 === 'object'
```

- 这里大家应该也发现了，我们自定义构造函数创建的对象在三种类型判断方式下的表现其实和Function Date是一致的。当然，这也可以是一个优势，在深度克隆时，部分特定类型的对象可以拥有特权，如果它的构造函数不是Object的话

## 实现

```javascript
function deepClone(source) {
    //排除循环引用对象(可以使用hash表实现循环对象深度克隆)
    try {
        JSON.stringify(source)
    } catch (e) {
        throw new Error("循环引用对象/数组");
    }
    let clone
    switch (Object.prototype.toString.call(source)) {
        case '[object Array]':
        case '[object Object]':
            clone = {...source}
            break;
        // Date和Function使用Object.assign复制一份即可
        case '[object Date]':
            return Object.assign(new Date(), source)
        case '[object Function]':
            return Object.assign(new Function(), source)
        // 非Object Array Date Function 直接返回source
        default:
            return source
    }
   // Object Array 遍历属性类型，如果type of 为则'function', 'object'继续递归
    Object.keys(clone).forEach(key => (['function', 'object'].includes(typeof clone[key]) && (clone[key] = deepClone(clone[key]))))
    return clone
}
```

- 在大部分项目中，深度克隆不需要写到这么完善，因为大部分需要深度克隆的对象属于业务数据对象，不会涉及到函数以及循环引用对象。当然，Date类型的属性如果有用到还是需要考虑到位。

```javascript
function deepClone(source) {
if (!source || ![Array, Object].includes(source.constructor)) return source
    let clone = source.constructor === Array ? [...source]:{...source}
    Object.keys(clone).forEach(key => ([Array, Object].includes(source.constructor) && (clone[key] = deepClone(clone[key]))))
    return clone
}
```

## 未完待续（Symbol，循环对象，递归爆栈处理）
