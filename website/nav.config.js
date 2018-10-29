const navData = [
  {
    name: '快速上手',
    path: 'quick-start',
  },
  {
    name: '更新日志',
    path: 'changelog',
  },
  {
    name: '组件',
    children: [
      {
        group: 'Basic',
        children: [
          {
            name: 'Layout 布局',
            path: 'layout',
          },
          {
            name: 'Button 按钮',
            path: 'button',
          },
        ],
      },
      {
        group: 'Form',
        children: [
          {
            name: 'Input 输入框',
            path: 'input',
          },
        ],
      },
    ],
  },
];

const nav = navData.reduce((init, item) => {
  if (item.children) {
    init.push({
      name: item.name,
      type: 'first-level',
    });

    item.children.forEach(({ group, children }) => {
      init.push({ name: group, type: 'group' });
      init.push(...children);
    });
  } else {
    init.push({
      ...item,
      type: 'first-level',
    });
  }

  return init;
}, []);

export default nav;
