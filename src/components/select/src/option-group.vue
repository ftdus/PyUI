<template>
  <li class="py-select__dropdown-group">
    <p class="py-select__dropdown-group-label">{{ label }}</p>
    <ul class="py-select__dropdown-group-list">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'py-option-group',
  data() {
    return {};
  },
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
