import Row from './src/row.vue';
import Col from './src/col.vue';

Row.install = function RowFn(Vue) {
  Vue.component(Row.name, Row);
};
Col.install = function ColFn(Vue) {
  Vue.component(Col.name, Col);
};

export default {
  Row, Col,
};
