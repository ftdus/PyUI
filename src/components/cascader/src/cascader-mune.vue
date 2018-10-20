<template>
  <ul class="py-cascader-mune">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'py-cascader-mune',
};
</script>
<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";

.py-cascader-mune {
  padding: 6px 0px;
  min-width: 160px;
  max-height: 204px;

  border: 1px solid $border-color;
}
</style>
