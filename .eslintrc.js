module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不强制使用一致的换行风格
    'linebreak-style': 'off',
    // 必须使用分号结尾
    semi: ['error', 'always'],
    // 函数的括号前面可以不加空格
    'space-before-function-paren': 'off',
    // 不强制单双引号
    quotes: 'off',
    // 参数只有一个的时候不适用花括号
    'arrow-parens': ['error', 'as-needed'],
    // 要求函数必须要有名字
    'func-names': ['error', 'as-needed'],
    // 块元素开始和结束位置不需要空行
    'padded-blocks': 'off',
    // 允许匿名函数
    'func-names': 'off',
    // 禁止给参数重新赋值
    'no-param-reassign': 'off',
    // 禁止混合的运算符
    'no-mixed-operators': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {},
};
