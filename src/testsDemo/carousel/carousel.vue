<template>
  <div class="demo">
    <div class="test-block">
      <py-carousel
        v-model="value"
        :autorun="setting.autoplay"
        :run-speed="setting.autoplaySpeed"
        :position="setting.position"
        :radius-position="setting.radiusDot"
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
    </div>
    <h2>指示器位置</h2>
    <section>
      <py-select
        v-model="setting.position"
        :popper-append-to-body="false"
        :data="selectData">
      </py-select>
    </section>
    <h2>指示器触发方式</h2>
    <section>
      <py-select
        v-model="setting.trigger"
        :popper-append-to-body="false"
        :data="selectfunction">
      </py-select>
    </section>
    <h2>两侧箭头位置</h2>
    <section>
      <py-select
        v-model="setting.arrow"
        :popper-append-to-body="false"
        :data="selectArrow">
      </py-select>
    </section>
    <h2>轮播图放映速度（毫秒级）</h2>
    <section>
      <div style="width:100px">
      <py-input v-model="setting.autoplaySpeed" :value='2000'/>
    </div>
    </section>
    <h2>自动播放</h2>
    <section>
      <py-switch v-model="setting.autoplay">
        <span slot="open">On</span>
        <span slot="close">Off</span>
      </py-switch>
    </section>
    <h2>圆形指示器</h2>
    <section>
      <py-switch v-model="setting.radiusDot">
        <span slot="open">On</span>
        <span slot="close">Off</span>
      </py-switch>
    </section>
  </div>
</template>

<script>
import PyCarousel from "../../components/carousel";
import PyCarouselItem from "../../components/carousel-item";
import PySwitch from "../../components/switch";
import PySelect from '../../components/select';
import PyInput from '../../components/input';

export default {
  components: {
    'py-carousel': PyCarousel,
    'py-carousel-item': PyCarouselItem,
    'py-switch': PySwitch,
    'py-select': PySelect,
    'py-input': PyInput,
  },
  data () {
    return {
      value: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 2000,
        position: 'inside',
        radiusDot: true,
        trigger: 'click',
        arrow: 'hover',
      },
      selectData: [
        {
          value: 'inside',
          label: '内部',
        },
        {
          value: 'outside',
          label: '外部',
        },
        {
          value: 'none',
          label: '不显示',
        },
      ],
      selectArrow: [
        {
          value: 'hover',
          label: '鼠标悬停时显示',
        },
        {
          value: 'always',
          label: '总是显示',
        },
        {
          value: 'never',
          label: '不显示',
        },
      ],
      selectfunction: [
        {
          value: 'hover',
          label: '鼠标悬停时显示',
        },
        {
          value: 'click',
          label: '鼠标点击时',
        },
      ],
    };
  },
};
</script>

<style>
.demo {
  padding: 20px;
  margin: 20px;
}
.test-block{
  width: 400px;
  border: 1px solid #cccccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
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
