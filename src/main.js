import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './base/themes.scss';

import module from './module';

Vue.use(module);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
