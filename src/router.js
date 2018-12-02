import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/index/index.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import(/* webpackChunkName: "button" */ './testsDemo/button/button.vue'),
    },
    {
      path: '/divider',
      name: 'divider',
      component: () => import(/* webpackChunkName: "divider" */ './testsDemo/divider/divider.vue'),
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import(/* webpackChunkName: "button" */ './testsDemo/badge/badge.vue'),
    },
    {
      path: '/input',
      name: 'input',
      component: () => import(/* webpackChunkName: "button" */ './testsDemo/input/input.vue'),
    },
    {
      path: '/loadingBar',
      name: 'loadingBar',
      component: () =>
        import(/* webpackChunkName: "button" */ './testsDemo/loadingBar/loadingBar.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import(/* webpackChunkName: "card" */ './testsDemo/card/card.vue'),
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: () => import(/* webpackChunkName: "Tabs" */ './testsDemo/tabs/Tabs.vue'),
    },
    {
      path: '/slider',
      name: 'Slider',
      component: () => import(/* webpackChunkName: "Tabs" */ './testsDemo/slider/Slider.vue'),
    },
    {
      path: '/switch',
      name: 'Switch',
      component: () => import(/* webpackChunkName: "switch" */ './testsDemo/switch/Switch.vue'),
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: () =>
        import(/* webpackChunkName: "cascader" */ './testsDemo/cascader/cascader.vue'),
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: () =>
        import(/* webpackChunkName: "pagination" */ './testsDemo/pagination/pagination.vue'),
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import(/* webpackChunkName: "switch" */ './testsDemo/menu/menu.vue'),
    },
    {
      path: '/icon',
      name: 'Icon',
      component: () => import(/* webpackChunkName: "switch" */ './testsDemo/icon/icon.vue'),
    },
    {
      path: '/rate',
      name: 'rate',
      component: () => import(/* webpackChunkName: "button" */ './testsDemo/rate/rate.vue'),
    },
    {
      path: '/notification',
      name: 'Notification',
      component: () =>
        import(/* webpackChunkName: "notification" */ './testsDemo/notification/notification.vue'),
    },
    {
      path: '/select',
      name: 'Select',
      component: () =>
        import(/* webpackChunkName: "notification" */ './testsDemo/select/select.vue'),
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import(/* webpackChunkName: "layout" */ './testsDemo/layout/layout.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import(/* webpackChunkName: "upload" */ './testsDemo/upload/upload.vue'),
    },
    {
      path: '/alert',
      name: 'Alert',
      component: () => import(/* webpackChunkName: "layout" */ './testsDemo/alert/alert.vue'),
    },
    {
      path: '/colorPicker',
      name: 'ColorPicker',
      component: () =>
        import(/* webpackChunkName: "layout" */ './testsDemo/colorPicker/colorPicker.vue'),
    },
  ],
});
