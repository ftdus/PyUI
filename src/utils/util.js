import Vue from 'vue';

export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i += 1) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

export function typeOf(obj) {
  const { toString } = Object.prototype;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  return map[toString.call(obj)];
}

export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i += 1) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    const { entries } = Object;
    entries(data).forEach(([key, value]) => {
      o[key] = deepCopy(value);
    });
  }
  return o;
}

// Find components upward
function findComponentUpward(context, componentName, componentNames) {
  let copyComponentNames = deepCopy(componentNames);
  if (typeof componentName === 'string') {
    copyComponentNames = [componentName];
  } else {
    copyComponentNames = componentName;
  }

  let { $parent: parent } = context;
  let { name } = parent.$options;
  while (parent && (!name || copyComponentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) ({ name } = parent.$options);
  }
  return parent;
}
export { findComponentUpward };

// Find components downward
export function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

// Find components upward
export function findComponentsUpward(context, componentName) {
  const parents = [];
  const parent = context.$parent;
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  }
  return [];
}
const isServer = Vue.prototype.$isServer;

// istanbul ignore next
export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return function(element, event, handler) {
    if (element && event && handler) {
      element.attachEvent(`on${event}`, handler);
    }
  };
}());

// istanbul ignore next
export const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return function(element, event, handler) {
    if (element && event) {
      element.detachEvent(`on${event}`, handler);
    }
  };

}());


const SPECIAL_CHARS_REGEXP = /([\\:\-\\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, (_, _separator, letter, offset) => (offset ? letter.toUpperCase() : letter)).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
export function getStyle (element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}
