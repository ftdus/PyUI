<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-icon';

export default {
  name: 'PyIcon',

  inject: {},

  props: {
    type: {
      type: String,
      default: '',
    },
    size: [Number, String],
    color: String,
  },

  computed: {
    classes() {
      return [
        'pyui-icons',
        {
          [`${prefixCls}-${this.type}`]: this.type !== '',
        },
      ];
    },
    styles() {
      const style = {};

      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }

      if (this.color) {
        style.color = this.color;
      }

      return style;
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
