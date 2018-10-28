import PyTabPane from './src/tab-pane.vue';

PyTabPane.install = function(Vue) {
  Vue.component(PyTabPane.name, PyTabPane);
};

export default PyTabPane;
