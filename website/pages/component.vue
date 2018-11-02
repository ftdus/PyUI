<template>
  <py-layout class="main-component">
    <py-sider width="240px">
      <py-nav></py-nav>
    </py-sider>
    <py-content class="right">
      <router-view></router-view>
    </py-content>
  </py-layout>
</template>

<script>
import PyNav from '../components/nav.vue';

export default {
  components: {
    PyNav,
  },
};
</script>

<style lang="scss">
.main-component {
  display: flex;
  width: 1140px;
  padding-top: 40px;
  margin: 0 auto;
  height: 100%;

  .right {
    width: 900px;
    padding-left: 40px;
  }
}
</style>
