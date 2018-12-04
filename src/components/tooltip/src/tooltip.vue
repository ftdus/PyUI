<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div :class="[prefixCls + '__rel']" ref="reference">
      <slot></slot>
    </div>
    <transition name="py-tooltip">
      <div
        :class="[prefixCls + '__popper', prefixCls + '__' + theme]"
        ref="popper"
        v-show="!disabled && (visible || always)"
        @mouseenter="handleShowPopper"
        @mouseleave="handleClosePopper"
      >
        <div :class="[prefixCls + '__content']">
          <div :class="[prefixCls + '__arrow']"></div>
          <div :class="innerClasses" :style="innerStyles">
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Popper from './mixins/popper';

const prefixCls = 'py-tooltip';
let transferIndex = 0;
function transferIncrease() {
  transferIndex += 1;
}

export default {
  name: 'Tooltip',
  mixins: [Popper],
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    content: {
      type: [String, Number],
      default: '',
    },
    delay: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    controlled: {
      type: Boolean,
      default: false,
    },
    always: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'dark',
    },
    maxWidth: {
      type: [String, Number],
    },
  },
  data() {
    return {
      prefixCls,
      tIndex: this.handleGetIndex(),
    };
  },
  computed: {
    innerStyles() {
      const styles = {};
      if (this.maxWidth) styles['max-width'] = `${this.maxWidth}px`;
      return styles;
    },
    innerClasses() {
      return [
        `${prefixCls}__inner`,
        {
          [`${prefixCls}__inner-with-width`]: !!this.maxWidth,
        },
      ];
    },
  },
  watch: {
    content() {
      this.updatePopper();
    },
  },
  methods: {
    handleShowPopper() {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = true;
      }, this.delay);
      this.tIndex = this.handleGetIndex();
    },
    handleClosePopper() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        if (!this.controlled) {
          this.timeout = setTimeout(() => {
            this.visible = false;
          }, 100);
        }
      }
    },
    handleGetIndex() {
      transferIncrease();
      return transferIndex;
    },
  },
  mounted() {
    if (this.always) {
      this.updatePopper();
    }
  },
};
</script>
