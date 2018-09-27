import PYSubmenu from './src/submenu.vue';

PYSubmenu.install = Vue => {
  Vue.component(PYSubmenu.name, PYSubmenu);
};

export default PYSubmenu;
