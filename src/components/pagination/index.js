import PyPagination from './src/pagination';

PyPagination.install = function(Vue) {
  Vue.component(PyPagination.name, PyPagination);
};

export default PyPagination;
