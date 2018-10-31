const shell = require('shelljs');
const path = require('path');
const fs = require('fs-extra');
const ora = require('ora');

const { readText, nameFormat } = require('./utils/tools');
const Version = require('./utils/Version');

const components = path.resolve(__dirname, '../src/components');
const indexPath = path.resolve(__dirname, '../src/index.js');
let template = readText(path.resolve(__dirname, './templates/srcIndex/index.js'));

const updateOra = ora('[PYUI] 组件依赖更新中...').start();

let comps = [];

// 读取所有组件信息
const files = fs.readdirSync(components);
files.map(file => {
  let compDir = path.resolve(components, file);
  let stat = fs.statSync(compDir);
  if (stat.isDirectory()) {
    let compConfig = {};
    const jsonPath = path.resolve(compDir, `index.json`);
    if (fs.existsSync(jsonPath)) {
      compConfig = fs.readJsonSync(jsonPath);
    }

    if (!compConfig.dev) {
      comps.push(
        Object.assign(
          {
            path: file,
            name: nameFormat(file),
          },
          compConfig
        )
      );
    }
  }
});

// 组件导入函数
template = template.replace(
  /\{\{__components_imports__\}\}/g,
  comps.map(comp => `import ${comp.name} from './components/${comp.path}/index'`).join(';\n')
);

// 组件导出
template = template.replace(/\{\{__components_export__\}\}/g, comps.map(f => f.name).join(','));

// 组件install数组
template = template.replace(
  /\{\{__components__\}\}/g,
  comps
    .filter(comp => comp.prototype !== true)
    .map(comp => comp.name)
    .join(',')
);

// 全局组件
template = template.replace(/\{\{__components_globals__\}\}/g, () => {
  let globalsCode = [];
  comps.filter(comp => comp.prototype && comp.map.length).map(comp => {
    comp.map.map(({ key, value }) => {
      key = key.replace('${moduleName}', comp.name);
      value = value.replace('${moduleName}', comp.name);
      globalsCode.push(`vue.prototype.${key} = ${value};`);
    });
  });
  return globalsCode.join('\n');
});

// 更新版本号
template = template.replace(/\{\{__version__\}\}/g, Version.get());

fs.writeFileSync(indexPath, template);

shell.exec(`prettier --write ${indexPath}`, {
  silent: true,
});

updateOra.succeed('[PYUI] 组件依赖更新完成!');
