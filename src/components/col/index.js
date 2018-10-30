import PyCol from './src/col.vue';

PyCol.install = function(Vue) {
  Vue.component(PyCol.name, PyCol);
};

export default PyCol;
