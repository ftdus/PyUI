import PYButton from './src/button.vue';

PYButton.install = function PyButton(Vue) {
  Vue.component(PYButton.name, PYButton);
};

export default PYButton;
