import PYButtonGroup from './src/button-group.vue';

PYButtonGroup.install = function PyBUttonGroup(Vue) {
  Vue.component(PYButtonGroup.name, PYButtonGroup);
};

export default PYButtonGroup;
