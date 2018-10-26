const shell = require('shelljs');
const inquirer = require('inquirer');
const prompsConfig = require('./config/promps');

async function gitCommit() {
  let { type } = await inquirer.prompt(prompsConfig.ciType);
  let { msg } = await inquirer.prompt(prompsConfig.ciMsg);

//   console.log(`git commit -m "${type} ${msg}"`);
  shell.exec(`git commit -m "${type} ${msg}"`);
}

gitCommit();
