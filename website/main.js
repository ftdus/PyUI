import 'highlight.js/styles/color-brewer.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import entry from './app.vue';
import demoBlock from './components/demo-block.vue';

import './assets/styles/common.scss';
import './assets/styles/docs.scss';

import PyUI from '../src/index';
import '../src/styles/src/index.scss';

Vue.use(PyUI);

Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes,
});

new Vue({
  // eslint-disable-line
  render: h => h(entry),
  router,
}).$mount('#app');
