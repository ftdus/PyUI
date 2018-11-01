<template>
  <div :class="['py-hue', directionClass]">
    <div class="py-hue__container"
      role="slider"
      :aria-valuenow="colors.hsl.h"
      aria-valuemin="0"
      aria-valuemax="360"
      ref="container"
      @mousedown="handleMouseDown"
      @touchmove="handleChange"
      @touchstart="handleChange">
      <div class="py-hue__pointer"
          :style="{top: pointerTop, left: pointerLeft}" role="presentation">
        <div class="py-hue__picker"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hue',
  props: {
    value: Object,
    direction: {
      type: String,
      // [horizontal | vertical]
      default: 'horizontal',
    },
  },
  data() {
    return {
      oldHue: 0,
      pullDirection: '',
    };
  },
  computed: {
    directionClass() {
      return {
        'py-hue--horizontal': this.direction === 'horizontal',
        'py-hue--vertical': this.direction === 'vertical',
      };
    },
    pointerTop() {
      if (this.direction === 'vertical') {
        if (this.colors.hsl.h === 0 && this.pullDirection === 'right') return 0;
        return `${-((this.colors.hsl.h * 100) / 360) + 100}%`;
      }
      return 0;
    },
    pointerLeft() {
      if (this.direction === 'vertical') {
        return 0;
      }
      if (this.colors.hsl.h === 0 && this.pullDirection === 'right') {
        return '100%';
      }
      return `${(this.colors.hsl.h * 100) / 360}%`;
    },
    colors: {
      get() {
        return this.value;
      },
      set() {
        const { h } = this.value.hsl.h;
        if (h !== 0 && h - this.oldHue > 0) this.pullDirection = 'right';
        if (h !== 0 && h - this.oldHue < 0) this.data.pullDirection = 'left';
        this.oldHue = h;
      },
    },
  },
  methods: {
    handleChange(e, skip) {
      // !skip && e.preventDefault();
      if (!skip) {
        e.preventDefault();
      }

      const { container } = this.$refs;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      const yOffset = container.getBoundingClientRect().top + window.pageYOffset;
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      const left = pageX - xOffset;
      const top = pageY - yOffset;

      let h;
      let percent;

      if (this.direction === 'vertical') {
        if (top < 0) {
          h = 360;
        } else if (top > containerHeight) {
          h = 0;
        } else {
          percent = -((top * 100) / containerHeight) + 100;
          h = (360 * percent) / 100;
        }

        if (this.colors.hsl.h !== h) {
          this.$emit('change', {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: 'hsl',
          });
        }
      } else {
        if (left < 0) {
          h = 0;
        } else if (left > containerWidth) {
          h = 360;
        } else {
          percent = (left * 100) / containerWidth;
          h = (360 * percent) / 100;
        }

        if (this.colors.hsl.h !== h) {
          this.$emit('change', {
            h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: this.colors.hsl.a,
            source: 'hsl',
          });
        }
      }
    },
    handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    },
  },
};
</script>
