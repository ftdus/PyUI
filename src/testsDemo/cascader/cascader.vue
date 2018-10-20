<template>
  <div class="container">
    <div class="demo-box">
      <h3 class="demo-box__title">基础用法</h3>
      <p class="demo-box__desc">click触发子菜单与hover触发子菜单</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions1"></py-cascader>
        <!-- <py-cascader class="demo-cascader"></py-cascader> -->
      </div>
    </div>
  </div>
</template>
<script>
import PYCascader from '../../components/cascader';
import { demoOptions1 } from './mock';

export default {
  components: {
    'py-cascader': PYCascader,
  },
  data() {
    return {
      demoOptions1,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
  // margin-bottom: 20px;
}
.demo-box {
  margin: 30px 0px;
  &__title {
    margin: 10px 0px;
  }
  &__desc {
    margin: 10px 0px;
  }
  &__cascader-box {
    display: flex;
  }
}
.demo-cascader {
  margin-right: 100px;
}
</style>
