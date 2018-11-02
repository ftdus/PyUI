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
