<template>
  <div :class="classList" :style="styles"><slot></slot></div>
</template>
<script>
const prefixCls = 'py-row';
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i += 1) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
// Find component downward
function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if (childrens.length) {
    childrens.map(child => {
      const { name } = child.$options;
      if (name === componentName) {
        children = child;
        // return child;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) return child;
      }
      return child;
    });
  }
  return children;
}
// Find brothers components
function findBrothersComponents(context, componentName, exceptMe = true) {
  const res = context.$parent.$children.filter(item => item.$options.name === componentName);
  // const index = res.findIndex(item => item._uid === context._uid);
  const index = res.findIndex(item => {
    const { _uid: uid2 } = item;
    const { _uid: uid3 } = context;
    if (uid2 === uid3) {
      return item;
    }
    return false;
  });
  if (exceptMe) res.splice(index, 1);
  return res;
}

export default {
  name: 'py-row',
  props: {
    crevice: {
      type: [Number, String],
      default: 0,
    },
    type: {
      validator(val) {
        return oneOf(val, ['flex']);
      },
    },
    justify: String,
    align: String,
  },
  computed: {
    classList() {
      return [
        `${prefixCls}`,
        {
          // [`${prefixCls}-${this.crevice}`]: this.crevice
          [`${prefixCls}__${this.type}`]: this.type,
          [`${prefixCls}__flex--${this.justify}`]: this.justify,
          [`${prefixCls}__flex--${this.align}`]: this.align,
        },
      ];
    },
    styles() {
      let style = {};
      if (this.crevice !== 0) {
        style = {
          marginLeft: `${this.crevice / 2}px`,
          marginRight: `${this.crevice / 2}px`,
        };
      }
      return style;
    },
  },
  watch: {
    crevice(val) {
      this.uploadCrevice(val);
    },
  },
  methods: {
    uploadCrevice(val) {
      //   这里会嵌套寻找，把 Col 里的 Row 里的 Col 也找到，所以用 兄弟找
      //   const Cols = findComponentsDownward(this, "iCol");
      const Col = findComponentDownward(this, 'py-col');
      const Cols = findBrothersComponents(Col, 'py-col', false);
      if (Cols.length) {
        Cols.forEach(child => {
          if (val !== 0) {
            const c = child;
            // child.crevice = val;
            c.crevice = val;
          }
        });
      }
    },
  },
};
</script>
