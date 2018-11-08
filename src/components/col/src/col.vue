<template>
  <div :class="classList" :style="styles"><slot></slot></div>
</template>
<script>
const prefixCls = 'py-col';
// Find components upward
function findComponentUpward(context, componentName, componentNames) {
  let c = componentNames;
  if (typeof componentName === 'string') {
    c = [componentName];
  } else {
    c = componentName;
  }

  let parent = context.$parent;
  let { name } = parent.$options;
  while (parent && (!name || c.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) {
      const { name: n } = parent.$options;
      name = n;
    }
  }
  return parent;
}

export default {
  name: 'py-col',
  props: {
    span: [Number, String],
    order: String,
    push: String,
    pull: String,
    offset: [Number, String],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
  },
  data() {
    return {
      crevice: 0,
      sizes: ['xs', 'sm', 'md', 'lg'],
    };
  },
  computed: {
    classList() {
      const classses = [
        `${prefixCls}`,
        {
          [`${prefixCls}__span-${this.span}`]: this.span,
          [`${prefixCls}__push-${this.push}`]: this.push,
          [`${prefixCls}__pull-${this.pull}`]: this.pull,
          [`${prefixCls}__offset-${this.offset}`]: this.offset,
        },
      ];
      this.sizes.forEach(size => {
        if (typeof this[size] === 'number') {
          classses.push(`${prefixCls}__span-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          const props = this[size];
          Object.keys(props).forEach(prop => {
            classses.push(prop !== 'span'
              ? `${prefixCls}__${size}-${prop}-${props[prop]}`
              : `${prefixCls}__span-${size}-${props[prop]}`);
          });
        }
      });
      return classses;
    },
    styles() {
      let style = {};
      if (this.crevice !== 0) {
        style = {
          paddingLeft: `${this.crevice / 2}px`,
          paddingRight: `${this.crevice / 2}px`,
        };
      }
      if (this.order) {
        style.order = this.order;
      }
      return style;
    },
  },
  methods: {
    updatecrevice() {
      const Row = findComponentUpward(this, 'py-row');
      if (Row) {
        Row.uploadCrevice(Row.crevice);
      }
    },
  },
  mounted() {
    this.updatecrevice();
  },
  beforeDestroy() {
    this.updatecrevice();
  },
};
</script>
