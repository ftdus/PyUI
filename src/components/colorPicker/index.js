import PYColorPicker from './src/colorPicker.vue';

PYColorPicker.install = function PYcolorPicker(Vue) {
  Vue.component(PYColorPicker.name, PYColorPicker);
};

export default PYColorPicker;
