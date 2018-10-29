import PyTabs from './src/tabs.vue';

PyTabs.install = function(Vue) {
  Vue.component(PyTabs.name, PyTabs);
};

export default PyTabs;
