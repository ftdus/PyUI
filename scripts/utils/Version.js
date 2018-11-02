/**
 * 全局版本管理,因为新增了build版本号,所以无法直接使用npm的版本迭代命令
 */
require('shelljs/global');
const fs = require('fs-extra');
const path = require('path');

class Version {
  constructor() {
    this.versionFile = path.resolve(__dirname, '../../package.json');
  }
  /**
   * @description 获取上一次的版本号
   * @author GodD6366
   * @returns {String} 版本号
   * @memberof Version
   */
  detail() {
    let json = fs.readJSONSync(this.versionFile);

    let version = json.version;
    let build = json.buildVersion;

    let [major, minor, revision] = version.split('.');
    this._version = {
      major,
      minor,
      revision,
      build,
    };

    return this._version;
  }

  /**
   * 保存版本号
   */
  save() {
    let jsonContent = fs.readJSONSync(this.versionFile);
    let v = this._version;

    jsonContent.version = `${v.major}.${v.minor}.${v.revision}`;
    jsonContent.buildVersion = `${v.build}`;

    fs.writeJsonSync(this.versionFile, jsonContent);
    // 格式化app.json 文件
    exec(`prettier --write ${this.versionFile}`, {
      silent: true,
    });
  }

  /**
   * 版本号展示
   */
  get() {
    let v = this._version;
    if (!v) {
      v = this.detail();
    }
    return `${v.major}.${v.minor}.${v.revision}`;
  }

  /**
   * 版本号展示
   */
  show() {
    let v = this._version;
    if (!v) {
      v = this.detail();
    }
    return `${this.get()}(${v.build})`;
  }

  update(type) {
    this.detail();
    this._version[type]++;

    // 只要编译, build次数就加一次
    if (type !== 'build') {
      this._version.build++;
    }

    switch (type) {
      // 大版本更新,小版本号重置,bug修复版本也重置
      case 'major':
        this._version.minor = 0;
        this._version.revision = 0;
        break;
      case 'minor':
        this._version.revision = 0;
        break;
    }
  }
}

module.exports = new Version();
