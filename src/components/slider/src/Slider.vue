<template>
  <div class="py-slider" ref="wrap">
    <div class="py-slider__runway" ref="runway">
      <div class="py-slider__runway--process" :style="{ width: `${process}px` }"></div>
      <div
        class="py-slider__button--wrap"
        ref="button"
        :style="{
          transform: `translateX(${process - 7.5}px)`
        }"
      >
        <div
          :class="{ 'py-slider__button': true, hover: dragStart }"
          @mousedown="handleMouseDown"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *  @desc 滑块组件
 *  @author YuLinXi
 *  @todo
 *    - step
 *    - disabled
 *    - vertical
 *    - max
 *    - min
 *    - range
 */
export default {
  name: 'py-slider',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    'tooltip-class': {
      type: String,
    },
  },
  data() {
    return {
      dragStart: false,
      runWayWidth: 0,
    };
  },
  computed: {
    process() {
      return (this.runWayWidth / 100) * this.value;
    },
  },

  mounted() {
    this.runWayWidth = this.$refs.runway.offsetWidth;
    window.addEventListener('resize', this.onResize);
  },

  methods: {
    handleMouseDown() {
      this.dragStart = true;
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    },
    handleMouseEnter() {
      this.mouseEnter = true;
    },
    handleMouseLeave() {
      console.log('leave')
      this.mouseEnter = false;
    },
    onMouseMove(event) {
      if (this.mouseEnter) { return; }
      let value;
      if (event.clientX < this.$refs.runway.offsetLeft) {
        value = 0;
      } else if (event.clientX > (this.$refs.runway.offsetLeft + this.runWayWidth) - 15) {
        value = 100;
      } else {
        value = ((event.clientX - this.$refs.runway.offsetLeft) / this.runWayWidth) * 100;
      }
      this.$emit('input', value);
    },
    onMouseUp() {
      this.dragStart = false;
      this.removeWindowListener();
    },
    removeWindowListener() {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
    },
    onResize() {
      this.runWayWidth = this.$refs.runway.offsetWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../../base/themes.scss";
  $prefixCls: "py-slider";

  $runWayBgColor: #e4e7ed;
  $runWayRadio: 3px;
  $buttonBorderColor: $primary-color;
  $buttonSize: 15px;

  .#{$prefixCls} {
    width: 100%;
    &__runway {
      height: 6px;
      background-color: $runWayBgColor;
      border-radius: $runWayRadio;
      display: flex;
      align-items: center;
      position: relative;
      &--process {
        position: absolute;
        left: 0;
        top: 0;
        height: 6px;
        background-color: $primary-color;
        border-radius: $runWayRadio;
      }
    }
    &__button {
      width: $buttonSize;
      height: $buttonSize;
      border-radius: 50%;
      border: 1px solid $buttonBorderColor;
      user-select: none;
      cursor: pointer;
      &.hover, &:hover {
        transform: scale(1.2);
        transition: .3s;
      }
      &--wrap {
        width: $buttonSize;
        height: $buttonSize;
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }
</style>
