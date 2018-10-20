import PYRate from './src/rate.vue';

/* istanbul ignore next */
PYRate.install = function rate(Vue) {
  Vue.component(PYRate.name, PYRate);
};

export default PYRate;
