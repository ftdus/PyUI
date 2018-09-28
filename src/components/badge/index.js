import PYBadge from './src/badge.vue';

PYBadge.install = function PyButton(Vue) {
  Vue.component(PYBadge.name, PYBadge);
};

export default PYBadge;
