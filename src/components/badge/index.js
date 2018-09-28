import PYBadge from './src/main.vue';

PYBadge.install = function PyButton(Vue) {
  Vue.component(PYBadge.name, PYBadge);
};

export default PYBadge;
