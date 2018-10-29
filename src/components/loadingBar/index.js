import loadingBar from './src/loadingBar.vue';
import loadingBarJS from './src/loadingBar';

/* istanbul ignore next */
loadingBar.install = function input(Vue) {
  Vue.component(loadingBar.name, loadingBar);
};

Object.keys(loadingBarJS).map(v => {
  loadingBar[v] = loadingBarJS[v];
  return true;
});

export default loadingBar;
