<template>
  <div :class="classes" :style="colors" @click="handleClick">
    <img :src="src" v-if="src" />
    <py-icon v-else-if="icon" :type="icon" class="py-avatar__icon"></py-icon>
    <i v-else-if="customIcon.length > 0" class="py-avatar__icon" :class="customIcon"></i>
    <span v-else ref="children" :class="[prefixCls + '-string']" :style="childrenStyle">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import PyIcon from '../../icon/index';
// 组件class前缀
const prefixCls = 'py-avatar';
const shapeOptions = ['circle', 'square'];
const sizeOptions = ['default', 'small', 'large'];

export default {
  name: 'PyAvatar',
  components: {
    'py-icon': PyIcon,
  },
  props: {
    // 头像形状选择，只有shapeOptions中的类型可选，默认为circle，输入其他值也为circle。
    shape: {
      validator(value) {
        if (shapeOptions.indexOf(value) !== -1) {
          return value;
        }
        return shapeOptions[0];
      },
      default: shapeOptions[0],
    },
    // 头像尺寸选择，只有sizeOptions中的类型可选，默认为default，输入其他值也为default。
    size: {
      validator(value) {
        if (sizeOptions.indexOf(value) !== -1) {
          return value;
        }
        return sizeOptions[0];
      },
      default: sizeOptions[0],
    },
    // 图片类头像的资源地址。
    src: {
      type: String,
    },
    // 设置头像图标类型，具体类型参考PyIcon组件
    icon: {
      type: String,
    },
    // 自定义图标，需要传入class数组
    customIcon: {
      type: Array,
      default() {
        return [];
      },
    },
    // 自定义字体、图标颜色
    color: {
      type: String,
      default() {
        return '#fff';
      },
    },
    // 自定义背景颜色
    backgroundColor: {
      type: String,
      default() {
        return '#ccc';
      },
    },
  },
  data() {
    return {
      prefixCls,
      scale: 1,
      childrenWidth: 0,
      isSlotShow: false,
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}--${this.shape}`,
        `${prefixCls}--${this.size}`,
        {
          [`${prefixCls}__image`]: !!this.src,
          [`${prefixCls}__icon`]: !!this.icon || this.customIcon.length > 0,
        },
      ];
    },
    colors() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor,
      };
    },
    childrenStyle() {
      let style = {};
      if (this.isSlotShow) {
        style = {
          msTransform: `scale(${this.scale})`,
          WebkitTransform: `scale(${this.scale})`,
          transform: `scale(${this.scale})`,
          position: 'absolute',
          display: 'inline-block',
          left: `calc(50% - ${Math.round(this.childrenWidth / 2)}px)`,
        };
      }
      return style;
    },
  },
  methods: {
    setScale() {
      this.isSlotShow = !this.src && !this.icon;
      if (this.$refs.children) {
        this.childrenWidth = this.$refs.children.offsetWidth;
        const avatarWidth = this.$el.getBoundingClientRect().width;
        if (avatarWidth - 8 < this.childrenWidth) {
          this.scale = (avatarWidth - 8) / this.childrenWidth;
        } else {
          this.scale = 1;
        }
      }
    },
    handleClick(event) {
      this.$emit('click', event);
    },
  },
  mounted() {
    this.setScale();
  },
  updated() {
    this.setScale();
  },
};
</script>
