import PYMenu from './src/menu.vue';

PYMenu.install = Vue => {
  Vue.component(PYMenu.name, PYMenu);
};

export default PYMenu;
