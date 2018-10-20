<template>
  <div class="slider-demo__wrap">
    <div class="slider-demo__item">
      <div class="slider-demo__title">基础用法</div>
      <div class="slider-demo__content">
        <py-slider v-model="value1"></py-slider>
      </div>
    </div>
    <div class="slider-demo__item">
      <div class="slider-demo__title">设置最大、最小值</div>
      <div class="slider-demo__content">
        <py-slider v-model="value2" :min="10" :max="50"></py-slider>
      </div>
    </div>
    <div class="slider-demo__item">
      <div class="slider-demo__title">设置显示、步长</div>
      <div class="slider-demo__content">
        <py-slider v-model="value3" :step="10" show-stops></py-slider>
      </div>
    </div>
    <div class="slider-demo__item">
      <div class="slider-demo__title">禁用样式</div>
      <div class="slider-demo__content">
        <py-slider v-model="value3" disabled></py-slider>
      </div>
    </div>
  </div>
</template>

<script>
import PYSlider from '../../components/slider/';

export default {
  name: "slider-demo",
  components: {
    'py-slider': PYSlider,
  },
  data() {
    return {
      value1: 1,
      value2: 15,
      value3: 20,
    };
  },
  watch: {
    value(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped lang="scss">
  .slider-demo {
    &__item {
      margin: 20px 0;
    }
    &__wrap {
      padding: 10px;
      width: 50%;
    }
    &__title {
      font-size: 18px;
      font-weight: bold;
    }
    &__content {
      padding: 20px;
      margin-top: 10px;
      border: 1px solid #eee;
    }
  }
</style>
