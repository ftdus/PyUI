import PyColorPicker from './src/color-picker.vue';

PyColorPicker.install = function(Vue) {
  Vue.component(PyColorPicker.name, PyColorPicker);
};

export default PyColorPicker;
