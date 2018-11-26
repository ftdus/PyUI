<style>
.py-row {
    margin-top: 10px;
}
.py-col:nth-child(odd) {
    background-color: rgba(0, 153, 229, 0.7);
}
.py-col:nth-child(even) {
    background-color: rgba(0, 153, 229, 0.9);
}
.wrap {
    border: 1px solid #eee;
}
.py-row-bg {
    background-color: #eee;
}
.py-row-bg p {
    color: #fff;
}

</style>

## Grid 栅格

### 概述

我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页局，可以使页面排版美观、舒适。我们定义了两个概念，行row和列col

::: demo 具体使用方法如下:
    使用 row 在水平方向创建一行

    将一组 col 插入在 row 中
    在每个 col 中，键入自己的内容
    通过设置 col 的 span 参数，指定跨越的范围，其范围是 1 到 24
    每个 row 中的 col 总和应该为 24


```html
<py-row>
    <py-col span="24">100%</py-col>
</py-row>
<py-row>
    <py-col span="1">py-col-12</py-col>
    <py-col span="23">py-col-12</py-col>
</py-row>
<py-row>
    <py-col span="8">py-col-8</py-col>
    <py-col span="8">py-col-8</py-col>
    <py-col span="8">py-col-8</py-col>
</py-row>
<py-row>
    <py-col span="6">py-col-6</py-col>
    <py-col span="6">py-col-6</py-col>
    <py-col span="6">py-col-6</py-col>
    <py-col span="6">py-col-6</py-col>
</py-row>
<py-row>
    <py-col span="16">py-col-16</py-col>
    <py-col span="8">py-col-8</py-col>
</py-row>
```
:::

### 基础用法

::: demo 水平排列的布局，col必须放在row里

```html
<py-row>
    <py-col span="12">py-col-12</py-col>
    <py-col span="12">py-col-12</py-col>
</py-row>
<py-row>
    <py-col span="8">py-col-8</py-col>
    <py-col span="8">py-col-8</py-col>
    <py-col span="8">py-col-8</py-col>
</py-row>
<py-row>
    <py-col span="6">py-col-6</py-col>
    <py-col span="6">py-col-6</py-col>
    <py-col span="6">py-col-6</py-col>
    <py-col span="6">py-col-6</py-col>
</py-row>
```
:::

### 区块间隔


::: demo 通过给row添加cervice属性，可以给下面的col添加间距

```html
<py-row :crevice="8">
    <py-col span="6">
        <div>py-col-6</div>
    </py-col>
    <py-col span="6">
        <div>py-col-6</div>
    </py-col>
    <py-col span="6">
        <div>py-col-6</div>
    </py-col>
    <py-col span="6">
        <div>py-col-6</div>
    </py-col>
</py-row>
```
:::

### 栅格顺序(flex)

::: demo 通过 Flex 布局的order来改变栅格的顺序。

```html
<py-row type="flex">
    <py-col span="6" order="1">1</py-col>
    <py-col span="6" order="2">2</py-col>
    <py-col span="6" order="3">3</py-col>
    <py-col span="6" order="4">4</py-col>
</py-row>
```
:::

### 栅格排序

::: demo 通过设置push和pull来改变栅格的顺序。

```html
<py-row>
    <py-col span="18" push="6">18</py-col>
    <py-col span="6" pull="18">6</py-col>
</py-row>
```
::: 

### 左右偏移

::: demo 通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。

```html
<py-row>
    <py-col span="8">py-col-8</py-col>
    <py-col span="8" offset="8">py-col-8 | offset-8</py-col>
</py-row>
<br>
<py-row>
    <py-col span="6" offset="8">py-col-8 | offset-8</py-col>
    <py-col span="6" offset="4">py-col-8 | offset-4</py-col>
</py-row>
```
:::

### Flex 布局

通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。

::: demo

```html
<p class="title">start</p>
<py-row type="flex" justify="start">
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
</py-row>
<br>
<p class="title">end</p>
<py-row type="flex" justify="end">
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
</py-row>
<br>
<p class="title">center</p>
<py-row type="flex" justify="center">
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
</py-row>
<br>
<p class="title">space-between</p>
<py-row type="flex" justify="space-between">
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
</py-row>
<br>
<p class="title">space-around</p>
<py-row type="flex" justify="space-around">
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
    <py-col span="4">py-col-4</py-col>
</py-row>
```
:::

### Flex 对齐
通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。

::: demo

```html
<p>顶部对齐</p>
<py-row type="flex" justify="center" align="top" class="py-row-bg">
    <py-col span="4"><p style="height: 80px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 30px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 100px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 60px">py-col-4</p></py-col>
</py-row>
<p>底部对齐</p>
<py-row type="flex" justify="center" align="bottom" class="py-row-bg">
    <py-col span="4"><p style="height: 80px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 30px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 100px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 60px">py-col-4</p></py-col>
</py-row>
<p>居中对齐</p>
<py-row type="flex" justify="center" align="middle" class="py-row-bg">
    <py-col span="4"><p style="height: 80px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 30px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 100px">py-col-4</p></py-col>
    <py-col span="4"><p style="height: 60px">py-col-4</p></py-col>
</py-row>
```
:::

### 响应式布局
参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs sm md lg，详见 API。调整浏览器尺寸来查看效果。

::: demo

```html
<py-row>
    <py-col :xs="2" :sm="4" :md="6" :lg="8">py-col</py-col>
    <py-col :xs="20" :sm="16" :md="12" :lg="8">py-col</py-col>
    <py-col :xs="2" :sm="4" :md="6" :lg="8">py-col</py-col>
</py-row>
```
:::

### 其他属性的响应式
span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs="6" 相当于 :xs="{ span: 6 }"。

::: demo

```html
<py-row>
    <py-col :xs="{ span: 5, offset: 1 }"
        :lg="{ span: 6, offset: 2 }">py-col</py-col>
    <py-col :xs="{ span: 11, offset: 1 }"
        :lg="{ span: 6, offset: 2 }">py-col</py-col>
    <py-col :xs="{ span: 5, offset: 1 }"
        :lg="{ span: 6, offset: 2 }">py-col</py-col>
</py-row>
```
:::

### Attribute
#### Row props

| 参数        | 说明                                                                               | 类型    | 默认值 |
| ----------- | --------------------------------------------------------------------------------- | ------- | ------ |
| cervice     | 栅格间距，单位 px，左右平分                                                         | Number  | 0
| type        | 布局模式，可选值为flex或不选，在现代浏览器下有效                                      | String  | -
| align       | flex 布局下的垂直对齐方式，可选值为top、middle、bottom                               | String  | -
| justify     | flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between   | String  | -

#### Col props 

| 属性	      | 说明	                                                     | 类型	               | 默认值   |
| ----------- | ----------------------------------------------------------- | ------------------- | -------- |
| span	      | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none	|  Number | String	  | -
| order	      | 栅格的顺序，在flex布局模式下有效	                           | Number | String	 | -
| offset      | 栅格左侧的间隔格数，间隔内不可以有栅格	                        | Number | String	  | -
| push	      | 栅格向右移动格数	                                          | Number | String	    | -
| pull	      | 栅格向左移动格数	                                          | Number | String	    | -
| xs	      | <768px 响应式栅格，可为栅格数或一个包含其他属性的对象	         | Number | Object	   | -
| sm	      | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象	         | Number | Object	   | -
| md	      | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象	         | Number | Object	   | -
| lg	      | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象	         | Number | Object	   | -