import PYMenuItem from './src/menu-item.vue';

PYMenuItem.install = Vue => {
  Vue.component(PYMenuItem.name, PYMenuItem);
};

export default PYMenuItem;
