import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './base/style.scss';

import index from './index';

// 使用组件
import PyTabs from './components/tabs';
import PyTabPane from './components/tabPane';

Vue.use(index);
Vue.use(PyTabs);
Vue.use(PyTabPane);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
