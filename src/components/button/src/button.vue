<template>
  <button class="iconfont" :class="classes" :disabled="disabled" @click="handleClick">
    <i v-if="icon" class="py-icon iconfont" :class="icon"></i>
    <i v-if="loading" class="iconfont py-icon--loading icon-loading"></i>
    <span v-if="slotShow">
      <slot></slot>
    </span>
  </button>
</template>

<script>
/*
  bug: 1.IE9下，加载动画不能旋转
*/
const prefixCls = 'py-button';
const modifiter = '--';

const Props = {
  size: new Set(['large', 'default', 'small']),
  type: new Set(['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']),
  shape: new Set(['circle']),
};

export default {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      validator(value) {
        return Props.size.has(value);
      },
    },
    shape: String,
    icon: String,
    long: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}${modifiter}${this.size}`]: !!this.size && this.size !== 'default',
          [`${prefixCls}${modifiter}${this.type}`]: this.type !== 'default',
          [`${prefixCls}${modifiter}${this.shape}`]: !!this.shape,
          [`py-icon--only`]: this.shape && !this.slotShow && this.icon,
          [`${prefixCls}${modifiter}long`]: !!this.long,
          [`${prefixCls}${modifiter}loading`]: !!this.loading,
        },
      ];
    },
  },
  data() {
    return {
      slotShow: true,
    };
  },
  mounted() {
    this.slotShow = this.$slots.default !== undefined;
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>
