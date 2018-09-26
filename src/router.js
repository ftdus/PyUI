import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/index/index.vue'),
    }, {
      path: '/button',
      name: 'button',
      component: () => import(/* webpackChunkName: "button" */ './testsDemo/button/button.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import(/* webpackChunkName: "card" */ './testsDemo/card/card.vue'),
    },
  ],
});
