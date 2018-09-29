import PyTabPane from '../tabs/src/tab-pane.vue';

PyTabPane.install = function PyButton(Vue) {
  Vue.component(PyTabPane.name, PyTabPane);
};

export default PyTabPane;
