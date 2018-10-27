import PYInputNumber from './src/InputNumber.vue';

PYInputNumber.install = function inputNumber(Vue) {
  Vue.component(PYInputNumber.name, PYInputNumber);
};

export default PYInputNumber;