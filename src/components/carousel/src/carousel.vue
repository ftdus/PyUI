<template>
  <div :class="classes">
    <div class="py-carousel__slide-lists" ref="carousel_list">
      <slot></slot>
    </div>
    <button :class="arrowClasses" class="lefts" @click="change(currentIndex-1)">
    </button>
    <button :class="arrowClasses" class="rights" @click="change(currentIndex+1)">
    </button>
    <transition-group tag="div"  name="list" class="py-carousel__slide-current">
        <li v-for="(list,index) in slideList.length"
          class="py-carousel__slide-current-item"
          :key="index"
          v-show="index===currentIndex"
          @mouseenter="hover(1)"
          @mouseleave="hover(2)">
            <div v-html="slideList[index].outerHTML"></div>
        </li>
    </transition-group>
    <div :class="'py-carousel__positions-'+position" class="py-carousel__positions">
        <span v-for="(item,index) in slideList.length" :key="index"
        :class="positionClass(index)"
        @mouseover="hoverChange(index)"
        @mouseleave="hover(3)"
        @click="change(index)">
        </span>
    </div>
  </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-carousel';
const Props = {
  arrow: new Set(['hover', 'always', 'never']),
  position: new Set(['inside', 'outside', 'none', 'left', 'right']),
};

export default {
  name: 'py-carousel',
  props: {
    // 初始位置
    value: {
      type: Number,
      default: 0,
    },
    // 轮播速度
    speed: {
      type: Number,
      default: 3000,
    },
    // 初始自动轮播
    autoloop: {
      type: Boolean,
      default: true,
    },
    // 自动轮播
    loop: {
      type: Boolean,
      default: true,
    },
    // 鼠标移至界面时是否暂停
    hoverstop: {
      type: Boolean,
      default: true,
    },
    // 两侧箭头显示时机
    arrow: {
      type: String,
      default: 'hover',
      validator (value) {
        return Props.arrow.has(value);
      },
    },
    // 底部指示器位置
    position: {
      type: String,
      default: 'outside',
      validator (value) {
        return Props.position.has(value);
      },
    },
    // 圆形指示器
    radiusPosition: {
      type: Boolean,
      default: false,
    },
    // 指示器触发方式
    trigger: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      slideList: [],
      currentIndex: 0,
      timer: '',
    };
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },
    arrowClasses () {
      return [
        `py-carousel__arrow`,
        `py-carousel__arrow-${this.arrow}`,
      ];
    },
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, this.speed);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    hover(n) {
      if (n === 1 && this.hoverstop) this.stop();
      if (n === 2 && this.hoverstop) this.go();
      if (n === 3 && this.trigger) this.go();
    },
    change(index) {
      index = (index + this.slideList.length) % this.slideList.length;
      this.currentIndex = index;
      this.stop();
    },
    hoverChange(index) {
      if (this.trigger) {
        this.change(index);
      }
    },
    autoPlay() {
      if (this.loop) {
        this.currentIndex += 1;
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0;
        }
      }
    },
    positionClass(index) {
      const classs = [];
      if (index === this.currentIndex) classs.push(`active`);
      if (this.radiusPosition) classs.push(`radius`);
      return classs;
    },
  },
  created() {
    this.$nextTick(() => {
      this.slideList = this.$refs.carousel_list.children;
      this.currentIndex = this.value;
      if (this.autoloop) {
        this.timer = setInterval(() => {
          this.autoPlay();
        }, this.speed);
      }
    });
  },
};
</script>
