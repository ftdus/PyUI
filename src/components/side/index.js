import Side from './src/main.vue';

/* istanbul ignore next */
Side.install = function(Vue) {
  Vue.component(Side.name, Side);
};

export default Side;
