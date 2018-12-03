<template>
  <div
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
    :class="[
      classes,
      status ? 'is-' + status : '',
      {
        'py-progress--without-text': !showText,
        'py-progress--text-inside': textInside,
      },
    ]"
  >
    <div class="py-progress-bar">
      <div class="py-progress-bar__outer" :style="{ height: width + 'px' }">
        <div class="py-progress-bar__inner" :style="barStyle">
          <div class="py-progress-bar__innerText" v-if="showText && textInside">
            {{ percentage }}%
          </div>
        </div>
      </div>
    </div>
    <div
      class="py-progress__text"
      v-if="showText && !textInside"
      :style="{ fontSize: 12 + this.width * 0.4 + 'px' }"
    >
      <template v-if="!status"
        >{{ percentage }}%
      </template>

      <template v-else>
        <i :class="iconClass"></i>
      </template>
    </div>
  </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-progress';

export default {
  name: 'PyProgress',
  props: {
    procentage: {
      type: Number,
      default: 0,
      required: true,
      validator: p => p >= 0 && p <= 100,
    },
    status: {
      type: String,
      validator: s => s === 'success' || s === 'exception',
    },
    width: {
      type: Number,
      default: 6,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },
    barStyle() {
      const style = {};
      style.width = `${this.procentage}%`;
      style.backgroundColor = this.backgroundColor;
      return style;
    },
    iconClass() {
      return this.status === 'success' ? 'py-icon-circle-check' : 'py-icon-circle-close';
    },
  },
};
</script>
