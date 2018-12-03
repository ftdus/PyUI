<style lang="scss">
  .row{
    .py-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  }
</style>
<script>
  const stringList = ['A', 'Short', 'LongLong'];
  const ColorList = ['#ff9800', '#5e8a49', '#6a96b1'];
  
  export default {
    data() {
      return {
        string: stringList[0],
        color: ColorList[0],
        customIconClass: ['pyui-icons', 'py-icon-heart-fill'],
      }
    },
    methods: {
      handleChange () {
        const index = stringList.indexOf(this.string);
        this.string = index < stringList.length - 1 ? stringList[index + 1] : stringList[0];
        this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
      }
    }      
  }
</script>

## Avatar 头像

该组件用来显示头像，支持传入图片、图标或英文字符。

### 基础用法

头像有三种尺寸（'default', 'small', 'large'），两种形状（'circle', 'square'）可选。

:::demo

```html
<template>
    <div>
        <div class="row">
            <py-avatar icon="frown" size="large"></py-avatar>
            <py-avatar icon="frown"></py-avatar>
            <py-avatar icon="frown" size="small"></py-avatar>
        </div>
        <div class="row">
            <py-avatar shape="square" icon="frown" size="large"></py-avatar>
            <py-avatar shape="square" icon="frown"></py-avatar>
            <py-avatar shape="square" icon="frown" size="small"></py-avatar>
        </div>
    </div>
</template>
```
:::

### 可引入类型 

支持三种类型：图片、Icon图标 以及字符串，Icon可以为py-icon库中的图标，也可以传入自定义icon类，以数组方式传入class类，其中 Icon 和字符型也可以自定义颜色及背景色。

:::demo

```html
<template>
    <div class="row">
        <py-avatar icon="frown"></py-avatar>
        <py-avatar>A</py-avatar>
        <py-avatar>Long</py-avatar>
        <py-avatar src="https://cn.vuejs.org/images/logo.png"></py-avatar>
        <py-avatar color="#f56a00" background-color="#fde3cf" icon="frown"></py-avatar>
        <py-avatar color="#f56a00" background-color="#fde3cf">U</py-avatar>
        <py-avatar :custom-icon="customIconClass"></py-avatar>
    </div>
</template>
<script>
    export default {    
      data() {
        return {
          customIconClass: ['pyui-icons', 'py-icon-heart-fill'],
        }
      },
    }
</script>
```
:::

### 字符串长度自适应与头像自定义点击事件

对于字符型的头像，根据字符串的长度，自动调节字体大小使头像宽度自动调整。

:::demo

```html
<template>
    <div class="row">
        <py-avatar :background-color="color" @click="handleChange">{{ string }}</py-avatar>
        <div>点击头像自动切换不同长度字符串</div>
    </div>
</template>
<script>
  const stringList = ['A', 'Short', 'LongLong'];
  const ColorList = ['#ff9800', '#5e8a49', '#6a96b1'];
  
  export default {
    data() {
      return {
        string: stringList[0],
        color: ColorList[0],
      }
    },
    methods: {
      handleChange () {
        const index = stringList.indexOf(this.string);
        this.string = index < stringList.length - 1 ? stringList[index + 1] : stringList[0];
        this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
      }
    }      
  }
</script>
```
:::

### Attributes

| 参数        | 说明            | 类型    | 可选值                                              | 默认值  |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------- |
| shape       | 指定头像的形状  | string  | circle、square                                      | circle  |
| size        | 设置头像的大小  | string  | large、small、default                               | default |
| src         | 图片类头像的资源地址  | string | —                                              | —       |
| icon        | 设置头像图标类型，具体类型参考PyIcon组件   | string | —                          | —       |
| custom-icon | 自定义图标      | string[ ] | —                                                | —       |
| color       | 自定义字体或图标颜色   | string | —                                             |  #fff   |
| background-color | 自定义背景颜色      | string | —                                           | #ccc    |

### Event

| 方法名       | 说明          | 类型       | 可选值     | 默认值  | 
| ----------- | --------------  | -------   | -------   | ------- | 
| click       | 头像点击事件   | Function   | —         | —       |