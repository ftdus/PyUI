<template>
  <py-layout>
    <py-header></py-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
  </py-layout>
</template>

<script>
import PyHeader from './components/header.vue';

export default {
  name: 'app',
  components: {
    PyHeader,
  },
};
</script>

<style lang="scss">
.main-cnt {
  margin-top: 60px;
  height: 100%;
}
</style>
