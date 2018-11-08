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
          {
            name: 'Grid 栅格',
            path: 'grid',
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
          {
            name: 'Cascader 级联选择器',
            path: 'cascader',
          },
          {
            name: 'ColorPicker 颜色选择器',
            path: 'colorPicker',
          },
          {
            name: 'Upload 文件上传',
            path: 'upload',
          },
        ],
      },
      {
        group: 'Data',
        children: [
          {
            name: 'Badge 标记',
            path: 'badge',
          },
          {
            name: 'loadingBar 加载进度条',
            path: 'loading-bar',
          },
        ],
      },
      {
        group: 'Notice',
        children: [
          {
            name: 'Alert 弹框',
            path: 'alert',
          },
          {
            name: 'Notification 通知',
            path: 'notification',
          },
          {
            name: 'Message 通知',
            path: 'message',
          },
        ],
      },
      {
        group: 'Navigation',
        children: [
          {
            name: 'Tabs 标签页',
            path: 'tabs',
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
      init.push({ name: group, type: 'group', children });
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
