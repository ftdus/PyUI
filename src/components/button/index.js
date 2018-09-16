import PYButton from './src/button.vue';

/* istanbul ignore next */
PYButton.install = function (Vue) {
  Vue.component(PYButton.name, PYButton);
};

export default PYButton;
