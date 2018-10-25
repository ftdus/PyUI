import Vue from 'vue';
import App from './App.vue';
import router from './router';

import index from './index';
import './styles/src/index.scss';

Vue.use(index);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
