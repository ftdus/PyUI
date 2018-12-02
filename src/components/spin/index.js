import PySpin from './src/spin.vue';

PySpin.install = Vue => {
  Vue.component(PySpin.name, PySpin);
};

export default PySpin;
