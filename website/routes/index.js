import nav from '../nav.config';
import component from '../pages/component.vue';

const addRoutes = path => ({
  path,
  component: r => require.ensure([], () => r(require(`../docs/${path}.md`)), 'zh-CN'), // eslint-disable-line
});

const componentRoutes = nav
  .filter(item => item.path || item.children)
  .reduce((initRoutes, item) => {
    if (item.path) {
      initRoutes.push(addRoutes(item.path));
    }

    if (item.children) {
      item.children.map(child => initRoutes.push(addRoutes(child.path)));
    }

    return initRoutes;
  }, []);

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
  {
    path: '*',
    redirect: '/component',
  },
];

export default routes;
