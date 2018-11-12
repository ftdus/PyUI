<template>
  <transition name="py-message-slide-fade">
    <div :class="[
            'py-message',
            customClass,
            type && !iconClass ? `py-message--${ type }` : '',
            {'is-center': center},
            {'is-closable': showClose}
          ]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert">
      <py-icon :class="['py-message__icon', iconClass]" v-if="iconClass">
      </py-icon>
      <py-icon :class="typeClass" v-else>
      </py-icon>
      <p v-if="!useHTMLString" class="py-message__content">{{ message }}</p>
      <p v-else class="py-message__content" v-html="message"></p>
      <py-icon class="py-message__close pyui-icons" type="close" v-if="showClose" @click="close">
      </py-icon>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'check-circle-fill',
  info: 'info-circle-fill',
  warning: 'warning-circle-fill',
  error: 'close-circle-fill',
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
      useHTMLString: false,
      center: false,
    };
  },

  computed: {
    typeClass() {
      return this.type && !this.iconClass
        ? `py-message__icon pyui-icons py-icon-${typeMap[this.type]}`
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
  },

  mounted() {
    this.startTimer();
  },
};
</script>
