<template>
  <div style="margin: 50px">
    <py-slider v-model="value" :step="5" show-stops></py-slider>
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
      value: 0,
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

</style>
