<style lang='scss' scoped>
@import "@/base/themes.scss";
$prefixCls: "py-badge";
$children-separator: "__";
$modifier-separator: "--";
.#{$prefixCls} {
  position: relative;
  display: inline-block;

  &#{$children-separator}dot {
    border: 1px solid #fff;
    white-space: nowrap;
    font-size: 12px;
    height: 20px;
    text-align: center;
    display: inline-block;
    padding: 0 7px;
    line-height: 20px;
    color: #fff;
    border-radius: 10px;
    &#{$modifier-separator}fixed {
      position: absolute;
       transform: translateY(-50%) translateX(100%);
      top: 0;
      right: 12px;
    }
    &#{$modifier-separator}default {
     background-color: #f00;
    }
    &#{$modifier-separator}success {
      background-color: $success-color;
    }

    &#{$modifier-separator}info {
      background-color: $info-color;
    }
    &#{$modifier-separator}warning {
      background-color: $warning-color;
    }
    &#{$modifier-separator}error {
      background-color: $error-color;
    }
    &#{$modifier-separator}primary {
      background-color: $primary-color;
    }
  }
  &#{$children-separator}count {
    position: absolute;
    height: 8px;
    width: 8px;
    right: 5px;
    padding: 0;
    border-radius: 50%;
  }

}
</style>
<template>
  <div :class="classes">
      <slot></slot>
      <sup
        v-show="!hidden && (content || content == 0 || isDot)"
        :class="dotClass"
        v-text="contentDot">
      </sup>
  </div>
</template>

<script>
const prefixCls = "py-badge";
export default {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: 'default',
    },
    content: [Number, String],
    hidden: {
      type: Boolean,
      default: false,
    },
    isDot: {
      type: Boolean,
      default: false,
    },
    max: {
      type: [Number, String],
      default: 99,
    },
    className: String,
  },
  computed: {
    contentDot() {
      if (this.isDot) return '';
      if (typeof this.content === 'number' && typeof this.max === 'number') {
        return this.content > this.max ? `${this.max}+` : this.content;
      }
      return this.content;
    },
    dotClass() {
      const baseDotStyle = `${prefixCls}__dot`;
      return [
        baseDotStyle,
        this.$slots.default && `${baseDotStyle}--fixed`,
        {
          [`${prefixCls}__count`]: this.isDot,
        },
        `${baseDotStyle}--${this.type}`,
        !!this.className && `${this.className}`,
      ];
    },
    classes() {
      return `${prefixCls}`;
    },
  },
};
</script>
