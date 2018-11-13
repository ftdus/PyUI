<style>
  .demo-box {
    display: flex;
  }
  .demo-cascader {
    margin-right: 100px;
  }
</style>
<script>
const demoOptions = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          {
            value: 'yizhi',
            label: '一致',
          },
          {
            value: 'fankui',
            label: '反馈',
          },
          {
            value: 'xiaolv',
            label: '效率',
          },
          {
            value: 'kekong',
            label: '可控',
          },
        ],
      },
      {
        value: 'daohang',
        label: '导航',
        children: [
          {
            value: 'cexiangdaohang',
            label: '侧向导航',
          },
          {
            value: 'dingbudaohang',
            label: '顶部导航',
          },
        ],
      },
    ],
  },
  {
    value: 'zujian',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout 布局',
          },
          {
            value: 'color',
            label: 'Color 色彩',
          },
          {
            value: 'typography',
            label: 'Typography 字体',
          },
          {
            value: 'icon',
            label: 'Icon 图标',
          },
          {
            value: 'button',
            label: 'Button 按钮',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio 单选框',
          },
          {
            value: 'checkbox',
            label: 'Checkbox 多选框',
          },
          {
            value: 'input',
            label: 'Input 输入框',
          },
          {
            value: 'input-number',
            label: 'InputNumber 计数器',
          },
          {
            value: 'select',
            label: 'Select 选择器',
          },
          {
            value: 'cascader',
            label: 'Cascader 级联选择器',
          },
          {
            value: 'switch',
            label: 'Switch 开关',
          },
          {
            value: 'slider',
            label: 'Slider 滑块',
          },
          {
            value: 'time-picker',
            label: 'TimePicker 时间选择器',
          },
          {
            value: 'date-picker',
            label: 'DatePicker 日期选择器',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器',
          },
          {
            value: 'upload',
            label: 'Upload 上传',
          },
          {
            value: 'rate',
            label: 'Rate 评分',
          },
          {
            value: 'form',
            label: 'Form 表单',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table 表格',
          },
          {
            value: 'tag',
            label: 'Tag 标签',
          },
          {
            value: 'progress',
            label: 'Progress 进度条',
          },
          {
            value: 'tree',
            label: 'Tree 树形控件',
          },
          {
            value: 'pagination',
            label: 'Pagination 分页',
          },
          {
            value: 'badge',
            label: 'Badge 标记',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert 警告',
          },
          {
            value: 'loading',
            label: 'Loading 加载',
          },
          {
            value: 'message',
            label: 'Message 消息提示',
          },
          {
            value: 'message-box',
            label: 'MessageBox 弹框',
          },
          {
            value: 'notification',
            label: 'Notification 通知',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'NavMenu 导航菜单',
          },
          {
            value: 'tabs',
            label: 'Tabs 标签页',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑',
          },
          {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单',
          },
          {
            value: 'steps',
            label: 'Steps 步骤条',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog 对话框',
          },
          {
            value: 'tooltip',
            label: 'Tooltip 文字提示',
          },
          {
            value: 'popover',
            label: 'Popover 弹出框',
          },
          {
            value: 'card',
            label: 'Card 卡片',
          },
          {
            value: 'carousel',
            label: 'Carousel 走马灯',
          },
          {
            value: 'collapse',
            label: 'Collapse 折叠面板',
          },
        ],
      },
    ],
  },
  {
    value: 'ziyuan',
    label: '资源',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'jiaohu',
        label: '组件交互文档',
      },
    ],
  },
];
const demoOptions2 = JSON.parse(JSON.stringify(demoOptions));
demoOptions2[0].disabled = true;
const demoOptions3 = [
  {
    myValue: '江苏',
    myLabel: '江苏',
    cities: [],
  },
  {
    myValue: '广东',
    myLabel: '广东',
    cities: [
      {
        myValue: '深圳',
        myLabel: '深圳',
        cities: [],
      },
      {
        myValue: '广州',
        myLabel: '广州',
        cities: [],
        myDisabled: true,
      },
    ],
  },
];
const demoOptions3Props = {
  value: 'myValue',
  label: 'myLabel',
  children: 'cities',
  disabled: 'myDisabled',
};
export default {
  data() {
    return {
      demoOptions1: demoOptions,
      demoOptions2: demoOptions2,
      defaultValues: ['zhinan', 'shejiyuanze', 'yizhi'],
      demoOptions3: demoOptions3,
      demoOptions3Props: demoOptions3Props,
    };
  },
  methods: {
    logBlur(event) {
      console.log('blur');
      console.log(event);
    },
    logFocus(event) {
      console.log('logFocus');
      console.log(event);
    },
    logChange(values) {
      console.log('change');
      console.log(values);
    },
    logActiveItemChange(values) {
      console.log('active-item-change');
      console.log(values);
    },
    loadOptions(values) {
      if (values.indexOf('江苏') !== -1) {
        setTimeout(() => {
          this.demoOptions3[0].cities = [
            {
              myValue: '苏州',
              myLabel: '苏州',
            },
            {
              myValue: '温州',
              myLabel: '温州',
            },
          ];
        }, 1000);
      } else if (values.indexOf('深圳') !== -1) {
        setTimeout(() => {
          this.demoOptions3[1].cities[0].cities = [
            {
              myValue: '宝安',
              myLabel: '宝安',
            },
            {
              myValue: '福田',
              myLabel: '福田',
            },
          ];
        }, 1000);
      }
    },
  },
}
</script>
## Cascader 级联选择器
当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

### 基础用法
有两种触发子菜单的方式

:::demo 使用 `options` 设置选择器数据。 `trigger-type` 设置触发子菜单的方式。 `clearable` 设置选择器的数据可以清除。 `change` 事件在每次改变选择值时触发，参数是一个由各级菜单的值所组成的数组。`blur` 事件在选择器失去焦点时触发，参数是一个 `blur` 事件对象。 `focus` 事件在选择器获取焦点时触发，参数是一个 `focus` 事件对象。 `active-item-change` 事件在非最后一级菜单项被激活时触发，参数是一个由被激活的各级菜单的值所组成的数组

```html
<div class="demo-box">
  <py-cascader class="demo-cascader" placeholder="click触发"
    :options="demoOptions1" @change="logChange" @blur="logBlur"
    @focus="logFocus" @active-item-change="logActiveItemChange"
    clearable>
  </py-cascader>
  <py-cascader class="demo-cascader" placeholder="hover触发"
    :options="demoOptions1" trigger-type="hover">
  </py-cascader>
</div>
<script>
  export default {
    data() {
      return {
        demoOptions1: [
          {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致',
                  },
                  {
                    value: 'fankui',
                    label: '反馈',
                  },
                  {
                    value: 'xiaolv',
                    label: '效率',
                  },
                  {
                    value: 'kekong',
                    label: '可控',
                  },
                ],
              },
              {
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航',
                  },
                  {
                    value: 'dingbudaohang',
                    label: '顶部导航',
                  },
                ],
              },
            ],
          },
          {
            value: 'zujian',
            label: '组件',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout 布局',
                  },
                  {
                    value: 'color',
                    label: 'Color 色彩',
                  },
                  {
                    value: 'typography',
                    label: 'Typography 字体',
                  },
                  {
                    value: 'icon',
                    label: 'Icon 图标',
                  },
                  {
                    value: 'button',
                    label: 'Button 按钮',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio 单选框',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox 多选框',
                  },
                  {
                    value: 'input',
                    label: 'Input 输入框',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber 计数器',
                  },
                  {
                    value: 'select',
                    label: 'Select 选择器',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader 级联选择器',
                  },
                  {
                    value: 'switch',
                    label: 'Switch 开关',
                  },
                  {
                    value: 'slider',
                    label: 'Slider 滑块',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器',
                  },
                  {
                    value: 'upload',
                    label: 'Upload 上传',
                  },
                  {
                    value: 'rate',
                    label: 'Rate 评分',
                  },
                  {
                    value: 'form',
                    label: 'Form 表单',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table 表格',
                  },
                  {
                    value: 'tag',
                    label: 'Tag 标签',
                  },
                  {
                    value: 'progress',
                    label: 'Progress 进度条',
                  },
                  {
                    value: 'tree',
                    label: 'Tree 树形控件',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination 分页',
                  },
                  {
                    value: 'badge',
                    label: 'Badge 标记',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert 警告',
                  },
                  {
                    value: 'loading',
                    label: 'Loading 加载',
                  },
                  {
                    value: 'message',
                    label: 'Message 消息提示',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox 弹框',
                  },
                  {
                    value: 'notification',
                    label: 'Notification 通知',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu 导航菜单',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs 标签页',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单',
                  },
                  {
                    value: 'steps',
                    label: 'Steps 步骤条',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog 对话框',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示',
                  },
                  {
                    value: 'popover',
                    label: 'Popover 弹出框',
                  },
                  {
                    value: 'card',
                    label: 'Card 卡片',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel 走马灯',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse 折叠面板',
                  },
                ],
              },
            ],
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'jiaohu',
                label: '组件交互文档',
              },
            ],
          },
        ],
      };
    },
    methods: {
      logBlur(event) {
        console.log('blur');
        console.log(event);
      },
      logFocus(event) {
        console.log('logFocus');
        console.log(event);
      },
      logChange(values) {
        console.log('change');
        console.log(values);
      },
      logActiveItemChange(values) {
        console.log('active-item-change');
        console.log(values);
      },
    }
  }
</script>
```

:::

### 禁用选项

通过在数据源中设置 disabled 字段来声明该选项是禁用的

:::demo 你可以在 `option` 中设置 `disabled` 属性为 `true` 来定义一个选项是禁止使用的

```html
<div class="demo-box">
  <py-cascader class="demo-cascader" :options="demoOptions2">
  </py-cascader>
</div>
<script>
export default {
  data() {
    return {
      demoOptions2: [
        {
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    };
  },
};
</script>
```

:::

### 仅显示最后一级
可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

:::demo 通过设置 `show-all-levels` 属性为 `false`，可以使输入框仅显示选中项最后一级的标签

```html
<div class="demo-box">
  <py-cascader :options="demoOptions2" :show-all-levels="false">
  </py-cascader>
</div>
<script>
export default {
  data() {
    return {
      demoOptions2: [
        {
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    };
  },
};
</script>
```

:::

### 默认值

:::demo 使用 `v-model` 为级联选择器设置默认值。默认值是一系列选中菜单的 `value` 组成的数组

```html
<div class="demo-box">
  <py-cascader class="demo-cascader" :options="demoOptions1" v-model="defaultValues">
  </py-cascader>
</div>
<script>
export default {
  data() {
    return {
      defaultValues: ['zhinan', 'shejiyuanze', 'yizhi'],
      demoOptions1: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    };
  },
};
</script>
```

:::

### 动态加载次级选项

当选中某一级时，动态加载该级下的选项。

:::demo中利用 `active-item-change` 事件，可以在用户点击某个省份时拉取该省份下的城市数据。本例还展示了 `props` 属性的用法。

```html
<div class="demo-box">
  <py-cascader class="demo-cascader" :options="demoOptions3"
    @active-item-change="loadOptions" :props="demoOptions3Props">
  </py-cascader>
</div>
<script>
export default {
  data() {
    return {
      demoOptions3Props: {
        value: 'myValue',
        label: 'myLabel',
        children: 'cities',
        disabled: 'myDisabled',
      },
      demoOptions3: [
        {
          myValue: '江苏',
          myLabel: '江苏',
          cities: [],
        },
        {
          myValue: '广东',
          myLabel: '广东',
          cities: [
            {
              myValue: '深圳',
              myLabel: '深圳',
              cities: [],
            },
            {
              myValue: '广州',
              myLabel: '广州',
              cities: [],
              myDisabled: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    loadOptions(values) {
      if (values.indexOf('江苏') !== -1) {
        setTimeout(() => {
          this.demoOptions3[0].cities = [
            {
              myValue: '苏州',
              myLabel: '苏州',
            },
            {
              myValue: '温州',
              myLabel: '温州',
            },
          ];
        }, 1000);
      } else if (values.indexOf('深圳') !== -1) {
        setTimeout(() => {
          this.demoOptions3[1].cities[0].cities = [
            {
              myValue: '宝安',
              myLabel: '宝安',
            },
            {
              myValue: '福田',
              myLabel: '福田',
            },
          ];
        }, 1000);
      }
    }
  },
};
</script>
```

:::

### 可搜索
通过输入关键字在 options 中搜索所有匹配的数据

:::demo 通过设置 `filterable` 让选择器变得可以输入筛选。通过设置 `debounce` 属性可以设置搜索关键词输入的去抖延迟（单位：毫秒）

```html
<div class="demo-box">
  <py-cascader class="demo-cascader" placeholder="试试搜索：组件" filterable 
    :debounce="1000" :options="demoOptions1">
  </py-cascader>
</div>
<script>
 export default {
  data() {
    return {
      demoOptions1: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    };
  },
 } 
</script>
```

:::

### 选择即改变
点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。

:::demo 通过设置 `change-on-select` 为 `true`

```html
<div class="demo-box">
  <py-cascader class="demo-cascader" :options="demoOptions1" change-on-select
    @change="logChange" @active-item-change="logActiveItemChange">
  </py-cascader>
</div>
<script>
 export default {
  data() {
    return {
      demoOptions1: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    };
  },
 } 
</script>
```

:::

### Attributes

| 参数        | 说明                                       | 类型           | 可选值 | 默认值 |
| ---------- | ------------------------------------------ | --------------| ------ | ------ |
| options    | 可选项数据源，键名可通过 `props` 属性配置       | array         | —      | —      |
| props      | 配置选项，具体见下表                         | object        | —      | —      |
| value      | 选中项绑定值                                 | array        | —      | —  |
| separator  | 选项分隔符                                  | string        | —      | 斜杠'/'  |
| menu-class | 菜单 class                                   | string        | —      | —  |
| placeholder| 输入提示                                    | string        | —      | 请选择  |
| disabled   | 是否禁用                                     | boolean      | —      |
| clearable  | 是否支持清空选项                             | boolean       | —      | false  |
| trigger-type| 次级菜单的展开方式                          | string        | click / hover| click |
|show-all-levels| 输入框中是否显示选中值的完整路径           | boolean       | —       | true |
| filterable |  是否可搜索                                  | boolean       | —       | false |
| debounce   | 搜索关键词输入的去抖延迟，毫秒                 | number        | —       | 300 |
|change-on-select| 是否允许选择任意一级的选项                | boolean       | —        | false |
| size       |  尺寸                                       | string        | medium/small/mini | — |
| before-filter | 筛选之前的钩子，参数为输入的值，若返回 `false` 或者返回 `Promise` 且被 `reject`，则停止筛选 | function(value) | — | — |

### props

| 参数        | 说明                                       | 类型           | 可选值 | 默认值 |
| ---------- | ------------------------------------------ | --------------| ------ | ------ |
| value       | 指定选项的值为选项对象的某个属性值           | string        | —      | —      |
| label      | 指定选项标签为选项对象的某个属性值            | string        | —      | —      |
| children   | 指定选项的子选项为选项对象的某个属性值         | string       | —      | —      |
| disabled   | 指定选项的禁用为选项对象的某个属性值           | string       | —      | —      |

### Events
| 事件名称        | 说明                                    | 回调参数      |
| ---------- | ------------------------------------------ | --------------|
| change     | 当绑定值变化时触发的事件                     | 当前值        |
| active-item-change| 当父级选项变化时触发的事件，仅在 `change-on-select` 为 `false` 时可用 | 各父级选项组成的数组  |
| blur       | 在 `Cascader` 失去焦点时触发                   | (event: Event)|
| focus      | 在 `Cascader` 获得焦点时触发                   | (event: Event)|