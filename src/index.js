
import Button from "./components/button/index";

const components = [
  Button,
];

const install = function (Vue) {
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });

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
