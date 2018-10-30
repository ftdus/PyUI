import PyMenuItem from '../menu/src/menu-item.vue';

PyMenuItem.install = Vue => {
  Vue.component(PyMenuItem.name, PyMenuItem);
};

export default PyMenuItem;
