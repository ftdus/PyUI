import Badge from './components/badge/index';
import Button from './components/button/index';
import ButtonGroup from './components/buttonGroup/index';
import Card from './components/card/index';
import Divider from './components/divider/index';
import Icon from './components/icon/index';
import Input from './components/input/index';
import LoadingBar from './components/loadingBar/index';
import Menu from './components/menu/index';
import MenuItem from './components/menu-item/index';
import Slider from './components/slider/index';
import Submenu from './components/submenu/index';
import Switch from './components/switch/index';
import TabPane from './components/tabPane/index';
import Upload from './components/upload/index';
import Rate from './components/rate/index';
import Pagination from './components/pagination/index';
import Notification from './components/notification/index';
import ColorPicker from './components/colorPicker/index';

const components = [
  Badge,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Icon,
  Input,
  // Layout,
  Menu,
  MenuItem,
  Slider,
  Submenu,
  Switch,
  TabPane,
  // Tabs,
  Upload,
  Rate,
  Pagination,
];
const install = function(Vue) {
  const vue = Vue;
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });

  vue.prototype.$loading = LoadingBar;
  vue.prototype.$notify = Notification;

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
  Icon,
  Input,
  LoadingBar,
  Menu,
  MenuItem,
  Slider,
  Submenu,
  Switch,
  TabPane,
  Upload,
  Rate,
  Pagination,
  Notification,
  ColorPicker,
};
