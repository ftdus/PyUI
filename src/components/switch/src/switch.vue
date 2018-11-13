
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
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 40,
    },
    activeIconClass: {
      type: String,
      default: '',
    },
    inactiveIconClass: {
      type: String,
      default: '',
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    id: String,
  },
  data() {
    return {
      coreWidth: this.width,
    };
  },
  created() {
    if (![this.activeValue, this.inactiveValue].includes(this.value)) {
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
    },
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    },
  },
  methods: {
    handleChange() {
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
      this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    },
    setBackgroundColor() {
      const newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue() {
      console.log('switchValue');
      if (!this.switchDisabled) {
        this.handleChange();
      }
    },
  },
  mounted() {
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  },
};
</script>
