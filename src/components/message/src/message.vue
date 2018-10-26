<template>
  <transition name="slide-fade">
    <div :class="[
            'py-message',
            customClass,
            type && !iconClass ? `py-message--${ type }` : '',
            center ? 'is-center' : '',
            showClose ? 'is-closable' : ''
          ]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert">
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="py-message__content">{{ message }}</p>
        <p v-else class="py-message__content" v-html="message"></p>
      </slot>
      <i v-if="showClose" class="py-message__close pyui-icons py-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
// 组件class前缀
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
};
let timer = null;
export default {
  name: 'PyMessage',
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      dangerouslyUseHTMLString: false,
      center: false,
    };
  },

  inject: {},

  props: {},

  computed: {
    typeClass() {
      return this.type && !this.iconClass
        ? `py-message__icon py-icon-${typeMap[this.type]}`
        : '';
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    },
  },

  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    /**
     * 关闭
     */
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    /**
     * 开始计时
     */
    startTimer() {
      if (this.duration > 0) {
        timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    /**
     * 清除计时
     */
    clearTimer() {
      clearTimeout(timer);
    },
    /**
     * esc 关闭消息
     */
    keydown(e) {
      if (e.keyCode === 27) {
        if (!this.closed) {
          this.close();
        }
      }
    },
  },

  mounted() {
    this.startTimer();
    document.addEventListener('keydown', this.keydown);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  },
};
</script>
