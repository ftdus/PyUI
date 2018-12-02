## spin 加载进度条

### 基础用法

:::demo

```html
<style lang="scss">
.demo-1{
  width:200px;height:200px;
  display:inline-block;text-align:center;
  position:relative;border:1px solid #ddd;
}
.pyui-icons{
  margin-bottom:10px;
}
.demo-1 p{
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%,-50%);
}
.demo-1 + .demo-1{
  margin-left:20px;
}
button {
  display:block;
}
.load3 span{
  border-radius: 50%;background: #1282eb;
  width:7px;height:7px;margin: 8px;
  animation:load3 infinite 0.8s linear;
  display: inline-block;
}
.load3 span:nth-child(1){
  animation-delay: .5s;
}
.load3 span:nth-child(2){
  animation-delay: 1s;
}
.load3 span:nth-child(3){
  animation-delay: 1.5s;
}
@keyframes load3{
  50%{
    transform: scale(3)
  }
}
</style>
<template>
  <div class='demo-1'>
    <py-spin fix />
  </div>
</template>
```
:::

### 自定义body内容

:::demo

```html
<template>
  <div class='demo-1'>
    <py-spin fix>
      加载中
    </py-spin>
  </div>
  <div class='demo-1'>
    <py-spin fix>
      <div>
        <py-icon size="20" type="load"/>
      </div>
      加载中...
    </py-spin>
  </div>
  <div class='demo-1'>
    <py-spin fix>
      <div class="load3">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </py-spin>
  </div>
</template>
```

:::

### 切换状态

:::demo

```html
<template>
  <div class='demo-1'>
    <py-spin fix v-if='toggle'></py-spin>
    <p>
      py-spin
    </p>
  </div>
  <div>
    切换显示状态： <py-switch v-model="toggle" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      toggle: false
    }
  }
}
</script>
```

:::

### Attributes

| 参数            | 说明                        | 类型           | 可选值 | 默认值 |
| ----------     | --------------------------- | ---------------| ------ | ----- |
| spinClass      | 自定义外层class              | string         |        |       |
| transitionName | 可自定义外层transition的name | string         |        |spin-fade|
| fix            | 使用fixed还是absolute       | Boolean        | true, false |false|


### slots

| 名称            | 说明           |
| ----------     | --------------- |
| 无             | 自定义 Spin 的内容 |
