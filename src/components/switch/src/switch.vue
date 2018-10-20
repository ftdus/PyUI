
<template>
  <div
    class="py-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    @click="switchValue"
  >
    <input
      class="py-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :id="id"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      @keydown.enter="switchValue"
    >
    <span class="py-switch__core" ref="core" :style="{ 'width': coreWidth + 'px' }">
    </span>
  </div>
</template>

<script>
export default {
  name: 'py-switch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    id: String
  },
  data() {
    return {
      coreWidth: this.width
    };
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue);
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    switchDisabled() {
      console.log('switchDisabled');
      return this.disabled || (this.pyForm || {}).disabled;
    }
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
      this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue() {
      console.log('switchValue')
      !this.switchDisabled && this.handleChange();
    },
  },
  mounted() {
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
};
</script>


<style lang="scss" scoped>
@import "../../../base/themes.scss";

.py-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
}
.py-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
.py-switch__core {
  margin: 0;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color .3s,background-color .3s;
  vertical-align: middle;
}
.py-switch__core:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 100%;
  transition: all .3s;
  width: 16px;
  height: 16px;
  background-color: $bg-color;
}
.py-switch.is-checked .py-switch__core {
  background: $color-active;
}
.py-switch.is-checked .py-switch__core:after {
  left: 100%;
  margin-left: -17px;
}
</style>
