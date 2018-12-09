import PyRadioGroup from '../radio/src/radio-group.vue';

PyRadioGroup.install = function(Vue) {
  Vue.component(PyRadioGroup.name, PyRadioGroup);
};

export default PyRadioGroup;
