<template>
  <li
    v-show="show !== false"
    class="py-select__dropdown--item"
    :class="{
      selected: selected,
      disabled: disabled || multipleDisabled,
      actived: actived,
    }"
    @click="selectDropDownItem($event);"
  >
    <slot>{{ label }}</slot>
    <i v-show="option.selected && multiple" class="py-select__selected pyui-icons py-icon-check">
    </i>
  </li>
</template>
<script>
export default {
  name: 'py-option',
  inject: ['$select'],
  data() {
    return {
      hitState: false,
      option: {},
      show: true,
      actived: false,
      index: this.$select.$children.indexOf(this),
    };
  },
  computed: {
    multipleDisabled() {
      let multipleDisabled = false;
      if (
        this.$select.multiple &&
        this.$select.multipleLimit > 0 &&
        this.$select.selectValue.length >= this.$select.multipleLimit &&
        !this.selected
      ) {
        multipleDisabled = true;
      }
      return multipleDisabled;
    },
    selected() {
      let selected = false;
      if (this.$select.multiple) {
        this.$select.selectValue.forEach(option => {
          if (option.optionIndex === this.index) {
            selected = true;
          }
        });
      } else {
        selected =
          this.$select.selectValue.optionIndex === this.index &&
          this.$select.selectValue.value === this.value &&
          this.$select.selectValue.label === this.label;
      }
      return selected;
    },
  },
  props: {
    value: {
      required: true,
    },
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
    created: Boolean,
  },
  methods: {
    selectDropDownItem(e) {
      this.$select.selectDropDownItem(this, e);
    },
  },
};
</script>
