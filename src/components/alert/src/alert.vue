<template>
  <transition name="py-alert-fade">
    <div
    class="py-alert"
    :class="[typeClass, alignClass, showIconStyle, sizeStyle]"
    v-show="visible"
    role="alert">
      <span class="py-alert__icon" v-if="showIcon">
        <py-icon :type="iconStyle"></py-icon>
      </span>
      <span class="py-alert__title" v-if="title">
        <py-icon :type="titleIconStyle" v-if="titleIcon"></py-icon>
        {{title}}
      </span>
      <div class="py-alert__desc"><slot></slot></div>
      <span
        class="py-alert__close"
        v-if="closable"
        @click="closeAlert">
        <py-icon type="close" v-if="!closeText"></py-icon>
        <span v-if="closeText">{{closeText}}</span>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PyAlert',
  props: {
    type: {
      type: String,
      default: '',
      required: true,
    },
    closable: {
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
          return 'info-circle-fill';
        }
        if (this.type === 'success') {
          return 'check-circle-fill';
        }
        if (this.type === 'warning') {
          return 'warning-circle-fill';
        }
        if (this.type === 'error') {
          return 'close-circle-fill';
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
          return 'info-circle-fill';
        }
        if (this.type === 'success') {
          return 'check-circle-fill';
        }
        if (this.type === 'warning') {
          return 'warning-circle-fill';
        }
        if (this.type === 'error') {
          return 'close-circle-fill';
        }
      }
      return '';
    },
    closeBtnStyle() {
      if (this.closeText === '' && this.closable) {
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
