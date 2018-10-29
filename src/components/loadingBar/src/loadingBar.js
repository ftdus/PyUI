import Vue from 'vue';
import loadingBar from "./loadingBar.vue";

let InterTime;
let data;
export default {
  init() {
    const v = new Vue({
      render(h) {
        return h(loadingBar);
      },
    });
    return v.$mount();
  },
  start(_props) {
    const el = document.querySelectorAll('.py-loaderBar')[0];
    if (el) return false;
    const m = this.init(_props);
    data = m.$children[0].$data;
    data = Object.assign(data, _props);
    document.body.appendChild(m.$el);
    InterTime = setInterval(() => {
      if (data.progress < 96) {
        data.progress += 1;
      }
    }, 100);
    return true;
  },
  close(_props) {
    const el = document.querySelectorAll('.py-loaderBar')[0];
    if (el) {
      data = Object.assign(data, _props, {
        progress: 100,
      });
      setTimeout(() => {
        document.body.removeChild(el);
        clearInterval(InterTime);
      }, 350);
    }
  },
  updata(_props) {
    const el = document.querySelectorAll('.py-loaderBar')[0];
    if (!el) return false;
    data = Object.assign(data, _props);
    return true;
  },
  err(_props) {
    const el = document.querySelectorAll('.py-loaderBar')[0];
    if (el) {
      this.close({
        color: '#f71212',
      });
    } else {
      this.start(_props || {
        color: '#f71212',
      });
    }
  },
};
