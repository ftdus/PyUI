<template>
  <div style="margin: 50px">
    <py-slider v-model="value" :step="10"></py-slider>
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
      value: 50,
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
