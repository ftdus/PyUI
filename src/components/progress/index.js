import PyProgress from './src/progress.vue';

PyProgress.install = function(Vue) {
  Vue.component(PyProgress.name, PyProgress);
};

export default PyProgress;
