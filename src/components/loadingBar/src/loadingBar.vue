<template>
  <transition name="fade">
    <div class="py-loaderBar" ref="loaderBar"
    :style="{width: `${progress}%`, background: color, boxShadow: `0 0 1px ${color}`}" />
  </transition>
</template>

<script>
export default {
  name: 'loadingBar',
  data() {
    return {
      progress: 0,
      color: '#f71212',
    };
  },
  watch: {
    progress(n) {
      if (Object.prototype.toString.call(n) !== '[object Number]') {
        this.progress = 0;
        console.error(`PYUI---${n} Not a valid Number`);
      }
    },
    color(n) {
      if (Object.prototype.toString.call(n) !== '[object String]') {
        this.color = '#f71212';
        console.error(`PYUI---${n} Not a valid String`);
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/base/themes.scss";
.py-loaderBar {
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  transition: 0.3s;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    width: 50px;
    animation: 1s aniRight infinite linear;
  }
}
@keyframes aniRight {
  1% {
    left: 0;
  }
  100% {
    left: 100vw;
  }
}
</style>
