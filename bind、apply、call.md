# bind、apply、call

* apply、call、bind 三者都是用來改變函數的 this 的指向對象；

* apply、call、bind 三者第一個參數都是`執行環境`，執行環境為物件或者是 document。；

* apply、call、bind 三者都可以利用第二或後續的參數，將參數傳遞給函式使用；

**bind 是返回對應函數，便於稍後調用；apply 、call 則是立即調用。**

```javascript
var obj = {
    x: 81,
};

var foo = {
    getX: function() {
        return this.x;
    }
}

console.log(foo.getX.bind(obj)());  //81， bind 只回傳 function，須調用()才會調用
console.log(foo.getX.call(obj));    //81， call 與 apply 會立刻調用
console.log(foo.getX.apply(obj));   //81
```

## bind 運算符 ::

ES 7 新語法 `::` 為 bind 的短語法，使用範例如下：

```javascript
var log = console.log.bind(console); // ES7 之前的用法
const log = ::console.log; // ES7 提供的::可以縮短語法

// 其他範例
foo.bar.call(foo); // long version
foo::bar(); // short version

foo.bar.call(foo, arg1, arg2, arg3); // long version
foo::bar(arg1, arg2, arg3); // short version

foo.bar.apply(foo, args); // long version
foo::bar(...args); // short version
```

### 把函數綁定到變數上
```javascript
var log = console.log.bind(console);
```

**用法：**
```javascript
log('one', '2', 3, [4], {5: 5});
```

**輸出：**
```javascript
one 2 3 [4] Object {5: 5}
```

### 為什麼要綁定在變數上？

這能讓你在程式運作的時候動態決定要使用哪一種 function。

例如：你可以在程式運行時決定使用哪一個自定義記錄器：
```javascript
var logger = require('appLogger');
var log = logToServer ? logger.log : console.log.bind(console);
```


