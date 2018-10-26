<template>
  <div :class="wrapClasses">
    <slot></slot>
  </div>
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
  },
  methods: {
    findSider() {
      return this.$children.some(child => child.$options.name === 'Sider');
    },
  },
};
</script>
