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
          {
            name: 'Collapse 折叠面板',
            path: 'collapse',
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
            name: 'Select 选择器',
            path: 'select',
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
          {
            name: 'Radio 单选框',
            path: 'radio',
          },
          {
            name: 'Form 表单',
            path: 'form',
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
            name: 'Progress 进度条',
            path: 'progress',
          },
          {
            name: 'Avatar 头像',
            path: 'avatar',
          },
          {
            name: 'loadingBar 加载进度条',
            path: 'loading-bar',
          },
          {
            name: 'Pagination 分页',
            path: 'pagination',
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
          {
            name: 'carousel 跑马灯',
            path: 'carousel',
          },
        ],
      },
      {
        group: 'Other',
        children: [
          {
            name: 'Card 卡片',
            path: 'card',
          },
          {
            name: 'Spin 加载中',
            path: 'spin',
          },
          {
            name: 'Scroll 无限滚动',
            path: 'scroll',
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
