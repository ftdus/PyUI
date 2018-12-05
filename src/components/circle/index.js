import PyCircle from './src/circle.vue';

PyCircle.install = function(Vue) {
  Vue.component(PyCircle.name, PyCircle);
};

export default PyCircle;
