import PyAlert from './src/alert.vue';

PyAlert.install = function(Vue) {
  Vue.component(PyAlert.name, PyAlert);
};

export default PyAlert;
