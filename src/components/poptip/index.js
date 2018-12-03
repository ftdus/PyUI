import PyPoptip from './src/poptip.vue';

PyPoptip.install = function(Vue) {
  Vue.component(PyPoptip.name, PyPoptip);
};

export default PyPoptip;
