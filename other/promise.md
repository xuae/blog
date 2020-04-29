# Promise

## 用法
> executor是带有 resolve 和 reject 两个参数的函数 。Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回所建promise实例对象前被调用）。resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成fulfilled，要么调用reject 函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。
```javascript
new Promise( function(resolve, reject) { } /* executor */  );

new Promise((resolve, reject) => {
  resolve('success'); // Promise { <state>: 'fulfilled', <value>: 'success' }
  reject('error'); // Promise { <state>: 'rejected', <reason>: 'error' }
  throw 'error'; // Promise { <state>: 'rejected', <reason>: 'error' }
});
```

## 状态
> `Promise` 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象。
- `pending`: 初始状态，既不是成功，也不是失败状态。
- `fulfilled`: 意味着操作成功完成。
- `rejected`: 意味着操作失败。

## 链式调用

### then
```javascript
// p.then(onFulfilled[, onRejected]);
var p = new Promise((resolve, reject) => {
  resolve('成功！');
  // or
  // reject(new Error("出错了！"));
});

p.then(value => {
  console.log(value); // 成功！
}, reason => {
  console.error(reason); // 出错了！
});
```
- 参数

    - `onFulfilled` 可选

        当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果该参数不是函数，则会在内部被替换为 `(x) => x`，即原样返回 promise 最终结果的函数

    - `onRejected` 可选

        当 Promise 变成接受状态或拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（`rejection reason`）。  如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。

- 返回值

    当一个 `Promise` 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 then 中的回调函数：
    - 返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
    - 没有返回任何值，那么 `then` 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 `undefined`。
    - 抛出一个错误，那么 `then` 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
    - 返回一个已经是接受状态的 Promise，那么 `then` 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
    - 返回一个已经是拒绝状态的 Promise，那么 `then` 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
    - 返回一个未定状态（`pending`）的 Promise，那么 `then` 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的

### catch
> `catch`方法返回一个`Promise`，并且处理拒绝的情况。它的行为与调用`Promise.prototype.then(undefined, onRejected)` 相同。 (事实上, calling obj.catch(onRejected) 内部calls obj.then(undefined, onRejected)).
```javascript
new Promise((resolve, reject) => {
  throw 'error';
}).then(
  value => {},
  reason => {
    console.log(reason); // 'error'
  }
);

// 等同于
new Promise((resolve, reject) => {
  throw 'error';
}).catch(reason => {
  console.log(reason); // 'error'
});
```

```javascript
// 抛出一个错误，大多数时候将调用catch方法
var p1 = new Promise(function(resolve, reject) {
  throw 'Uh-oh!';
});

p1.catch(function(e) {
  console.log(e); // 'Uh-oh!'
});

// 在异步函数中抛出的错误不会被catch捕获到
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw 'Uncaught Exception!';
  }, 1000);
});

p2.catch(function(e) {
  console.log(e); // 不会执行
});

// 在resolve()后面抛出的错误会被忽略
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw 'Silenced Exception!';
});

p3.catch(function(e) {
   console.log(e); // 不会执行
});
```

## 方法

### Promise.all(iterable)
> `Promise.all(iterable)` 方法返回一个 `Promise` 实例，此实例在 `iterable` 参数内所有的 `promise` 都“完成（resolved）”或参数中不包含 `promise` 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 `promise` 的结果。
- 参数
    - iterable: 一个可迭代对象，如 Array 或 String。
- 返回值
    - 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 `Promise`。
    - 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved） `Promise`。注意：Google Chrome 58 在这种情况下返回一个已完成（already resolved）状态的 Promise。
    - 其它情况下返回一个处理中（pending）的`Promise`。这个返回的 `promise` 之后会在所有的 `promise` 都完成或有一个 `promise` 失败时异步地变为完成或失败。 见下方关于“Promise.all 的异步或同步”示例。返回值将会按照参数内的 `promise` 顺序排列，而不是由调用 `promise` 的完成顺序决定。
- 示例:
    - `Promise.all` 等待所有都完成（或第一个失败）。
        ```javascript
        var p1 = Promise.resolve(3);
        var p2 = 1337;
        var p3 = new Promise((resolve, reject) => {
          setTimeout(resolve, 100, 'foo');
        }); 

        Promise.all([p1, p2, p3]).then(values => { 
          console.log(values); // [3, 1337, "foo"] 
        });
        ```
    - 如果参数中包含非 `promise` 值，这些值将被忽略，但仍然会被放在返回数组中（如果 `promise` 完成的话）：
        ```javascript
        // this will be counted as if the iterable passed is empty, so it gets fulfilled
        var p = Promise.all([1,2,3]);
        // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
        var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
        // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
        var p3 = Promise.all([1,2,3, Promise.reject(555)]);

        // using setTimeout we can execute code after the stack is empty
        setTimeout(function(){
            console.log(p);
            console.log(p2);
            console.log(p3);
        });

        // logs
        // Promise { <state>: "fulfilled", <value>: [1, 2, 3] }
        // Promise { <state>: "fulfilled", <value>: [1, 2, 3, 444] }
        // Promise { <state>: "rejected", <reason>: 555 }
        ```
### Promise.race(iterable)
> `Promise.race(iterable)` 方法返回一个 `promise`，一旦迭代器中的某个`promise`解决或拒绝，返回的 `promise` 就会解决或拒绝。

`race` 函数返回一个 `Promise`，它将与第一个传递的 `promise` 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。
- 如果传的迭代是空的，则返回的 `promise` 将永远等待。
- 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 `Promise.race` 将解析为迭代中找到的第一个值。
```javascript
// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 33 }
```
```javascript
var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, "one"); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "two"); 
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});

var p3 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 500, "four"); 
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 更快，所以它完成了
}, function(reason) {
  // 未被调用
});

var p5 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500, "five"); 
});
var p6 = new Promise(function(resolve, reject) { 
    setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
  // 未被调用
}, function(reason) {
  console.log(reason); // "six"
  // p6 更快，所以它失败了
});
```

### Promise.reject(reason)
> 返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
```javascript
Promise.reject(new Error('fail')).then(function() {
  // not called
}, function(error) {
  console.error(error); // Stacktrace
});
```

### Promise.resolve(value)
> 返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。
```javascript
Promise.resolve("Success").then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // 不会被调用
});
```

```javascript
var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
```

```javascript
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

// 打印顺序如下，这里有一个同步异步先后执行的区别
// original === cast ? true
// value: 33
```

```javascript
// Resolve一个thenable对象
var p1 = Promise.resolve({ 
  then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
});
console.log(p1 instanceof Promise) // true, 这是一个Promise对象

p1.then(function(v) {
    console.log(v); // 输出"fulfilled!"
  }, function(e) {
    // 不会被调用
});

// Thenable在callback之前抛出异常
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError("Throwing");
  resolve("Resolving");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // 不会被调用
}, function(e) {
  console.log(e); // TypeError: Throwing
});

// Thenable在callback之后抛出异常
// Promise resolves
var thenable = { then: function(resolve) {
  resolve("Resolving");
  throw new TypeError("Throwing");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // 输出"Resolving"
}, function(e) {
  // 不会被调用
});
```
