import PYButton from './src/button.vue';

PYButton.install = function(Vue) {
  Vue.component(PYButton.name, PYButton);
};

export default PYButton;
