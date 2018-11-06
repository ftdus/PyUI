import PyMessage from './src/message.vue';
import PyMessageJS from './src/main';

PyMessage.install = function Message(Vue) {
  Vue.component(PyMessage.name, PyMessage);
};

Object.keys(PyMessageJS).map(v => {
  PyMessage[v] = PyMessageJS[v];
  return true;
});

export default PyMessageJS;
