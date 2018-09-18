import PYButton from './src/button.vue';
// import PyButtonGroup from './src/button-group.vue';

// PYButton.Group = PYButtonGroup

// export default PYButton

PYButton.install = function PyButton(Vue) {
  Vue.component(PYButton.name, PYButton);
};

// PyButtonGroup.install = function PYButtonGroup(Vue) {
//   Vue.component(PyButtonGroup.name, PyButtonGroup);
// };
// export { PYButton, PyButtonGroup };
export default PYButton;

