module.exports = {
  ciType: [
    {
      type: 'list',
      name: 'type',
      message: '请选择本次提交的类型:',
      choices: [
        {
          name: '✨  引入新功能',
          value: ':new:',
        },
        {
          name: '🐛  修复 bug',
          value: ':bug:',
        },
        {
          name: '💫  改进代码结构/代码格式',
          value: ':dizzy:',
        },
        {
          name: '🎨  更新 UI 和样式文件',
          value: ':art:',
        },
        {
          name: '✅  增加测试',
          value: ':white_check_mark:',
        },
        {
          name: '🐎  提升性能',
          value: ':racehorse:',
        },
        {
          name: '🚧  工作进行中',
          value: ':construction:',
        },
        {
          name: '📝  撰写文档',
          value: ':memo:',
        },
        {
          name: '🚀  部署功能',
          value: ':rocket:',
        },
        {
          name: '💚  修复 CI 构建问题',
          value: ':green_heart:',
        },
        {
          name: '🔩  其他改动',
          value: ':nut_and_bolt:',
        },
        {
          name: '🌐  国际化与本地化',
          value: ':globe_with_meridians:',
        },
        {
          name: '🎉  初次提交',
          value: ':nut_and_bolt:',
        },
      ],
    },
  ],
  ciMsg: {
    type: 'input',
    name: 'msg',
    message: '请输入提交文本:',
    validate: function(value) {
      if (value) {
        return true;
      }
      return '文本必须输入!';
    },
  },
  comptName: {
    type: 'input',
    name: 'name',
    message: '请输入组件名称:',
    validate: function(value) {
      if (/^[\-a-z]+$/.test(value)) {
        return true;
      }
      return '组件名称只能包含小写字母和横杠(-)!';
    },
  },
  compConfig: [
    {
      type: 'confirm',
      name: 'needConfig',
      message: '是否需要组件配置文件',
      default: false,
    },
  ],
};
