import Alert from './components/alert/index';
import Badge from './components/badge/index';
import Button from './components/button/index';
import ButtonGroup from './components/button-group/index';
import Col from './components/col/index';
import Divider from './components/divider/index';
import Icon from './components/icon/index';
import Input from './components/input/index';
import Menu from './components/menu/index';
import MenuItem from './components/menu-item/index';
import Notification from './components/notification/index';
import Rate from './components/rate/index';
import Row from './components/row/index';
import Slider from './components/slider/index';
import Submenu from './components/submenu/index';
import Switch from './components/switch/index';
import TabPane from './components/tab-pane/index';
import Upload from './components/upload/index';

const components = [
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Col,
  Divider,
  Icon,
  Input,
  Menu,
  MenuItem,
  Rate,
  Row,
  Slider,
  Submenu,
  Switch,
  TabPane,
  Upload,
];
const install = function(Vue) {
  const vue = Vue;
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });

  vue.prototype.$notify = Notification;

  // istanbul ignore if
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
};

export default {
  version: '0.1.0',
  install,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Col,
  Divider,
  Icon,
  Input,
  Menu,
  MenuItem,
  Notification,
  Rate,
  Row,
  Slider,
  Submenu,
  Switch,
  TabPane,
  Upload,
};
