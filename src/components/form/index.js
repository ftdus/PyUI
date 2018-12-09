import PyForm from './src/form.vue';

PyForm.install = function(Vue) {
  Vue.component(PyForm.name, PyForm);
};

export default PyForm;
