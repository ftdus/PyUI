import PyCascader from './src/cascader.vue';

PyCascader.install = function(Vue) {
  Vue.component(PyCascader.name, PyCascader);
};

export default PyCascader;
