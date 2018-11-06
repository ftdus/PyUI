// https://github.com/ElemeFE/element/blob/dev/packages/upload/src/ajax.js
function getError(action, option, xhr) {
  const msg = `fail to post ${action} ${xhr.status}'`;
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
export default function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }
  const xhr = new XMLHttpRequest();
  const url = option.action;
  if (xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      option.onProgress(e);
    };
  }
  const formData = new FormData();
  if (option.data) {
    Object.keys(option.data).map(key => formData.append(key, option.data[key]));
  }
  formData.append(option.filename, option.file);
  xhr.onerror = function error(e) {
    option.onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(url, option, xhr), getBody(xhr));
    }
    return option.onSuccess(getBody(xhr));
  };
  xhr.open('post', url, true);
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  // if (headers['X-Requested-With'] !== null) {
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // }
  const item = Object.keys(headers);
  if (headers[item] !== null && headers.length) {
    xhr.setRequestHeader(item, headers[item]);
  }
  xhr.send(formData);
}
