<template>
  <transition :name="disabledTransitions ? '' : 'left-to-right'">
    <span
      class="py-tag"
      :class="[type ? `py-tag--${type}` : '', size ? `py-tag--${size}` : '', { hit: hit }]"
      :style="{ backgroundColor: color }"
    >
      <slot></slot>
      <i class="pyui-icons py-icon-close" v-if="closable" @click.stop="handleClose"></i>
    </span>
  </transition>
</template>

<script>
/**
 *  @desc tag组件
 *  @author wpbest
 */
export default {
  name: 'py-tag',
  props: {
    type: {
      type: String,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    disabledTransitions: {
      type: Boolean,
      default: false,
    },
    hit: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  methods: {
    handleClose(event) {
      this.$emit('close', event);
    },
  },
};
</script>
