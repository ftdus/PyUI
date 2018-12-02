import PYSpin from './src/spin.vue';

PYSpin.install = Vue => {
  Vue.component(PYSpin.name, PYSpin);
};

export default PYSpin;
