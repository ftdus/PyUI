import Header from './src/main.vue';

/* istanbul ignore next */
Header.install = function(Vue) {
  Vue.component(Header.name, Header);
};

export default Header;
