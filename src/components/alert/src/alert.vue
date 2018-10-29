<style lang="scss" scoped>
@import '@/base/themes.scss';
.py-alert-fade-enter-active,
.py-alert-fade-leave-active {
  transition: opacity 0.5s;
}
.py-alert-fade-enter,
.py-alert-fade-leave-to {
  opacity: 0;
}

$clsPrefix: 'py-alert';
$clsSub: '__';
$clsModifier: '--';

$infoColor: $color;
$successColor: #19be6b;
$warningColor: #ff9900;
$errorColor: #ed3f14;

$infoBg: #f4f4f5;
$successBg: #e2f9d7;
$warningBg: #fdf5e9;
$errorBg: #fae7e3;

$fontSize: 16px;
$mediumFontSize: 20px;
$largeFontSize: 24px;

@mixin alertStyle($color: $color, $bgColor: $bgColor) {
  color: $color;
  background-color: $bgColor;
  border-color: rgba(0, 0, 0, 0.1);
}

.#{$clsPrefix} {
  position: relative;
  padding: 10px 20px;
  color: $infoColor;
  font-size: $fontSize;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  &#{$clsSub}title {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &.show-icon {
    padding-left: 60px;
  }
  &#{$clsSub}icon {
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -16px;
    display: inline-block;
    font-weight: bold;
    .pyui-icons {
      font-size: 32px;
    }
  }
  &#{$clsModifier}medium {
    padding: 15px 20px;
    font-size: $mediumFontSize;
    .#{$clsPrefix}#{$clsSub}close {
      font-size: $mediumFontSize;
      top: 15px;
    }
  }
  &#{$clsModifier}large {
    padding: 20px 20px;
    font-size: $largeFontSize;
    .#{$clsPrefix}#{$clsSub}close {
      font-size: $largeFontSize;
      top: 20px;
    }
  }
  &#{$clsSub}close {
    position: absolute;
    right: 20px;
    top: 10px;
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    line-height: 1;
    font-size: 14px;
    opacity: 0.6;
    cursor: pointer;
  }
  &#{$clsModifier}info {
    @include alertStyle($infoColor, $infoBg);
  }
  &#{$clsModifier}success {
    @include alertStyle($successColor, $successBg);
  }
  &#{$clsModifier}warning {
    @include alertStyle($warningColor, $warningBg);
  }
  &#{$clsModifier}error {
    @include alertStyle($errorColor, $errorBg);
  }
}
.is-center {
  text-align: center;
}
</style>

<template>
  <transition name="py-alert-fade">
    <div
    class="py-alert"
    :class="[typeClass, alignClass, showIconStyle, sizeStyle]"
    v-show="visible"
    role="alert">
      <span class="py-alert__icon" v-if="showIcon">
        <i class="pyui-icons" :class="[iconStyle]"></i>
      </span>
      <span class="py-alert__title" v-if="title">
        <i class="pyui-icons" :class="[titleIconStyle]" v-if="titleIcon"></i>
        {{title}}
      </span>
      <p class="py-alert__desc"><slot></slot></p>
      <i class="py-alert__close pyui-icons"
        :class="[closeBtnStyle]"
        v-if="closeable"
        @click="closeAlert">
        <span v-if="closeText">{{closeText}}</span>
      </i>
    </div>
  </transition>
</template>

<script>
const iconPrefix = 'py-icon-';
export default {
  name: 'PyAlert',
  props: {
    type: {
      type: String,
      default: '',
      required: true,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    isCenter: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    titleIcon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    typeClass() {
      return `py-alert--${this.type}`;
    },
    alignClass() {
      return this.isCenter ? 'is-center' : '';
    },
    titleIconStyle() {
      if (this.titleIcon) {
        if (this.type === 'info') {
          return `${iconPrefix}info-circle-fill`;
        }
        if (this.type === 'success') {
          return `${iconPrefix}check-circle-fill`;
        }
        if (this.type === 'warning') {
          return `${iconPrefix}warning-circle-fill`;
        }
        if (this.type === 'error') {
          return `${iconPrefix}close-circle-fill`;
        }
      }
      return '';
    },
    showIconStyle() {
      if (this.showIcon) {
        return 'show-icon';
      }
      return '';
    },
    iconStyle() {
      if (this.showIcon) {
        if (this.type === 'info') {
          return `${iconPrefix}info-circle-fill`;
        }
        if (this.type === 'success') {
          return `${iconPrefix}check-circle-fill`;
        }
        if (this.type === 'warning') {
          return `${iconPrefix}warning-circle-fill`;
        }
        if (this.type === 'error') {
          return `${iconPrefix}close-circle-fill`;
        }
      }
      return '';
    },
    closeBtnStyle() {
      if (this.closeText === '' && this.closeable) {
        return 'py-icon-close';
      }
      return '';
    },
    sizeStyle() {
      return `py-alert--${this.size}`;
    },
  },
  methods: {
    closeAlert() {
      this.visible = false;
      this.$emit('close');
    },
  },
};
</script>
