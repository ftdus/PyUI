import PyScroll from './src/scroll.vue';

PyScroll.install = function(Vue) {
  Vue.component(PyScroll.name, PyScroll);
};

export default PyScroll;
