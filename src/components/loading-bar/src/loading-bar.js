import Vue from 'vue';
import loadingBar from './loading-bar.vue';

let loadingBarInstance;
let timer;
/**
 * loadingBar单例
 */
const newInstance = (properties = {}) => {
  loadingBarInstance =
    loadingBarInstance ||
    new Vue({
      data: properties,
      render(h) {
        return h(loadingBar);
      },
    });

  const compile = loadingBarInstance.$mount();
  document.body.appendChild(compile.$el);
  return loadingBarInstance;
};

/**
 * 获取组件
 */
const getCompont = () => (loadingBarInstance || newInstance()).$children[0];

/**
 * d清空定时器
 */
const clearTimer = () => {
  clearInterval(timer);
};

/**
 * 重置组件状态
 */
const reset = () => {
  const compont = getCompont();
  compont.status = 'primary';
  compont.percent = 0;
};

export default {
  // 开始从 0 显示进度条，并自动加载进度
  start() {
    // 防止在关闭之前,又打开了新的进度条,导致无法显示
    setTimeout(() => {
      const compont = getCompont();
      if (compont.percent > 0) {
        return;
      }
      let percent = 0;
      timer = setInterval(() => {
        percent += Math.floor(Math.random() * 3 + 1);
        if (percent > 90) {
          clearTimer();
        }
        compont.percent = percent;
      }, 200);
    }, 100);
  },
  // 结束进度条，自动补全剩余进度
  finish() {
    const compont = getCompont();
    // 所有loading都结束了进度条才会结束
    clearTimer();
    compont.percent = 100;
    setTimeout(() => {
      reset();
    }, 800);
  },
  // 以错误的类型结束进度条，自动补全剩余进度
  error() {
    const compont = getCompont();
    clearInterval(timer);
    compont.percent = 100;
    compont.status = 'error';
    setTimeout(() => {
      reset();
    }, 800);
  },
  /**
   * 精确加载到指定的进度
   * @param percent 指定的进度百分比
   */
  update(percent) {
    const compont = getCompont();
    clearTimer();
    compont.percent = percent;
  },
  destory() {
    loadingBarInstance = null;
    clearTimer();
    document.body.removeChild(document.querySelector('.py-loading-bar'));
  },
};
