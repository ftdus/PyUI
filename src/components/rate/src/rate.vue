<template>
  <div class="py-rate" @mouseleave="handleMouseleave">
      <input type="hidden" :name="name" :value="currentValue">
      <div
        v-for="item in count"
        class="iconfont"
        :class="handleCls(item)"
        @mousemove="handleMousemove(item, $event)"
        :key="item"
        @click="handleClick(item)">
          <template v-if="!showCharacter">
            <span :class="[prefixCls + '--content']" type="half"></span>
          </template>
          <template v-else>
            <span :class="[prefixCls + '-star-first']" type="half">
              <template v-if="character !== ''">
                {{character}}
              </template>
              <i v-else :class="iconClasses" type="half"></i>
            </span>
            <span :class="[prefixCls + '-star-second']">
              <template v-if="character !== ''">
                {{ character }}
              </template>
              <i v-else :class="iconClasses"></i>
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
const prefixCls = "py-rate__star";

export default {
  name: 'py-rate',
  props: {
    count: {
        type: Number,
        default: 5
    },
    value: {
        type: Number,
        default: 0
    },
    allowHalf: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    showText: {
        type: Boolean,
        default: false
    },
    name: {
        type: String
    },
    character: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    customIcon: {
        type: String,
        default: ''
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      hoverInedx: -1,
      isHover: false,
      isHalf: this.allowHalf && this.value.toString().indexOf(".") >= 0,
      currentValue: this.value,
    };
  },
  computed: {
    classes () {
      return [
          `${prefixCls}`,
          {
              [`${prefixCls}-disabled`]: this.disabled
          }
      ];
    },
    iconClasses () {
      return [
          'py-icon',
          {
              [`py-icon-${this.icon}`]: this.icon !== '',
              [`${this.customIcon}`]: this.customIcon !== '',
          }
      ];
    },
    showCharacter () {
      return this.character !== '' || this.icon !== '' || this.customIcon !== '';
    }
  },
  watch: {
    value (val) {
        this.currentValue = val;
    },
    currentValue (val) {
        this.setHalf(val);
    }
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
                [`${prefixCls}`]: !this.showCharacter,
                [`${prefixCls}--chart`]: this.showCharacter,
                [`${prefixCls}--full`]: (!isLast && full) || (isLast && !this.isHalf),
                [`${prefixCls}--half`]: isLast && this.isHalf,
                [`${prefixCls}--zero`]: !full
            }
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
        if (this.disabled) return;
        //value++;
        if (this.isHalf) value -= 0.5;

        if(this.clearable && Math.abs(value - this.currentValue) < 0.01) {
            value = 0;
        }

        this.currentValue = value;
        // this.$emit('input', value);
        // this.$emit('on-change', value);
        // this.dispatch('FormItem', 'on-form-change', value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/base/themes.scss";
@font-face {font-family: "iconfont";
  src: url('iconfont.ttf?t=1539678122604') format('truetype'),
  url('iconfont.svg?t=1539678122604#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.py-rate__star:before { content: "\e82b"; color: #ccc; }
.py-rate__star--half:before, .py-rate__star--full:before { color: #f5a623; }

.py-rate {
  color: $color;
  * {
    box-sizing: border-box;
  }
  .py-rate__star {
    display: inline-block;
    position: relative;
    margin-right: 8px;
  }
  .py-rate__star__content { 
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    &:before {
      color: #ccc;
    }
  }
  .py-rate__star__ext { 
    display: inline-block;
  }
}
</style>