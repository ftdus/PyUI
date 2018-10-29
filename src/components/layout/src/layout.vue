<template>
  <section :class="[wrapClasses , isVertical ? 'is-vertical' : '']">
    <slot></slot>
  </section>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-layout';

export default {
  name: 'PyLayout',
  data() {
    return {
      hasSider: false,
    };
  },
  props: {
    direction: String,
  },
  mounted() {
    this.hasSider = this.findSider();
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-has-sider`]: this.hasSider,
        },
      ];
    },
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === 'py-header' || tag === 'py-footer';
        })
        : false;
    },
  },
  methods: {
    findSider() {
      return this.$children.some(child => child.$options.name === 'PySider');
    },
  },
};
</script>
