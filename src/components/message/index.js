import PyMessage from './src/message.vue';
import PyMessageJS from './src/main';

PyMessage.install = function Message(Vue) {
  Vue.component(PyMessage.name, PyMessage);
};

export default PyMessageJS;
