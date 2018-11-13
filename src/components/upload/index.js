import PyUpload from './src/upload.vue';

PyUpload.install = function PyButton(Vue) {
  Vue.component(PyUpload.name, PyUpload);
};

export default PyUpload;
