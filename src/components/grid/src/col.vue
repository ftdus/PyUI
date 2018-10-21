<template>
    <div :class="classList" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = "py-col";
// Find components upward
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === "string") {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

export default {
  name: "col",
  props: {
    span: [Number, String]
  },
  data() {
    return {
      crevice: 0
    };
  },
  computed: {
    classList() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-span-${this.span}`]: this.span
        }
      ];
    },
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px"
        };
      }
      return style;
    },
  },
  methods: {
    updateGutter() {
      const Row = findComponentUpward(this, "Row");
      if (Row) {
        Row.updateGutter(Row.gutter);
      }
    }
  },
  mounted() {
    this.updateGutter();
  },
  beforeDestroy() {
    this.updateGutter();
  }
};
</script>

<style lang="scss" scoped>
$prefixCls: "py-col";
.#{$prefixCls} {
  background-color: rgba(0, 153, 229, 0.9);
  float: left;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  &:nth-child(odd) {
    background-color: rgba(0, 153, 229, 0.7);
  }
  &-span-12 {
    width: 50%;
  }
  &-span-8 {
    width: 33.33%;
  }
  &-span-6 {
    width: 25%;
  }
  &-span-4 {
    width: 16.66%;
  }
}
</style>
