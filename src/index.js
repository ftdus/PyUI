
import Button from "./components/button/index";
import Input from "./components/input/index";
import loadingBar from "./components/loadingBar/index";

const components = [
  Button, Input,
];
const install = function (Vue) {
  const vue = Vue;
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });
  vue.prototype.$loading = loadingBar;
  // istanbul ignore if
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
};

export default {
  version: '0.0.1',
  install,
  Button,
};

/* module.exports = {

};

module.exports.default = module.exports; */
