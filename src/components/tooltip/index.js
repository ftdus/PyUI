import PyTooltip from './src/tooltip.vue';

PyTooltip.install = function(Vue) {
  Vue.component(PyTooltip.name, PyTooltip);
};

export default PyTooltip;
