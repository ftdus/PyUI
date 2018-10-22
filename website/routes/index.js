// 1. 定义 (路由) 组件。
import component from '../pages/component.vue';

// 2. 定义路由
// TODO 动态加载doc
const routes = [
  {
    path: '/component',
    component,
    children: [
      {
        path: 'button',
        component: r =>
          require.ensure([], () => r(require(`../docs/button.md`)), 'zh-CN'),
      },
    ],
  },
];
export default routes;
