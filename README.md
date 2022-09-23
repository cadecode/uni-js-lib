# uni-js-lib

> 通用的 JS 工具函数库（供学习使用）


## 使用

执行打包命令，在 dist 目录下生成打包后的 JS 文件
```
npm run build
```

在 HTML 中引入打包生成的 JS 文件即可使用

```html
<script src="./dist/uni-js-lib.js"></script>
<script type="text/javascript">
    const {logUniJsLib} = window['UniJsLib'];

    logUniJsLib();
</script>
```
在 Node 环境下，使用 Commonjs 规范引入即可使用

```javascript
const {logUniJsLib} = require('../dist/UniJsLib');

logUniJsLib();
```

