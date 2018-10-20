import PYCascader from './src/cascader.vue';

PYCascader.install = function cascader(Vue) {
  Vue.component(PYCascader.name, PYCascader);
};

export default PYCascader;
