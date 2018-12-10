<template>
  <label
    v-if="!isBtn"
    :class="[
      classes,
      radioDisabled ? `${classes}--disabled` : `${classes}--enabled`,
      { [`${classes}--selected`]: radioValue === label },
    ]"
    @click="selectHandler"
  >
    <span :class="`${classes}__radio`"> <span :class="`${classes}__inner`"></span> </span>
    <span :class="`${classes}__label`"> <slot></slot> </span>
  </label>
  <label
    v-else
    :class="[
      classes,
      { [`${classes}--disabled-selected`]: radioDisabled && radioValue === label },
      { [`${classes}--disabled-unselected`]: radioDisabled && radioValue !== label },
      { [`${classes}--enabled-selected`]: !radioDisabled && radioValue === label },
      { [`${classes}--enabled-unselected`]: !radioDisabled && radioValue !== label },
      `${classes}--${radioSize}`,
    ]"
    @click="selectHandler"
  >
    <div :class="`${classes}__label`"><slot></slot></div>
  </label>
</template>
<script>
// 组件class前缀
const prefixCls = 'py-radio';
const prefixBtnCls = 'py-radio-btn';

export default {
  name: 'PyRadio',
  props: {
    label: {},
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    // 选择是否使用按钮样式 radio | button
    type: {
      type: String,
      default: '',
    },
    // 当type为button时有用，'' / medium / small / mini
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    radioSize() {
      if (!this.isBtn) {
        return '';
      }
      // 如果在group中，则统一使用group的size
      if (this.groupParent) {
        return this.groupParent.size;
      }

      return this.size;
    },
    isBtn() {
      // 如果在gorup中，则以group配置为准
      if (this.groupParent && this.groupParent.type === 'button') {
        return true;
      }

      if (this.type === 'button') {
        return true;
      }

      return false;
    },
    classes() {
      if (this.isBtn) {
        return `${prefixBtnCls}`;
      }
      return `${prefixCls}`;
    },
    radioDisabled() {
      // 如果处于group中且gourp的disabled为true，则全体radio disable
      if (this.groupParent && this.groupParent.disabled) {
        return this.groupParent.disabled;
      }
      return this.disabled;
    },
    radioValue() {
      if (this.groupParent) {
        return this.groupParent.value;
      }
      return this.value;
    },
    /* 若处于group中，返回group组件实例引用 */
    groupParent() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'PyRadioGroup') {
          parent = parent.$parent;
        } else {
          // this.radioGroup = parent;
          return parent;
          // return true;
        }
      }
      return null;
    },
  },
  methods: {
    selectHandler() {
      if (this.radioDisabled) return;

      this.$emit('change', this.label);

      if (!this.groupParent) {
        this.$emit('input', this.label);
      } else {
        // 处于group中，由 group 修改 label
        this.groupParent.$emit('update-group', this.label);
      }
    },
  },
};
</script>
