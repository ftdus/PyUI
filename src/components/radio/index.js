import PyRadio from './src/radio.vue';

PyRadio.install = function(Vue) {
  Vue.component(PyRadio.name, PyRadio);
};

export default PyRadio;
