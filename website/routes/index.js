// 1. 定义 (路由) 组件。
import nav from '../nav.config';
import component from '../pages/component.vue';

// 2. 定义路由
// TODO 动态加载doc
const componentRoutes = nav.filter(item => item.path).map(({ path }) => ({
  path,
  component: r =>
    require.ensure([], () => r(require(`../docs/${path}.md`)), 'zh-CN'),
}));

const routes = [
  {
    path: '/',
    redirect: '/component',
  },
  {
    path: '/component',
    component,
    redirect: '/component/quick-start',
    children: componentRoutes,
  },
];
export default routes;
