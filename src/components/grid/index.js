import PyRow from './src/row.vue';
import PyCol from './src/col.vue';

PyRow.install = function(Vue) {
  Vue.component(PyRow.name, PyRow);
};
PyCol.install = function(Vue) {
  Vue.component(PyCol.name, PyCol);
};

export { PyRow, PyCol };
