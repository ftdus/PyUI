import PyLayout from './src/layout.vue';

PyLayout.install = function(Vue) {
  Vue.component(PyLayout.name, PyLayout);
};

export default PyLayout;
