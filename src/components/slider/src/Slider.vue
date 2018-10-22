<template>
  <div class="py-slider" ref="wrap">
    <div class="py-slider__runway" ref="runway">
      <div
        class="py-slider__stops--wrap"
        v-if="showStops">
        <div
          v-for="(item, index) in stops"
          v-if="index > 0 && index < stops.length - 1"
          :style="{ left: `${item}%` }"
          :key="item"
          class="py-slider__stop"
        >
        </div>
      </div>
      <div
        :class="{ 'py-slider__runway--process': true, disabled }"
        :style="{ width: `${process}px` }"
      >
      </div>
      <div
        class="py-slider__button--wrap"
        ref="button"
        :style="{
          transform: `translateX(${process - 7.5}px)`
        }"
      >
        <div
          :class="{ 'py-slider__button': true, hover: dragStart, disabled }"
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
 *    - vertical
 *    - range
 *    - showTooltip
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
    // vertical: {
    //   type: Boolean,
    //   default: false,
    // },
    // range: {
    //   type: Boolean,
    //   default: false,
    // },
    // tooltipClass: {
    //   type: String,
    // },
    showStops: {
      type: Boolean,
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
      // 实际偏移量
      return (this.runWayWidth / 100) * this.value;
    },
    stops() {
      const result = [];
      for (let i = 0; i <= 100 / this.step; i++) {
        result.push(i * this.step);
      }
      return result;
    },
  },

  mounted() {
    this.runWayWidth = this.$refs.runway.offsetWidth;
    window.addEventListener('resize', this.onResize);
  },

  methods: {
    handleMouseDown() {
      if (this.disabled) { return; }
      this.dragStart = true;
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    },
    handleMouseEnter() {
      if (this.disabled) { return; }
      this.mouseEnter = true;
    },
    handleMouseLeave() {
      if (this.disabled) { return; }
      this.mouseEnter = false;
    },
    onMouseMove(event) {
      if (this.mouseEnter) { return; }
      let value = ((event.clientX - this.$refs.runway.offsetLeft) / this.runWayWidth) * 100;
      if (value < this.min) {
        value = this.min;
      } else if (value > this.max) {
        value = this.max;
      } else {
        const result = [];
        for (let i = 0; i <= 100 / this.step; i++) {
          result.push(i * this.step);
        }
        for (let i = 0; i < result.length; i++) {
          if (value <= result[i]) {
            if (!this.lastMoveEventValue) {
              if (value > this.value) {
                value = result[i];
                break;
              } else if (value < this.value) {
                value = result[i - 1];
              } else {
                value = this.value;
              }
              break;
            } else {
              if (event.clientX > this.lastMoveEventValue) {
                value = result[i];
              } else if (event.clientX < this.lastMoveEventValue) {
                value = result[i - 1];
              } else {
                value = this.value;
              }
              break;
            }
          }
        }
      }
      this.lastMoveEventValue = event.clientX;
      this.$emit('input', value);
    },
    onMouseUp() {
      this.dragStart = false;
      this.lastMoveEventValue = null;
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
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss" scoped>
  @import "../../../base/themes.scss";
  $prefixCls: "py-slider";

  $runWayBgColor: #e4e7ed;
  $runWayRadio: 3px;
  $buttonBorderColor: $primary-color;
  $buttonSize: 18px;
  $runWayHeight: 5px;

  .#{$prefixCls} {
    width: 100%;
    &__runway {
      height: $runWayHeight;
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
        &.disabled {
          background-color: #c0c4cc;
        }
      }
    }
    &__button {
      width: $buttonSize;
      height: $buttonSize;
      border-radius: 50%;
      border: 2px solid $buttonBorderColor;
      user-select: none;
      cursor: pointer;
      &.hover, &:hover:not(.disabled) {
        transform: scale(1.2);
        transition: .3s;
      }
      &--wrap {
        width: $buttonSize;
        height: $buttonSize;
        background-color: rgba(255, 255, 255, 1);
      }
      &.disabled {
        border-color: #c0c4cc;
        cursor: not-allowed;
      }
    }
    &__stop {
      position: absolute;
      width: 6px;
      height: $runWayHeight;
      background-color: rgba(255, 255, 255, 1);
    }
    &__stops {
      &--wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
