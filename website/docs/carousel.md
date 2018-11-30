<style>
.test-carousel{
  height: 100%;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #65c9bb;
}
section{
  margin: 10px 0;
}
</style>
## 基础用法

自动轮播与非自动轮播

::: demo 通过autoplay属性来设置是否加载后自动播放
```html
<p>自动播放</p>
<section>
  <py-switch v-model="setting.autorun">
    <span slot="open">On</span>
    <span slot="close">Off</span>
  </py-switch>
</section>
<py-carousel
  v-model="value"
  :autorun="setting.autorun"
  :run-speed="setting.runSpeed"
  :position="setting.position"
  :radius-position="setting.radiusposition"
  :trigger="setting.trigger"
  :arrow="setting.arrow">
  <py-carousel-item>
    <div class="test-carousel">第一张轮播图</div>
  </py-carousel-item>
  <py-carousel-item>
    <div class="test-carousel">第二张轮播图</div>
  </py-carousel-item>
  <py-carousel-item>
    <div class="test-carousel">第三张轮播图</div>
  </py-carousel-item>
  <py-carousel-item>
    <div class="test-carousel">第四张轮播图</div>
  </py-carousel-item>
</py-carousel>
  
<script>

export default {
  data () {
    return {
      value: 0,
      setting: {
        autorun: true,
        runSpeed: 2000,
        position: 'inside',
        radiusposition: false,
        trigger: 'click',
        arrow: 'hover',
      },
    };
  },
};
</script>
```
::: 

<br>

## 进阶设置

轮播图偏好设置

::: demo 通过setting中的属性来设置轮播图效果
```html
<p>指示器位置</p>
<section>
<template>
  <py-button type="success" @click="setting.position='inside'">内部</py-button>
  <py-button type="info" @click="setting.position='outside'">外部</py-button>
  <py-button type="warning" @click="setting.position='none'">不显示</py-button>
</template>
</section>
<p>指示器触发方式</p>
<section>
  <py-button type="success" @click="setting.trigger='hover'">鼠标悬停时</py-button>
  <py-button type="info" @click="setting.trigger='click'">鼠标点击时</py-button>
</section>
<p>两侧箭头显示时机</p>
<section>
  <py-button type="success" @click="setting.arrow='hover'">鼠标悬停时</py-button>
  <py-button type="info" @click="setting.arrow='always'">总是显示</py-button>
  <py-button type="warning" @click="setting.arrow='never'">不显示</py-button>
</section>
<p>轮播图放映速度（毫秒级）</p>
<section>
  <div style="width:100px">
  <py-input v-model="setting.runSpeed" :value='2000'/>
</div>
</section>
<p>圆形指示器</p>
<section>
  <py-switch v-model="setting.radiusposition">
    <span slot="open">On</span>
    <span slot="close">Off</span>
  </py-switch>
</section>
```
::: 

## 参数说明

| 参数            | 说明                  | 类型    | 可选值                                             | 默认值 |
| -------------- | --------------------- | ------- | -------------------------------------------------- | ------ |
| value          | 初始位置               | Number  | medium / small / mini                              |   0   |
| autorun       | 初始是否自动轮播       |  boolean | -                                                 | false |
| run-speed  | 轮播切换速度(单位毫秒)  | Number  | —                                                  | 2000 |
| loop           | 是否开启循环           | boolean | —                                                  | false  |
| position           | 指示器的位置           | 限选值   |inside （内部），outside（外部），none（不显示）      | inside  |
| radius-position     | 圆形指示器             | boolean | —                                                 | false  |
| trigger        | 指示器的触发方式        | 限选值  | click（点击），hover（悬停）                        | click  |
| arrow          | 两侧箭头的显示时        | 限选值  | hover（悬停），always（一直显示），never（不显示）    |hover |
| height         | 是否默认聚焦            | String | —                                                  | auto |
