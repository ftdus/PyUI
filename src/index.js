import Badge from './components/badge/index';
import Button from './components/button/index';
import ButtonGroup from './components/buttonGroup/index';
import Card from './components/card/index';
import Divider from './components/divider/index';
import Input from './components/input/index';
import LoadingBar from './components/loadingBar/index';
import Menu from './components/menu/index';
import MenuItem from './components/menu-item/index';
import Slider from './components/slider/index';
import Submenu from './components/submenu/index';
import Switch from './components/switch/index';
import TabPane from './components/tabPane/index';
import Upload from './components/upload/index';
import Pagination from "./components/pagination/index";

const components = [
  Badge,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Input,
  Menu,
  MenuItem,
  Slider,
  Submenu,
  Switch,
  TabPane,
  Upload,
  Pagination,
];
const install = function(Vue) {
  const vue = Vue;
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });

  vue.prototype.$loading = LoadingBar;

  // istanbul ignore if
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
};

export default {
  version: '0.1.0',
  install,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Input,
  LoadingBar,
  Menu,
  MenuItem,
  Slider,
  Submenu,
  Switch,
  TabPane,
  Upload,
  Pagination,
};
