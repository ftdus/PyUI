import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import entry from './app.vue';

Vue.use(VueRouter);

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
