<template>
  <a href="javascript:;" class="py-button">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'py-button',
};
</script>
<style lang="scss" scoped>
@import "../../../base/themes.scss";
.py-button {
  height: $height;
  padding: $padding;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background-color: $bg-color;
  font-size: $font-size;
  color: $color;

  &:hover {
    color: $color-hover;
    border-color: $border-color-hover;
    background-color: $bg-color-hover;
  }

  &:active {
    color: $color-active;
    border-color: $border-color-active;
  }

  &:focus {
    color: $color-hover;
    border-color: $border-color-hover;
  }
}
</style>
