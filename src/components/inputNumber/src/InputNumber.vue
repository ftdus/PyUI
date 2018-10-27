<template>
  <div  @dragstart.prevent
    :class = "[
      'py-input-number',
      inputNumberSize ? 'py-input-number-'+ inputNumberSize:'',
      {'is-disabled':inputNumberDisabled},
      {'is-without-controls':!controls},
      {'is-controls-right':controlsAtRight}
  ]">
	  <span
      class="py-input-number__decrease"
      role="button"
      @click="decrease"
      v-if="controls"
      :class="{'is-disabled': minDisabled}"
      @keydown.enter="decrease">
      <i class="iconfont" :class="`icon-${controlsAtRight ? 'arrow-down' : 'minus'}`"></i>
    </span>
    <span
      class="py-input-number__increase"
      role="button"
      @click="increase"
      v-if="controls"
      :class="{'is-disabled': maxDisabled}"
      @keydown.enter="increase">
      <i class="iconfont" :class="`icon-${controlsAtRight ? 'arrow-up' : 'plus'}`"></i>
    </span> 
    <input
      type="text"
      ref="input"
      :value="currentInputValue"
      :disabled="inputNumberDisabled"
      :size="inputNumberSize"
      :max="max"
      :min="min"
      :name="name"
      :label="label"
      @keydown.up.native.prevent="increase"
      @keydown.down.native.prevent="decrease"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleInputChange"
      class="py-input-del">
    </input>
  </div>
</template>


<style lang="scss" scoped>
@import "@/base/themes.scss";
.py-input-number{
  position: relative;
  display: inline-block;
  width: 200px;
  line-height: 38px;
  padding-left:20px;
  margin-left: 20px;
  span{
    display:inline-block;
    text-align:center;
    i{
      display:inline-block;
      width:13px;
      height:13px;
    }
  }
  .is-disabled{
    color: #c0c4cc !important;
    cursor: not-allowed !important;
  }
  .py-input-number__decrease{
  	position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height:auto;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 13px;
    border-right: 1px solid #dcdfe6;
    left:21px;
  }
  .py-input-del{
  	width:100%;
  	position: relative;
    font-size: 14px;
    height:40px;
    line-height:40px;
    display:block;
    padding-left:50px;
    padding-right:50px;
    text-align:center;
    border-radius:4px;
    border: 1px solid #ddd;
    outline: none;   
  }
  .py-input-number__increase{
  	position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 13px;
    border-left: 1px solid #dcdfe6;
    right:1px;
  }
}
.is-disabled{
  input{
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
  }
  span{
    background-color: #f5f7fa !important;
    border-color: #e4e7ed !important;
    cursor: not-allowed !important;
  }
}
.py-input-number-medium{
  width: 200px;
  line-height: 34px;
  .py-input-del{
    height:36px;
  }
  span{
    width:36px;
    font-size:14px;
  }
}
.py-input-number-small{
  width: 130px;
  line-height: 30px;
  .py-input-del{
    height:32px;
  }
  span{
    width:32px;
    font-size:13px;
  }
}
.py-input-number-mini{
  width: 130px;
  line-height: 26px;
  .py-input-del{
    height:28px;
  }
  span{
    width:28px;
    font-size:12px;
  }
}
.is-controls-right{
  .py-input-number__increase{
    height: auto;
    line-height: 19px;
  }
  .py-input-number__decrease{
    right: 1px;
    bottom: 1px;
    top: auto;
    left: auto;
    border-right: none;
    border-left: 1px solid #dcdfe6;
    border-radius: 0 0 4px 0;
  }
}
</style>

<script>
import PyInput from "@/components/input/index";	
export default {
  name:'py-input-number',
  created () {

  },
  data () {
  	return {
      currentValue: 0
  	}
  },
  components: {
  	PyInput
  },
  props: {
  	step: { 
      type: Number ,
      default: 1
    },
  	max: { 
      type: Number, 
      default: Infinity
    },
  	min: { 
      type: Number, 
      default: -Infinity
    },
  	value: {},
  	disabled: Boolean,
  	size:String,
  	controls: { 
      type: Boolean,
      default:true
    },
  	controlsPosition: { 
      type: String,
      default:''
    },
  	name:String,
  	size:String,
  	label:String,
  	precision: {
      type:Number,
      validator(val) { 
        return val >= 0 && val === parseInt(val,10)
      }
    },
  },
  watch: {
  	value: {
      immediate: true,
      handler(value) {
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) {
            return;
          }
          if (this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision);
          }
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.$emit('input', newVal);
      }
    },
  },
  computed: {
  	minDisabled() {
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled() {
      return this._increase(this.value, this.step) > this.max;
    },
    numPrecision() {
      const { value, step, getPrecision, precision } = this;
      const stepPrecision = getPrecision(step);
      if (precision !== undefined) {
        if (stepPrecision > precision) {
          console.warn('精度不应小于步数的小数点!');
        }
        return precision;
      } else {
        return Math.max(getPrecision(value), stepPrecision);
      }
    },
    controlsAtRight() {
      return this.controls && this.controlsPosition === 'right';
    },
    _pyFormItemSize() {
      return (this.pyFormItem || {}).pyFormItemSize;
    },
    inputNumberSize() {
      return this.size ;
    },
    inputNumberDisabled() {
      return this.disabled ;
    },
    currentInputValue() {
      const currentValue = this.currentValue;
      if (typeof currentValue === 'number' && this.precision !== undefined) {
        return currentValue.toFixed(this.precision);
      } else {
        return currentValue;
      }
    }
  },
  methods: {
    toPrecision(num, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(parseFloat(Number(num).toFixed(precision)));
    },
    getPrecision(value) {
      if (value === undefined) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf('.');
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    _increase(val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue;
      const precisionFactor = Math.pow(10, this.numPrecision);
      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
    },
    _decrease(val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue;
      const precisionFactor = Math.pow(10, this.numPrecision);
      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
    },
    increase() {
      if (this.inputNumberDisabled || this.maxDisabled) return;
      const value = this.value || 0;
      const newVal = this._increase(value, this.step);
      this.setCurrentValue(newVal);
    },
    decrease() {
      if (this.inputNumberDisabled || this.minDisabled) return;
      const value = this.value || 0;
      const newVal = this._decrease(value, this.step);
      this.setCurrentValue(newVal);
    },
    handleBlur(event) {
      this.$emit('blur', event);
      this.$refs.input.setCurrentValue(this.currentInputValue);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    setCurrentValue(newVal) {
      const oldVal = this.currentValue;
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) {
        this.$refs.input.setCurrentValue(this.currentInputValue);
        return;
      }
      this.$emit('input', newVal);
      this.$emit('change', newVal, oldVal);
      this.currentValue = newVal;
    },
    handleInputChange(value) {
      const newVal = value === '' ? undefined : Number(value);
      if (!(newVal) || value === '') {
        this.setCurrentValue(newVal);
      }
    },
  },
  mounted() {
    const innerInput = this.$refs.input;
    innerInput.setAttribute('role', 'spinbutton');
    innerInput.setAttribute('aria-valuemax', this.max);
    innerInput.setAttribute('aria-valuemin', this.min);
    innerInput.setAttribute('aria-valuenow', this.currentValue);
    innerInput.setAttribute('aria-disabled', this.inputNumberDisabled);
  },
  updated() {
    if (!this.$refs || !this.$refs.input) return;
    const innerInput = this.$refs.input;
    innerInput.setAttribute('aria-valuenow', this.currentValue);
  },
};
</script>

