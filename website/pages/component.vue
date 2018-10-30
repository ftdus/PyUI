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
import PyNav from '../components/nav.vue';

export default {
  data() {
    return {};
  },
  components: {
    PyNav,
  },
  watch: {
    $route: 'setNewHeight',
  },
  methods: {
    setNewHeight() {
      this.$nextTick(() => {
        const { height } = window.getComputedStyle(document.querySelector('.right section'));
        const minHeight = 600;
        const actualHeight =
          parseInt(height, 10) < minHeight ? `${minHeight}px` : height;
        document.querySelector('.right').style.height = actualHeight;
      });
    },
  },
  mounted() {
    this.setNewHeight();
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
    border-left: 1px solid #dcdfe6;
  }
}
</style>
