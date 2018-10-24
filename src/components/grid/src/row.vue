<style lang="scss" scoped>
$prefixCls: "py-row";
.#{$prefixCls} {
  position: relative;
  &:after {
    content: " ";
    display: block;
    clear: both;
  }
  &-flex {
    display: flex;
    &-start {
      justify-content: start;
    }
    &-end {
      justify-content: flex-end;
    }
    &-center {
      justify-content: center;
    }
    &-space-between {
      justify-content: space-between;
    }
    &-space-around {
      justify-content: space-around;
    }
    &-top {
      align-items: flex-start;
    }
    &-bottom {
      align-items: flex-end;
    }
    &-middle {
      align-items: center;
    }
  }
}
</style>

<template>
    <div :class="classList" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = "py-row";
//  import { oneOf, findComponentDownward, findBrothersComponents } from '../../utils/assist';
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
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
    for (const child of childrens) {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}
// Find brothers components
function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if (exceptMe) res.splice(index, 1);
  return res;
}

export default {
  name: "pyRow",
  props: {
    crevice: {
      type: [Number, String],
      default: 0,
    },
    type: {
      validator(val) {
        return oneOf(val, ['flex']);
      }
    },
    justify: String,
    align: String
  },
  computed: {
    classList() {
      return [
        `${prefixCls}`,
        {
          // [`${prefixCls}-${this.crevice}`]: this.crevice
          [`${prefixCls}-${this.type}`]: this.type,
          [`${prefixCls}-flex-${this.justify}`]: this.justify,
          [`${prefixCls}-flex-${this.align}`]: this.align,
        }
      ];
    },
    styles() {
      let style = {};
      if (this.crevice !== 0) {
        style = {
          marginLeft: (this.crevice / -2) + "px",
          marginRight: (this.crevice / -2) + "px"
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
      const Col = findComponentDownward(this, "pyCol");
      const Cols = findBrothersComponents(Col, "pyCol", false);
      if (Cols.length) {
        Cols.forEach(child => {
          if (val !== 0) {
            child.crevice = val;
          }
        });
      }
    },
  },
};
</script>
