import PyMenuGroup from '../menu/src/menu-group.vue';

PyMenuGroup.install = Vue => {
  Vue.component(PyMenuGroup.name, PyMenuGroup);
};

export default PyMenuGroup;
