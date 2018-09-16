import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './base/style.scss';

import index from './index';

Vue.use(index);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
