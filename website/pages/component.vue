<template>
    <div class="main-component">
        <div class="left">
            <py-nav></py-nav>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import pyNav from '../components/nav.vue';

export default {
  data() {
    return {};
  },
  components: {
    pyNav,
  },
  mounted() {},
};
</script>

<style lang="scss">
.main-component {
  display: flex;
  width: 1140px;
  padding: 0;
  margin: 0 auto;
  height: 100%;
  .left,
  .right {
    padding: 10px;
    padding-top: 50px;
  }
  .right {
    width: 100%;
  }
}
</style>
