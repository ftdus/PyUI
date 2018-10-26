<template>
  <div :class="wrapClass" @mouseleave="handleMouseleave">
      <input type="hidden" :name="name" :value="currentValue">
      <div
        class="iconfont"
        :class="handleCls(item)"
        @mousemove="handleMousemove(item, $event)"
        @click="handleClick(item)"
        v-for="item in count"
        :key="item">
          <template v-if="!showCharacter">
            <span :class="[prefixCls + '__star--content']" type="half"></span>
          </template>
          <template v-else>
            <span :class="[prefixCls + '__char--half']" type="half">
              <template v-if="character !== ''">{{character}}</template>
              <span v-else :class="iconClasses" type="half"></span>
            </span>
            <span :class="[prefixCls + '__char--content']">
              <template v-if="character !== ''">{{ character }}</template>
              <span v-else :class="iconClasses"></span>
            </span>
          </template>
      </div>
      <div :class="[prefixCls + '__text']" v-if="showText" v-show="currentValue > 0">
        <slot>
          <span>{{ currentValue }}</span>
          <span v-if="currentValue <= 1">无</span>
          <span v-else>星</span>
        </slot>
      </div>
  </div>
</template>

<script>
const prefixCls = "py-rate";

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
      isHalf: this.allowHalf && this.value.toString().indexOf(".") >= 0,
      currentValue: this.value,
    };
  },
  computed: {
    wrapClass () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
        },
      ];
    },
    iconClasses () {
      return [
        'py-icon',
        {
          [`py-${this.icon}`]: this.icon !== '',
          [`${this.customIcon}`]: this.customIcon !== '',
        },
      ];
    },
    showCharacter () {
      return this.character !== '' || this.icon !== '' || this.customIcon !== '';
    },
  },
  watch: {
    value (val) {
      this.currentValue = val;
    },
    currentValue (val) {
      this.setHalf(val);
    },
  },
  methods: {
    handleCls (value) {
      const hoverIndex = this.hoverIndex;
      const currentIndex = this.isHover ? hoverIndex : this.currentValue;

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
          [`${prefixCls}__star`]: !this.showCharacter,
          [`${prefixCls}__star--chart`]: this.showCharacter,
          [`${prefixCls}__star--full`]: (!isLast && full) || (isLast && !this.isHalf),
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
    handleMouseleave () {
      if (this.disabled) return;

      this.isHover = false;
      this.setHalf(this.currentValue);
      this.hoverIndex = -1;
    },
    setHalf (val) {
      this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0;
    },
    handleClick (value) {
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

<style lang="scss" scoped>
@import "@/base/themes.scss";
@font-face {font-family: "iconfont";
  src: url('iconfont.ttf?t=1540283022116') format('truetype'),
  url('iconfont.svg?t=1540283022116#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:20px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.py-icon-heart:before { content: "\e610"; }
.py-icon-livestar:before { content: "\e711"; }
.py-icon-liveheart:before { content: "\e6ec"; }

$ratePrefix: "py-rate";
$font: "\e6f9";
$gray: #e9e9e9;
$orange: #f5a623;
$yellow: #f7b84f;

.#{$ratePrefix} {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 20px;
  vertical-align: middle;
  font-weight: 400;
  font-style: normal;
}

.#{$ratePrefix}-disabled {
  .#{$ratePrefix}__star--content:before {
    cursor: default;
  }
  .#{$ratePrefix}__star {
    &:before {
      cursor: default;
    }
    &:hover {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }
}

.#{$ratePrefix}__star--full,
.#{$ratePrefix}__star--zero {
  position: relative;
}

.#{$ratePrefix}__char--half {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  color: $gray;
  cursor: pointer;
}

.#{$ratePrefix}__char--content {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  color: $gray;
  cursor: pointer;
}

.#{$ratePrefix}__star--chart {
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-right: 8px;
  position: relative;
  -webkit-transition: all .3s ease;
  transition: all 0.3s ease;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  &.#{$ratePrefix}__star--full {
    .#{$ratePrefix}__char--half,
    .#{$ratePrefix}__char--content {
      color: $orange;
    }
  }
  &.#{$ratePrefix}__star--half .#{$ratePrefix}__char--half {
    opacity: 1;
    color: $orange;
  }
}

.#{$ratePrefix}__star {
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-right: 8px;
  position: relative;
  -webkit-transition: all .3s ease;
  transition: all 0.3s ease;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
}

.#{$ratePrefix}__star--content:before,
.#{$ratePrefix}__star:before {
  color: $gray;
  cursor: pointer;
  content: $font;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  display: block;
}

.#{$ratePrefix}__star--content {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  &:before {
    color: transparent;
  }
}

.#{$ratePrefix}__star--full:before,
.#{$ratePrefix}__star--half .#{$ratePrefix}__star--content:before {
  color: $orange;
}

.#{$ratePrefix}__star--full:hover:before,
.#{$ratePrefix}__star--half:hover .#{$ratePrefix}__star--content:before {
  color: $yellow;
}

.#{$ratePrefix}__text {
  margin-left: 8px;
  vertical-align: middle;
  display: inline-block;
  font-size: 12px;
}
</style>
