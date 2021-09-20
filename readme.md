## 说明📚

---
这是一个在开发环境中使用的babel打包插件。有时我们需要在开发环境中编写一些逻辑来进行调试和开发。但是，我们不希望调试代码发布到生产环境中。这个插件就是为了解决这个问题而设计的。

## 安装💻

```
npm install babel-plugin-uu-dev-debug -D
```  
## 使用😁
---
🐱‍💻添加到你的babel.config.js配置文件中。
```
// babel.config.js
module.exports = {
  plugins: ["dev-debug"],
};
```
---
🐱在代码中使用,if语句中的代码只在dev环境中显示。
```
if (DEBUG) {
  // do something for debug
  // removed in production env
  const a = 10;
  const b = 20;
  console.log(a + b);
}
```
---
🐱‍🏍如果eslint报错，请添加以下代码到.eslintrc.js配置文件中
```
// .eslintrc.js
module.exports = {
  globals: {
    DEBUG: true,
  },
};
```
