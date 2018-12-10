<style>
.test-carousel{
  line-height: 220px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #65c9bb;
}
.test{
  height: 220px;
  width: 100%;
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
  <py-switch v-model="setting.loop">
    <span slot="open">On</span>
    <span slot="close">Off</span>
  </py-switch>
</section>
<py-carousel
  class="test"
  v-model="value"
  :autoloop="setting.autoloop"
  :loop="setting.loop"
  :speed="setting.speed"
  :position="setting.position"
  :radius-position="setting.radiusposition"
  :trigger="setting.trigger"
  :arrow="setting.arrow"
  :hoverstop="setting.hoverstop">
  <div class="test-carousel">第一张轮播图</div>
  <div class="test-carousel">第二张轮播图</div>
  <div class="test-carousel">第三张轮播图</div>
  <div class="test-carousel">第四张轮播图</div>
</py-carousel>

<script>

export default {
  data () {
    return {
      value: 0,
      setting: {
        autoloop: true,
        loop: true,
        speed: 2000,
        position: 'inside',
        radiusposition: false,
        trigger: true,
        arrow: 'hover',
        hoverstop: true,
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
  <py-button type="success" @click="setting.position='left'">左侧</py-button>
  <py-button type="info" @click="setting.position='right'">右侧</py-button>
  <py-button type="warning" @click="setting.position='none'">不显示</py-button>
</template>
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
  <py-input v-model.number="setting.speed"></py-input>
</div>
</section>
<p>圆形指示器</p>
<section>
  <py-switch v-model="setting.radiusposition">
    <span slot="open">On</span>
    <span slot="close">Off</span>
  </py-switch>
</section>
<p>鼠标悬停时是否触发指示器</p>
<section>
  <py-switch v-model="setting.trigger">
    <span slot="open">On</span>
    <span slot="close">Off</span>
  </py-switch>
</section>
<p>鼠标悬停时是否暂停播放</p>
<section>
  <py-switch v-model="setting.hoverstop">
    <span slot="open">On</span>
    <span slot="close">Off</span>
  </py-switch>
</section>
```
::: 

<br>

## 参数说明

| 参数            | 说明                  | 类型    | 可选值                                             | 默认值 |
| -------------- | --------------------- | ------- | -------------------------------------------------- | ------ |
| value          | 初始位置               | Number  |  —                                                 |   0   |
| autoloop       | 初始是否自动轮播       |  boolean |  —                                                 | true |
| speed      | 轮播切换速度(单位毫秒)      | Number  | —                                                  | 3000 |
| loop           | 是否开启循环           | boolean | —                                                 | true  |
| position       | 指示器的位置           | 限选值   |inside , outside , left , right , none            | inside  |
| radius-position | 圆形指示器             | boolean | —                                                | false  |
| trigger        | 是否鼠标悬停时触发指示器 | boolean |                                                  | true  |
| arrow          | 两侧箭头的显示时        | 限选值  | hover , always , never                             |hover |
| hoverstop      | 鼠标进入轮播图时是否暂停播放 | boolean | —                                             | true |


<br>

## 组件插槽位置

`<py-carousel>`的宽度与高度向外自适应，所以你应该给`<py-carousel>`指定高度与宽度

你可以在`<py-carousel>`节点下插入任意的代码块用来展示轮播图

::: demo

```html
<py-carousel style="height:230px; text-align:center;">
  <div>
    <h1>《预感》</h1>
    <p>我像一面旗包围在辽阔的空间。</p>
    <p>我觉得风从四方吹来，我必须忍耐，</p>
    <p>我下面的一切都还没有动静</p>
    <p>门依然轻轻关闭，烟囱里还没有声音；</p> 
    <p>窗子还没有颤动，尘土还很重。</p>
  </div>
  <section>
    <p>我认出了风暴而且激动如大海</p>
    <p>我舒展开又跌回我自己，</p>
    <p>又把自己抛出去，并且独个儿</p> 
    <p>置身在伟大的风暴里。</p>
  </section>
  <div>
    <h1>这是一个h1标题标签</h1>
    <p> 当然，你也可以在这里插一张图片</p>
  </div>
</py-carousel>
```
:::

轮播展示的是`py-carousel`节点的下一级所有同层子节点，所以如果你单页轮播展示的内容代码较多，建议用一个`<div>`块包起来

**比如这样**

```html
<py-carousel>
  <div>
    代码块1
  </div>
  <div>
    代码块2
  </div>
</py-carousel>
```
> carousel组件内轮播的代码块宽高应该与carousel组件宽高相同，以确保展示的内容不会变形
