require('shelljs/global');
const ora = require('ora');
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
// 导入选项配置
const { readText, nameFormat } = require('./utils/tools');
const promps = require('./config/promps');

/**
 * 快麦ERP-小程序: 快捷模板构建
 */

async function doTemplate() {
  // 模板类型,模板名称
  let { name } = await inquirer.prompt(promps.comptName);
  createTemplate(name);
}

/**
 * 新建模板
 * @param {String} name 模板名称
 * @param {String} type 模板类型 pages or components
 */
function createTemplate(name) {
  const spinner = ora('开始创建组件模板').start();

  const router = path.resolve(__dirname, `../src/components/${name}`);
  const sourceIndex = path.resolve(
    __dirname,
    `./templates/components/index.js`
  );
  const sourceVue = path.resolve(
    __dirname,
    `./templates/components/src/name.vue`
  );
  const distIndex = path.resolve(
    __dirname,
    `../src/components/${name}/index.js`
  );
  const distVue = path.resolve(
    __dirname,
    `../src/components/${name}/src/${name}.vue`
  );

  if (fs.existsSync(router)) {
    spinner.fail(`组件 ${name} 已经存在,无法创建`);
  } else {
    let idxContent = readText(sourceIndex);
    idxContent = idxContent.replace('{{__component_name__}}', name);
    idxContent = idxContent.replace(
      /\{\{__py_component_name__\}\}/g,
      `Py` + nameFormat(name)
    );

    // 输出index.js
    fs.createFileSync(distIndex);
    fs.writeFileSync(distIndex, idxContent);

    // 输出默认的vue文件
    fs.createFileSync(distVue);
    fs.writeFileSync(
      distVue,
      readText(sourceVue).replace(
        /\{\{__py_component_name__\}\}/g,
        `Py` + nameFormat(name)
      )
    );
    spinner.succeed(`组件 ${name} 的目录结构已完成初始化`);
  }
}

doTemplate();
