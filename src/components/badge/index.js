import PyBadge from './src/badge.vue';

PyBadge.install = function(Vue) {
  Vue.component(PyBadge.name, PyBadge);
};

export default PyBadge;
