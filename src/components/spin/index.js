import PySpin from './src/spin.vue';

PySpin.install = function(Vue) {
  Vue.component(PySpin.name, PySpin);
};

export default PySpin;
