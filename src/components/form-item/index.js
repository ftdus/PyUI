import PyFormItem from './src/form-item.vue';

PyFormItem.install = function(Vue) {
  Vue.component(PyFormItem.name, PyFormItem);
};

export default PyFormItem;
