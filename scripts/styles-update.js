const shell = require('shelljs');
const path = require('path');
const fs = require('fs-extra');
const ora = require('ora');

const styles = path.resolve(__dirname, '../src/styles/src');
const indexPath = path.resolve(__dirname, '../src/styles/src/index.scss');

function stylesFileUpdate() {
  const updateOra = ora('[PYUI] 样式依赖更新中...').start();

  let comps = [];

  // 读取所有组件信息
  const files = fs.readdirSync(styles);
  files.map(file => {
    if (file.includes('base.scss')) {
      comps.unshift(file);
    } else if (file !== 'index.scss' && ~file.indexOf('.scss')) {
      comps.push(file);
    }
  });

  let content = comps
    .map(name => {
      return `@import '${name}';`;
    })
    .join('\n');

  fs.writeFileSync(indexPath, content);

  shell.exec(`prettier --write ${indexPath}`, {
    silent: true,
  });

  updateOra.succeed('[PYUI] 样式依赖更新完成!');
}

stylesFileUpdate();

module.exports = stylesFileUpdate;
