import PyLayout from './src/layout.vue';
import PyHeader from './src/header.vue';
import PyFooter from './src/footer.vue';
import PyContent from './src/content.vue';
import PySider from './src/sider.vue';

PyLayout.PyHeader = PyHeader;
PyLayout.PyFooter = PyFooter;
PyLayout.PyContent = PyContent;
PyLayout.PySider = PySider;

PyLayout.install = function(Vue) {
  Vue.component(PyLayout.name, PyLayout);
};

export default PyLayout;
