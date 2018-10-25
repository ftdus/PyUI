import PYInput from './src/Input.vue';

/* istanbul ignore next */
PYInput.install = function input(Vue) {
  Vue.component(PYInput.name, PYInput);
};

export default PYInput;
