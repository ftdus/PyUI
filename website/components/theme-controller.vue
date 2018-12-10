<template>
  <div class="theme-block">
    <py-color-picker class="color-picker" v-model="themeColor"></py-color-picker>
  </div>
</template>

<script>
const debounce = require('lodash.debounce');

export default {
  data() {
    return {
      themeColor: '',
      originCss: '',
    };
  },

  watch: {
    themeColor() {
      this.throttleChangeTheme();
    },
  },

  created() {
    this.throttleChangeTheme = debounce(this.changeTheme, 200);
    this.getOriginStyleSheet();
  },

  methods: {
    changeTheme() {
      const styleText = this.originCss.replace(/(#ff9800)/g, this.themeColor.hex);
      const styleTag = document.createElement('style');
      styleTag.innerText = styleText;
      document.head.appendChild(styleTag);
    },

    getOriginStyleSheet() {
      const xhr = new XMLHttpRequest();
      xhr.open('get', 'https://unpkg.com/files-cdn-base@1.0.1/css/app.css');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            this.originCss = xhr.responseText;
          } else {
            console.log('获取源css失败');
          }
        }
      };
      xhr.send();
    },
  },
};
</script>

<style lang="scss">
.theme-block {
  .color-picker {
    width: 200px;
  }
}
</style>
