import PyButtonGroup from './src/button-group.vue';

PyButtonGroup.install = function(Vue) {
  Vue.component(PyButtonGroup.name, PyButtonGroup);
};

export default PyButtonGroup;
