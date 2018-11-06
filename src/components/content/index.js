import PyContent from '../layout/src/content.vue';

PyContent.install = function(Vue) {
  Vue.component(PyContent.name, PyContent);
};

export default PyContent;
