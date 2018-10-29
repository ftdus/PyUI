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
  compont.show = false;
  compont.status = 'primary';
  compont.progress = 0;
};

export default {
  // 开始从 0 显示进度条，并自动加载进度
  start() {
    const compont = getCompont();
    let percent = 0;

    compont.show = true;
    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 3 + 1);
      if (percent > 90) {
        clearTimer();
      }
      compont.progress = percent;
    }, 200);
  },
  // 结束进度条，自动补全剩余进度
  finish() {
    const compont = getCompont();
    clearTimer();
    compont.progress = 100;
    setTimeout(() => {
      reset();
    }, 500);
  },
  // 以错误的类型结束进度条，自动补全剩余进度
  error() {
    const compont = getCompont();
    clearInterval(timer);
    compont.progress = 100;
    compont.status = 'error';
    setTimeout(() => {
      reset();
    }, 500);
  },
  /**
   * 精确加载到指定的进度
   * @param progress 指定的进度百分比
   */
  update(progress) {
    const compont = getCompont();
    clearTimer();
    compont.progress = progress;
  },
  destory() {
    loadingBarInstance = null;
    clearTimer();
    document.body.removeChild(document.querySelector('.py-loading-bar'));
  },
};
