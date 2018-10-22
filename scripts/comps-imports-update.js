const shell = require('shelljs');
const path = require('path');
const fs = require('fs-extra');
const ora = require('ora');

const { readText, nameFormat } = require('./utils/tools');
const Version = require('./utils/Version');

const updateOra = ora('[PYUI] 组件依赖更新中...').start();

const src = path.resolve(__dirname, '../src/components');
const indexPath = path.resolve(__dirname, '../src/index.js');

let template = readText(
  path.resolve(__dirname, './templates/srcIndex/index.js')
);

/**
 * 配置全局组件
 */
const globals = {
  loadingBar: {
    key: '$loading',
    value: 'LoadingBar',
  },
};

let comps = [];

const loadAllComp = src => {
  const files = fs.readdirSync(src);
  files.map(file => {
    let filePath = `${src}/${file}`;
    let stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      comps.push({
        path: file,
        name: nameFormat(file),
      });
    }
  });
};

loadAllComp(src);

// 组件导入函数
template = template.replace(
  /\{\{__components_imports__\}\}/g,
  comps
    .map(f => `import ${f.name} from './components/${f.path}/index'`)
    .join(';\n')
);

// 组件导出
template = template.replace(
  /\{\{__components_export__\}\}/g,
  comps.map(f => f.name).join(',')
);

// 组件install数组
template = template.replace(
  /\{\{__components__\}\}/g,
  comps
    .filter(f => globals[f.path] === void 0)
    .map(f => f.name)
    .join(',')
);

// 全局组件
template = template.replace(/\{\{__components_globals__\}\}/g, () => {
  let globalsCode = [];
  for (const compPath in globals) {
    if (globals.hasOwnProperty(compPath)) {
      const { key, value } = globals[compPath];
      globalsCode.push(`vue.prototype.${key} = ${value};`);
    }
  }
  return globalsCode.join('\n');
});

// 更新版本号
template = template.replace(/\{\{__version__\}\}/g, Version.get());

fs.writeFileSync(indexPath, template);

shell.exec(`prettier --write ${indexPath}`, {
  silent: true,
});

updateOra.succeed('[PYUI] 组件依赖更新完成!');
