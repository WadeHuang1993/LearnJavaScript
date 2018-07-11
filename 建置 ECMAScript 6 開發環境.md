# 建置 ECMAScript 6 開發環境

## 安裝 Babel

Babel 是一個廣泛使用的轉碼器，可以將 ES6 代碼轉為 ES5 代碼，從而在現有環境執行。

在專案目錄下，使用 npm 進行安裝：
```
npm install babel-cli
```

## 配置文件.babelrc

Babel 的配置文件是 `.babelrc`，存放在項目的根目錄下。使用 Babel 的第一步，就是配置這個文件。

`.babelrc` 用來設置轉碼規則和插件，基本格式如下。
```
{
  "presets": [],
  "plugins": []
}
```

`presets` 字段設定轉碼規則，官方提供以下的規則集，你可以根據需要安裝。
```
# ES2015 轉碼規則
npm install --save-dev babel-preset-es2015

# react 轉碼規則
npm install --save-dev babel-preset-react

# ES7 不同階段語法提案的轉碼規則（共有 4 個階段），選裝一個
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3
```

然後，將這些規則加入`.babelrc`。

```
  {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }
```

## 編譯 ECMAscript 6

**編譯前： ES6 語法**
```javascript
print = (message) => {
    alert(message);
}
```


**編譯後： ES6 語法已經被編譯成瀏覽器可使用之 JavaScript 語法**
```javascript
print = function print(message) {
    alert(message);
};
```

