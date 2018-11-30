<template>
  <div :class="classes">
    <button type="button" :class="arrowClasses" class="lefts" @click="arrowEvent(-1)">
      <py-icon type="ios-arrow-back"></py-icon>
    </button>
    <div :class="[prefixCls + '-list']">
      <div :class="[prefixCls + '-track', showCopyTrack ? '' : 'higher']"
        :style="trackStyles" ref="originTrack">
        <slot></slot>
      </div>
      <div :class="[prefixCls + '-track',
        showCopyTrack ? 'higher' : '']"
        :style="copyTrackStyles"
        ref="copyTrack"
        v-if="loop">
      </div>
    </div>
    <button type="button" :class="arrowClasses" class="rights" @click="arrowEvent(1)">
      <py-icon type="ios-arrow-forward"></py-icon>
    </button>
    <ul :class="positionClasses">
      <template v-for="n in slides.length">
        <li :class="[n - 1 === currentIndex ? prefixCls + '-active' : '']"
          :key="n"
          @click="positionEvent('click', n - 1)"
          @mouseover="positionEvent('hover', n - 1)">
          <button type="button" :class="[radiusPosition ? 'radius' : '']"></button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import PyIcon from '../../icon/src/icon.vue';
import { getStyle, oneOf, on, off } from '../../../utils/util';

const prefixCls = 'py-carousel';

export default {
  name: 'py-carousel',
  components: {
    'py-icon': PyIcon,
  },
  props: {
    // 两侧箭头显示时机
    arrow: {
      type: String,
      default: 'hover',
      validator (value) {
        return oneOf(value, ['hover', 'always', 'never']);
      },
    },
    // 初始自动播放
    autorun: {
      type: Boolean,
      default: false,
    },
    // 初始播放速度
    runSpeed: {
      type: Number,
      default: 2000,
    },
    // 循环
    loop: {
      type: Boolean,
      default: false,
    },
    easing: {
      type: String,
      default: 'ease',
    },
    // 底部指示器位置
    position: {
      type: String,
      default: 'inside',
      validator (value) {
        return oneOf(value, ['inside', 'outside', 'none']);
      },
    },
    // 圆形指示器
    radiusPosition: {
      type: Boolean,
      default: false,
    },
    // 指示器触发方式
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return oneOf(value, ['click', 'hover']);
      },
    },
    // 初始轮播位置
    value: {
      type: Number,
      default: 0,
    },
    height: {
      type: [String, Number],
      default: 'auto',
      validator (value) {
        return value === 'auto' || Object.prototype.toString.call(value) === '[object Number]';
      },
    },
  },
  data () {
    return {
      prefixCls,
      listWidth: 0,
      trackWidth: 0,
      trackOffset: 0,
      trackCopyOffset: 0,
      showCopyTrack: false,
      slides: [],
      slideInstances: [],
      timer: null,
      ready: false,
      currentIndex: this.value,
      trackIndex: this.value,
      copyTrackIndex: this.value,
      hideTrackPos: -1, // 默认左滑
    };
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
      ];
    },
    trackStyles () {
      return {
        width: `${this.trackWidth}px`,
        transform: `translate3d(${-this.trackOffset}px, 0px, 0px)`,
        transition: `transform 500ms ${this.easing}`,
      };
    },
    copyTrackStyles () {
      return {
        width: `${this.trackWidth}px`,
        transform: `translate3d(${-this.trackCopyOffset}px, 0px, 0px)`,
        transition: `transform 500ms ${this.easing}`,
        position: 'absolute',
        top: 0,
      };
    },
    arrowClasses () {
      return [
        `${prefixCls}-arrow`,
        `${prefixCls}-arrow-${this.arrow}`,
      ];
    },
    positionClasses () {
      return [
        `${prefixCls}-position`,
        `${prefixCls}-position-${this.position}`,
      ];
    },
  },
  methods: {
    findChild (cb) {
      const find = function (child) {
        const name = child.$options.componentName;

        if (name) {
          cb(child);
        } else if (child.$children.length) {
          child.$children.forEach(innerChild => {
            find(innerChild, cb);
          });
        }
      };

      if (this.slideInstances.length || !this.$children) {
        this.slideInstances.forEach(child => {
          find(child);
        });
      } else {
        this.$children.forEach(child => {
          find(child);
        });
      }
    },
    initCopyTrackDom () {
      this.$nextTick(() => {
        this.$refs.copyTrack.innerHTML = this.$refs.originTrack.innerHTML;
      });
    },
    updateSlides (init) {
      const slides = [];
      let index = 1;

      this.findChild(child => {
        slides.push({
          $el: child.$el,
        });
        index += 1;
        child.index = index;

        if (init) {
          this.slideInstances.push(child);
        }
      });

      this.slides = slides;
      this.updatePos();
    },
    updatePos () {
      this.findChild(child => {
        child.width = this.listWidth;
        child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
      });

      this.trackWidth = (this.slides.length || 0) * this.listWidth;
    },
    slotChange () {
      this.$nextTick(() => {
        this.slides = [];
        this.slideInstances = [];

        this.updateSlides(true, true);
        this.updatePos();
        this.updateOffset();
      });
    },
    handleResize () {
      this.listWidth = parseInt(getStyle(this.$el, 'width'), 10);
      this.updatePos();
      this.updateOffset();
    },
    updateTrackPos (index) {
      if (this.showCopyTrack) {
        this.trackIndex = index;
      } else {
        this.copyTrackIndex = index;
      }
    },
    updateTrackIndex (index) {
      if (this.showCopyTrack) {
        this.copyTrackIndex = index;
      } else {
        this.trackIndex = index;
      }
      this.currentIndex = index;
    },
    add (offset) {
      // 获取单个轨道的图片数
      const slidesLen = this.slides.length;
      if (this.loop) {
        // 初始化滑块位置
        if (offset > 0) {
          this.hideTrackPos = -1;
        } else {
          this.hideTrackPos = slidesLen;
        }
        this.updateTrackPos(this.hideTrackPos);
      }
      // 获取当前展示的索引值
      const oldIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
      let index = oldIndex + offset;
      while (index < 0) index += slidesLen;
      const leftTrue = (offset > 0 && index === slidesLen);
      const rightTrue = (offset < 0 && index === slidesLen - 1);
      if ((leftTrue || rightTrue) && this.loop) {
        this.showCopyTrack = !this.showCopyTrack;
        this.trackIndex += offset;
        this.copyTrackIndex += offset;
      } else {
        if (!this.loop) index %= this.slides.length;
        this.updateTrackIndex(index);
      }
      this.currentIndex = index === this.slides.length ? 0 : index;
      this.$emit('on-change', oldIndex, this.currentIndex);
      this.$emit('input', this.currentIndex);
    },
    arrowEvent (offset) {
      this.setAutoplay();
      this.add(offset);
    },
    positionEvent (event, n) {
      const curIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
      if (event === this.trigger && curIndex !== n) {
        this.updateTrackIndex(n);
        this.$emit('input', n);
        this.setAutoplay();
      }
    },
    setAutoplay () {
      window.clearInterval(this.timer);
      if (this.autorun) {
        this.timer = window.setInterval(() => {
          this.add(1);
        }, this.runSpeed);
      }
    },
    updateOffset () {
      this.$nextTick(() => {
        const ofs = this.copyTrackIndex > 0 ? -1 : 1;
        this.trackOffset = this.trackIndex * this.listWidth;
        this.trackCopyOffset = this.copyTrackIndex * this.listWidth + ofs;
      });
    },
  },
  watch: {
    autorun () {
      this.setAutoplay();
    },
    runSpeed () {
      this.setAutoplay();
    },
    trackIndex () {
      this.updateOffset();
    },
    copyTrackIndex () {
      this.updateOffset();
    },
    height () {
      this.updatePos();
    },
    value (val) {
      this.updateTrackIndex(val);
      this.setAutoplay();
    },
  },
  mounted () {
    this.updateSlides(true);
    this.handleResize();
    this.setAutoplay();
    on(window, 'resize', this.handleResize);
  },
  beforeDestroy () {
    off(window, 'resize', this.handleResize);
  },
};
</script>
