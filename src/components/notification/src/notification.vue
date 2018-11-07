<template>
  <transition name="py-notification-fade">
    <div :class="['py-notification', customClass, horizontalClass]"
    v-show="visible" :style="positionStyle"
    @click="click" @mouseenter="clearTimer()" @mouseleave="startTimer()">
      <!-- <i class="py-notification__icon pyui-icons"
      :class="[ typeClass, iconClass ]"
      v-if="type || iconClass"></i> -->
      <py-icon v-if="type" class="py-notification__icon" :type="typeClass"></py-icon>
      <i v-else-if="iconClass.length > 0" class="py-notification__icon" :class="iconClass"></i>
      <div class="py-notification__group">
        <h2 class="py-notification__title" v-text="title"></h2>
        <div class="py-notification__content" v-show="message">
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <py-icon type="close" class="py-notification__closeBtn"
        v-if="showClose" @click.stop="close"></py-icon>
      </div>
    </div>
  </transition>
</template>

<script>
import PyIcon from '../../icon/index';
/**
 * 与type属性相关联的可选的消息类型，如果不在可选值内将被忽略
 */
const typeMap = {
  success: 'check-circle-fill',
  info: 'info-circle-fill',
  warning: 'warning-circle-fill',
  error: 'close-circle-fill',
};
export default {
  name: 'Notification',
  data() {
    return {
      // 控制消息弹框的出现与消失
      visible: false,
      // 消息标题
      title: '',
      // 消息的主体说明文字
      message: '',
      // 显示时间, 毫秒。设为 0 则不会自动关闭
      duration: 4500,
      // 消息类型，也可通过this.$notify.info直接指定类型
      type: '',
      // 是否显示关闭按钮
      showClose: true,
      // 自定义类名数组形式传入
      customClass: [],
      // 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖
      iconClass: '',
      // 关闭时的回调函数
      onClose: null,
      // 点击 Notification 时的回调函数
      onClick: null,
      // 标志消息框的显示与关闭状态
      closed: false,
      // 偏移的距离，通过offset属性传入后自动进行样式设置
      verticalOffset: 0,
      // 显示时长计时器
      timer: null,
      // 要将 message 属性作为 HTML 片段处理，该值需要设置为true
      dangerouslyUseHTMLString: false,
      // 自定义弹出位置，可选值为top-right/top-left/bottom-right/bottom-left
      position: 'top-right',
    };
  },
  components: {
    'py-icon': PyIcon,
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    },
  },
  computed: {
    // 提示图标
    typeClass() {
      // return this.type && typeMap[this.type] ? `py-icon-${typeMap[this.type]}` : '';
      return this.type && typeMap[this.type] ? `${typeMap[this.type]}` : '';
    },
    // 水平位置
    horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left';
    },
    // 垂直位置
    verticalProperty() {
      return /^top-/.test(this.position) ? 'top' : 'bottom';
    },
    positionStyle() {
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`,
      };
    },
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    click() {
      if (typeof this.onClick === 'function') {
        this.onClick();
      }
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    keydown(e) {
      if (e.keyCode === 46 || e.keyCode === 8) {
        // Detele 或者 BackSpace 键 取消倒计时
        this.clearTimer();
      } else if (e.keyCode === 27) {
        // esc关闭消息
        this.clearTimer(); // detele 取消倒计时
      } else if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      } else {
        // 恢复倒计时
        this.startTimer();
        this.startTimer(); // 恢复倒计时
      }
    },
  },
  mounted() {
    if (this.duration > 0) {
      // 启动倒计时
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, this.duration);
    }
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  },
};
</script>
