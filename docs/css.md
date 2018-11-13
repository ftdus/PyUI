# PyUI CSS设计

参考ElementCSS架构

## 语言

CSS预处理语言统一使用`scss`

## 命名及书写规范

- 命名使用BEM规范，包含Block、Element、Modifier三部分组成，我们使用`__`双下划线作为`Element`连接符，使用`--`双中划线连接`Modifier`，`-`作为单词连接符。
- BEM统一使用`b`、`e`、`m`Mixins来书写。
- scss变量命名以`-`单中划线分割，尽量语义化，例如`$--tab-vertical-header-width`，以`block-modifier-element-modifier`方式组成，以`$--`打头。

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

##### 公用模块：`src/styles/base/`  

`variables/themes.scss`文件为存放与组件样式有关的scss变量，以后提供给用户进行主题定制。 

1. 组件提供可定制的样式均放入该`themes.scss`文件下，注意使用注释做好分类方便维护，避免代码冲突，刑如:  

```@css

/* Slider
-------------------- */
$--slider-horizontal-runway-color: $--color-primary;

/* Button
-------------------- */
$--button-test-color: $--color-text-primary;

```

2. 变量以`$--`打头。  
3. 变量均声明为`!default`默认值。

`normalize.scss`存放normallize样式。

##### mixins：`src/styles/base/mixins/`

1. 组件特有mixins，以`_`开头命名，例如`_button.scss`。
2. 公共minxis置入`src/styles/src/mixins/mixins.scss`。
3. function：`src/styles/src/mixins/function.scss`。
4. utils：`src/styles/src/mixins/utils.scss`，常见的例如`utils-clearfix`清除浮动，mixins命名以`utils-`开头。
5. config: `src/styles/src/mixins/config.scss`，里面声明有变量配置项，包含BEM符号及命名空间。


## 使用

##### BEM  
无须书写繁琐的BEM符号，使用mixins定义Block、Element、Modifier，详见文件`/src/styles/base/mixins.scss`。

##### 主题变量  
在`themes.scss`文件里书写并定义组件可定制样式变量，定义先可先参考文件里的注释。

## 最后

CSS架构在不断迭代，目前还只是个孩纸，希望大家积极提出自己开发过程中书写CSS时感觉到的繁琐和不爽，或在CSS设计方面的建议，我们一起不断优化和改进。
