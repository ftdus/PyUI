import PyCollapse from './src/collapse.vue';

PyCollapse.install = function(Vue) {
  Vue.component(PyCollapse.name, PyCollapse);
};

export default PyCollapse;
