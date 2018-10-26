<template>
  <div :class="wrapClass" @mouseleave="handleMouseleave">
      <input type="hidden" :name="name" :value="currentValue">
      <div
        class="pyui-icons"
        :class="handleCls(item)"
        @mousemove="handleMousemove(item, $event)"
        @click="handleClick(item)"
        v-for="item in count"
        :key="item">
          <template v-if="!showCharacter">
            <span :class="defaultClasses" type="half"></span>
          </template>
          <template v-else>
            <span :class="[prefixCls + '__char--half']" type="half">
              <template v-if="character !== ''">{{character}}</template>
              <span v-else :class="charClasses" type="half"></span>
            </span>
            <span :class="[prefixCls + '__char--content']">
              <template v-if="character !== ''">{{ character }}</template>
              <span v-else :class="charClasses"></span>
            </span>
          </template>
      </div>
      <div :class="[prefixCls + '__text']" v-if="showText" v-show="currentValue > 0">
        <slot>
          <span>{{ currentValue }}</span>
          <span v-if="currentValue > 0">星</span>
        </slot>
      </div>
  </div>
</template>

<script>
const prefixCls = 'py-rate';

export default {
  name: 'py-rate',
  props: {
    count: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: 0,
    },
    allowHalf: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showText: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    character: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    customIcon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      prefixCls,
      hoverIndex: -1,
      isHover: false,
      isHalf: this.allowHalf && this.value.toString().indexOf('.') >= 0,
      currentValue: this.value,
    };
  },
  computed: {
    wrapClass() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
        },
      ];
    },
    defaultClasses() {
      return ['py-icon-star-fill', [`${prefixCls}__star--content`]];
    },
    charClasses() {
      return [
        'py-icons',
        {
          [`${this.icon}`]: this.icon !== '',
          [`${this.customIcon}`]: this.customIcon !== '',
        },
      ];
    },
    showCharacter() {
      return (
        this.character !== '' || this.icon !== '' || this.customIcon !== ''
      );
    },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.setHalf(val);
    },
  },
  methods: {
    handleCls(value) {
      const index = this.hoverIndex;
      const currentIndex = this.isHover ? index : this.currentValue;

      let full = false;
      let isLast = false;

      if (currentIndex >= value) full = true;

      if (this.isHover) {
        isLast = currentIndex === value;
      } else {
        isLast = Math.ceil(this.currentValue) === value;
      }

      return [
        {
          [`py-icon-star-fill ${prefixCls}__star`]: !this.showCharacter,
          [`${prefixCls}__star--chart`]: this.showCharacter,
          [`${prefixCls}__star--full`]:
            (!isLast && full) || (isLast && !this.isHalf),
          [`${prefixCls}__star--half`]: isLast && this.isHalf,
          [`${prefixCls}__star--zero`]: !full,
        },
      ];
    },
    handleMousemove(value, event) {
      if (this.disabled) return;

      this.isHover = true;
      if (this.allowHalf) {
        const type = event.target.getAttribute('type') || false;
        this.isHalf = type === 'half';
      } else {
        this.isHalf = false;
      }
      this.hoverIndex = value;
    },
    handleMouseleave() {
      if (this.disabled) return;

      this.isHover = false;
      this.setHalf(this.currentValue);
      this.hoverIndex = -1;
    },
    setHalf(val) {
      this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0;
    },
    handleClick(value) {
      let val = value;

      if (this.disabled) return;
      if (this.isHalf) val -= 0.5;

      if (Math.abs(val - this.currentValue) < 0.01) {
        val = 0;
      }

      this.currentValue = val;
    },
  },
};
</script>
