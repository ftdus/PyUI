import PyPagination from './src/pagination.js';

PyPagination.install = function(Vue) {
  Vue.component(PyPagination.name, PyPagination);
};

export default PyPagination;
