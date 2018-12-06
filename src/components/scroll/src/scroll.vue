<template>
  <div class="py-scroll">
    <div
      ref="scrollContainer"
      class="py-scroll__container"
      :style="{ height: `${height}px` }"
      @scroll="handleOnScroll"
    >
      <div><loader v-if="isLoading" :load-text="loadText"></loader> <slot></slot></div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle';
import { typeOf } from './../../../utils/util';
import loader from './scroll-load.vue';

export default {
  name: 'PyScroll',
  components: {
    loader,
  },
  props: {
    loadText: {
      type: String,
      default: '加载中...',
    },
    height: {
      type: [Number, String],
      default: 300,
    },
    distanceToEdge: {
      type: [Number, Array],
      default: 20,
    },
    onReachTop: {
      type: Function,
    },
    onReachBottom: {
      type: Function,
    },
    onReachEdge: {
      type: Function,
    },
  },
  computed: {
    threshold() {
      const presetValue = this.distanceToEdge;
      const threshold = {
        upper: 0,
        below: 0,
      };
      Object.keys(threshold).forEach((key, index) => {
        threshold[key] = Array.isArray(presetValue)
          ? Math.abs(presetValue[index])
          : Math.abs(presetValue);
      });
      return threshold;
    },
    upper: {
      get() {
        return this.top;
      },
      set(newValue) {
        this.top = newValue;
        if (this.top <= this.threshold.upper) {
          this.stabilization(this.action('upper', 1));
        }
      },
    },
    below: {
      get() {
        return this.bottom;
      },
      set(newValue) {
        this.bottom = newValue;
        if (this.bottom <= this.threshold.below) {
          this.stabilization(this.action('below', -1));
        }
      },
    },
  },
  data() {
    return {
      handleOnScroll: () => {},
      temporaryStorage: () => {},
      lastScrollNodePosition: 0,
      top: 0,
      bottom: 0,
      elasticGasket: 2,
      isLoading: false,
      isNext: true,
      direction: 0,
    };
  },
  methods: {
    stabilization(func, time = 250) {
      clearTimeout(this.temporaryStorage);
      this.temporaryStorage = setTimeout(func, time);
    },
    action(type, direction) {
      this.direction = direction;
      if (!this.onReachEdge) {
        if (direction > 0) {
          if (!this.onReachTop) return;
        } else if (direction < 0) {
          if (!this.onReachBottom) return;
        } else {
          return;
        }
      }
      this.isNext = false;
      this.isLoading = true;
      this.activeCallBacks(direction);
    },
    activeCallBacks(direction) {
      // check function
      const funcs = {
        onReachEdge: !!this.onReachEdge,
        onReachTop: !!this.onReachTop,
        onReachBottom: !!this.onReachBottom,
      };
      const callbacks = [
        ...Object.keys(funcs)
          .filter(fun => funcs[fun])
          .map(f => {
            if (f === 'onReachEdge') return this[f](this.done, direction);
            return this[f](this.done);
          }),
      ];
      Promise.all(callbacks);
    },
    done(...arg) {
      const funcs = Array.from(arg)
        .filter(func => typeOf(func) === 'function')
        .map(f => f());
      Promise.all(funcs)
        .then(() => {
          this.nextExecutionInReady();
        })
        .catch(error => {
          throw new Error('Error: can check the info', error);
        });
    },
    nextExecutionInReady() {
      const Element = this.$refs.scrollContainer;
      if (Element.scrollTop === 0) {
        Element.scrollTop = this.elasticGasket;
      } else {
        Element.scrollTop =
          this.direction > 0 ? this.elasticGasket : Element.scrollTop - this.elasticGasket;
      }
      this.stabilization(() => {
        this.isNext = true;
        this.isLoading = false;
      });
    },
    onScrollRunTime() {
      const Element = this.$refs.scrollContainer;
      if (!Element || this.isLoading || !this.isNext) return;
      // direction: upper = >0 or -1< = below
      const DirectionOfScroll = Math.sign(this.lastScrollNodePosition - Element.scrollTop);
      if (DirectionOfScroll >= 0) {
        this.upper = Element.scrollHeight - Math.abs(Element.scrollTop - Element.scrollHeight);
      } else {
        this.below = Math.abs(Element.scrollTop - Element.scrollHeight + Element.clientHeight);
      }
      this.lastScrollNodePosition = Element.scrollTop;
    },
    OnScroll() {
      this.handleOnScroll = throttle(this.onScrollRunTime, 100, { leading: false });
    },
  },
  created() {
    this.OnScroll();
  },
};
</script>
