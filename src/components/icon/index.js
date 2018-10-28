import PyIcon from './src/icon.vue';

PyIcon.install = function(Vue) {
  Vue.component(PyIcon.name, PyIcon);
};

export default PyIcon;
