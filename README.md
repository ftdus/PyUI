# py-ui

## 开发前必读

强烈推荐使用 VSCODE 编译器 并且安装 `Prettier - Code formatter`,`ESLint` 这两个插件

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


# PyUI CSS设计

参考ElementCSS架构

## 语言

CSS预处理语言统一使用`scss`

## 命名及书写规范

- 命名使用BEM规范，包含Block、Element、Modifier三部分组成，我们使用`__`双下划线作为`Element`连接符，使用`--`双中划线连接`Modifier`，`-`作为单词连接符。
- BEM统一使用`b`、`e`、`m`Mixins来书写。
- scss变量命名以`-`单中划线分割，尽量语义化，例如`$--tab-vertical-header-width`，以`block-modifier-element-modifier`方式组成，以`$--`打头。。
- 十六进制色值以`大写`书写，例如`color: #FFFFFF`。
- 小数单位强制省略个位`0`，例如`height：.5px`。


## scss注释规范

- 以`/* */`方式书写注释。
- `=`和`-`符号长度均为20。

主标题

    /* Title
    ==================== */

副标题


    /* Title
    -------------------- */

## 文件及目录结构

##### 组件样式：`src/styles/src/xxx.scss`  

1. 按需导入公共模块，例`@import '../variables/themes'`

##### 公用模块：`src/styles/src/common/`  

`themes.scss`文件为存放与主题的scss变量。 

1. 组件提供可配置样式均放入该`themes.scss`文件下，注意使用注释做好分类方便维护，避免代码冲突，刑如:  

```@css

/* Slider
==================== */
$--slider-horizontal-runway-color: $--color-primary;

/* Button
==================== */
$--button-test-color: $--color-text-primary;

```

2. 变量以`$--`打头。  
3. 变量均声明为`!default`默认值。

`normalize.scss`存放normallize样式。

##### mixins：`src/styles/src/mixins/`

1. 组件特有mixins，以`_`开头命名，例如`_button.scss`。
2. 公共minxis置入`src/styles/src/mixins/mixins.scss`。
3. function：`src/styles/src/mixins/function.scss`。
4. utils：`src/styles/src/mixins/utils.scss`，常见的例如`utils-clearfix`清除浮动，mixins命名以`utils-`开头。
5. config: `src/styles/src/mixins/config.scss`，里面声明有变量配置项。

---

## 🚧 开发步骤 🚧

### 安装依赖

```shell
yarn install || cnpm install || npm install
```

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
