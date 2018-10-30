<template>
    <main>
        <py-header></py-header>
        <div class="main-cnt">
            <router-view></router-view>
        </div>
    </main>
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
main {
  width: 100%;
  height: 100%;
}
.main-cnt {
  margin-top: 60px;
  height: 100%;
}
</style>
