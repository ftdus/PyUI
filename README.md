# py-ui

## 开发前必读

强烈推荐使用 VSCODE 编译器 并且安装 `Prettier - Code formatter`,`ESLint` ,`EditorConfig for VS Code`这三个插件

### ✨ 关于代码风格

本项目集成`prettier`做代码风格统一格式化,所以在书写时,大家可以不关注代码风格,按自己喜欢的写就好,在执行`commit`时会自动对代码做统一格式化.

### ✨ 关于 commit 中 emoji 的使用

为了优化`commit log`显示,本项目提交代码时,请使用如下命令替代`git commit`,并且选择合适的 `emoji` 进行提交说明,不符合格式的,`pr`将被驳回.

```shell
npm run ci
```

### ✨ 新建组件

为了统一目录结构,新建组件一律使用如下命令:

```shell
npm run new:comp
```

> 组件内禁止书写 css,请在`styles/src`文件夹下对应组件的 scss 文件中进行书写,并且准守`BEM`规范

### ✨ 组件配置文件 (index.json)

为了自动生成`index.js`,需要每个组件根目录下增加`index.json`(默认可以没有,主要针对特殊组件)
支持的参数列表如下:

|   参数    | 默认值 | 类型    | 说明                        |
| :-------: | :----- | :------ | --------------------------- |
|    dev    | true   | Boolean | 是否开发中,为`true`时不导出 |
| prototype | false  | Boolean | 是否需要绑定到 vue 原型     |
|    map    | []     | Array   | 绑定到原型的映射数组        |

参考 messageBox 配置文件:

```json
{
  "prototype": true,
  "map": [
    {
      "key": "$msgbox",
      "value": "${moduleName}"
    },
    {
      "key": "$alert",
      "value": "${moduleName}.alert"
    },
    {
      "key": "$confirm",
      "value": "${moduleName}.confirm"
    },
    {
      "key": "$prompt",
      "value": "${moduleName}.prompt"
    }
  ]
}
```

导出内容:

```js
vue.prototype.$msgbox = MessageBox;
vue.prototype.$alert = MessageBox.alert;
vue.prototype.$confirm = MessageBox.confirm;
vue.prototype.$prompt = MessageBox.prompt;
```

---

## 🚧 开发步骤 🚧

### 安装依赖

```shell
yarn install || cnpm install || npm install
```

> 💡 提示：
> 因为各自的本地开发环境具有差异性，`Node`、`Npm` 版本不一，尤其是最近 `Node` 发布了 `10+ lts` 版本，`10+` 版本对于之前版本的 `NPM` 包支持不好，安装依赖后运行项目可能出现异常报错，所以请先删除 `node_modules` 目录和 `yarn.lock` 文件(使用 `npm` 安装的删除 `package-lock.json` 文件) 然后重新安装。

### run 组件服务

```shell
npm run serve
```

### run 官网服务

```shell
npm run serve:main
```

### 编译组件库

```shell
npm run build
```

### run 测试服务

```shell
npm run test:unit
```

### 自动生成 src/index.js 组件依赖文件

```shell
npm run comps:update
```

### 自动生成 src/styles/src/index.scss 样式依赖文件

```shell
npm run styles:update
```
