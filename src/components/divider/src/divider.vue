<template>
  <div :class="classes">
    <span v-if="hasSlot" :class="slotClasses">
      <slot></slot>
    </span>
  </div>
</template>

<script>
const oneOf = function(value, validList) {
  for (let i = 0; i < validList.length; i += 1) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
};
const prefixCls = "py-divider";
const elementSeparator = "__";
const modifierSeparator = "--";

export default {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: "horizontal",
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      }
    },
    orientation: {
      type: String,
      default: "center",
      validator(value) {
        return oneOf(value, ["left", "right", "center"]);
      }
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    },
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}${elementSeparator}${this.type}`,
        {
          [`${prefixCls}${elementSeparator}withText${modifierSeparator}${
            this.orientation
          }`]: this.hasSlot,
          [`${prefixCls}${modifierSeparator}dashed`]: !!this.dashed
        }
      ];
    },
    slotClasses() {
      return [`${prefixCls}${modifierSeparator}innerText`];
    }
  }
};
</script>

<style lang='scss' scoped>
$elementSeparator: "__";
$modifierSeparator: "--";

$prefixCls: "py-divider";

.#{$prefixCls} {
  background: $border-color;

  &,
  &#{$elementSeparator}vertical {
    margin: 0 8px;
    display: inline-block;
    height: 0.9em;
    width: 1px;
    vertical-align: middle;
    position: relative;
    top: -0.06em;
  }
  &#{$elementSeparator}horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    clear: both;
  }
  &#{$elementSeparator}horizontal.#{$prefixCls}#{$elementSeparator}withText--center,
  &#{$elementSeparator}horizontal.#{$prefixCls}#{$elementSeparator}withText--left,
  &#{$elementSeparator}horizontal.#{$prefixCls}#{$elementSeparator}withText--right {
    display: table;
    white-space: nowrap;
    text-align: center;
    background: transparent;
    font-weight: 500;
    color: $color;
    font-size: $font-size;
    margin: 16px 0;
    &:before,
    &:after {
      content: "";
      display: table-cell;
      position: relative;
      top: 50%;
      width: 50%;
      border-top: 1px solid $border-color;
      transform: translateY(50%);
    }
  }

  &#{$elementSeparator}horizontal.py-divider__withText--left,
  &#{$elementSeparator}horizontal.py-divider__withText--right {
    font-size: $font-size;
    .#{$prefixCls}#{$elementSeparator}innerText {
      display: inline-block;
      padding: 0 10px;
    }
  }

  &#{$elementSeparator}horizontal.py-divider__withText--left {
    &:before {
      top: 50%;
      width: 5%;
    }
    &:after {
      top: 50%;
      width: 95%;
    }
  }

  &#{$elementSeparator}horizontal.py-divider__withText--right {
    &:before {
      top: 50%;
      width: 95%;
    }
    &:after {
      top: 50%;
      width: 5%;
    }
  }

  &#{$modifierSeparator}innerText {
    display: inline-block;
    padding: 0 24px;
  }

  &#{$modifierSeparator}dashed {
    background: none;
    border-top: 1px dashed $border-color;
  }
  &#{$elementSeparator}horizontal.py-divider__withText.py-divider--dashed,
  &#{$elementSeparator}horizontal.py-divider__withText--left.py-divider--dashed,
  &#{$elementSeparator}horizontal.py-divider__withText--right.py-divider--dashed {
    border-top: 0;
    &:before,
    &:after {
      border-style: dashed none none;
    }
  }
}
</style>
