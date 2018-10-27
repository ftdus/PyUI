import PYColorPicker from './src/color-picker.vue';

PYColorPicker.install = function(Vue) {
  Vue.component(PYColorPicker.name, PYColorPicker);
};

export default PYColorPicker;
