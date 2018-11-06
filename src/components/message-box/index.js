import PyMessageBox from './src/message-box.vue';

PyMessageBox.install = function(Vue) {
  Vue.component(PyMessageBox.name, PyMessageBox);
};

export default PyMessageBox;
