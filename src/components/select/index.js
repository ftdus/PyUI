import PySelect from './src/select.vue';

PySelect.install = function(Vue) {
  Vue.component(PySelect.name, PySelect);
};

export default PySelect;
