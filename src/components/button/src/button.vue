<style lang='scss' scoped>
@import "../../../base/themes.scss";
$primary-color: #2d8cf0;
$info-color: #2db7f5;
$success-color: #19be6b;
$warning-color: #ff9900;
$error-color: #ed4014;
$padding: 6px 15px;
$font-size-default: 14px;
$font-size-small: 12px;

$prefixCls: "py-button";
$element-separator: "__";
$modifier-separator: "--";

@mixin btnType($color: $color, $bgColor: $bgColor) {
    color: $color;
    background-color: $bgColor;
    border-color: $bgColor;
}
.#{$prefixCls} {
    padding: 5px 15px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    font-size: $font-size-default;
    text-align: center;
    line-height: 1.5;
    color: $color;
    background-color: #fff;
    transition: 0.1s;
    span {
        margin-left: 4px;
    }
    &:hover {
        color: $color-hover;
        border-color: $border-color-hover;
        cursor: pointer;
    }
    &:active {
        color: $color-active;
        border-color: $border-color-active;
    }
    &[disabled],
    &[disabled]:hover {
        cursor: not-allowed;
        background-color: #f7f7f7;
        color: #c5c8ce;
        border-color: #dcdee2;
    }
    &#{$modifier-separator}large {
        padding: 6px 15px;
        font-size: $font-size-default;
    }
    &#{$modifier-separator}small {
        padding: 1px 7px 2px;
        font-size: $font-size-small;
    }
    &#{$modifier-separator}primary {
        @include btnType(#fff, $primary-color);
        &:hover {
            @include btnType(#fff, lighten($primary-color, 10%));
        }
    }
    &#{$modifier-separator}dashed {
        border: 1px dashed $border-color;
    }
    &#{$modifier-separator}text {
        border: none;
        background-color: transparent;
        &:hover {
            background-color: #fff;
        }
        &[disabled],
        &[disabled]:hover {
            background-color: transparent;
        }
    }
    &#{$modifier-separator}info {
        @include btnType(#fff, $info-color);
        &:hover,
        &:active {
            @include btnType(#fff, lighten($info-color, 10%));
        }
    }
    &#{$modifier-separator}success {
        @include btnType(#fff, $success-color);
        &:hover,
        &:active {
            @include btnType(#fff, lighten($success-color, 10%));
        }
    }
    &#{$modifier-separator}warning {
        @include btnType(#fff, $warning-color);
        &:hover,
        &:active {
            @include btnType(#fff, lighten($warning-color, 10%));
        }
    }
    &#{$modifier-separator}error {
        @include btnType(#fff, $error-color);
        &:hover,
        &:active {
            @include btnType(#fff, lighten($error-color, 10%));
        }
    }
    &#{$modifier-separator}circle {
        border-radius: 32px;
    }
    &#{$modifier-separator}long {
        width: 100%;
    }
    &#{$modifier-separator}loading {
        &:hover {
            cursor: default;
        }
    }
}
.py-icon {
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    line-height: 1;
    font-size: 14px;
    &#{$modifier-separator}only {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        padding: 0;
        font-size: 16px;
    }
    &#{$modifier-separator}loading {
        animation: rotating 2s linear infinite;
    }
    @keyframes rotating {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    &#{$modifier-separator}right {
        span {
            float: left;
            margin-right: 4px;
            margin-left: 0;
        }
    }
}
</style>
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
