<template>
  <li
    v-show="show !== false"
    class="py-select__dropdown--item"
    :class="{
      'selected': selected,
      'disabled': disabled,
      'actived': index === activedIndex,
    }"
    @click="selectDropDownItem($event)">
    <slot>{{ label }}</slot>
    <i
      v-show="option.selected && multiple"
      class="py-select__selected pyui-icons py-icon-check">
    </i>
  </li>
</template>
<script>
export default {
  name: 'py-option',
  inject: ['$select'],
  data() {
    return {
      index: this.$select.$children.indexOf(this),
      groupDisabled: false,
      visible: true,
      hitState: false,
      option: {},
      show: true,
    };
  },
  mounted() {},
  computed: {
    activedIndex() {
      return this.$select.activedIndex;
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
        selected = this.$select.selectValue.optionIndex === this.index;
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
<style lang="scss">
</style>
