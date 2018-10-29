import PySider from '../layout/src/sider.vue';

PySider.install = function(Vue) {
  Vue.component(PySider.name, PySider);
};

export default PySider;
