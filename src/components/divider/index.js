import PYDivider from './src/divider.vue';

PYDivider.install = function PYDIvider(Vue) {
  Vue.component(PYDivider.name, PYDivider);
};

export default PYDivider;
