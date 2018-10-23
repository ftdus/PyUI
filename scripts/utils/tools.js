const fs = require('fs-extra');

/**
 * 已utf8读取文件数据,兼容有/无BOM
 * @param {String} pathname 文件路径
 */
const readText = pathname => {
  var bin = fs.readFileSync(pathname);

  if (bin[0] === 0xef && bin[1] === 0xbb && bin[2] === 0xbf) {
    bin = bin.slice(3);
  }

  return bin.toString('utf-8');
};

function nameFormat(name) {
  name = name.substring(0, 1).toUpperCase() + name.substring(1);
  let idx = 0;
  do {
    idx = name.indexOf('-');
    let nextChar = name.substr(idx + 1, 1);
    name = name.replace('-' + nextChar, nextChar.toUpperCase());
  } while (idx > 0);
  return name;
}

module.exports = {
  readText,
  nameFormat,
};
