<template>
  <li class="py-cascader-mune-item py-cascader-mune-item:hover"
    :class="isDisable ? 'py-cascader-mune-item--disable' : isActive ?
      'py-cascader-mune-item--active' : ''">
      {{label}}
    <i class="py-icon iconfont icon-return"></i>
  </li>
</template>
<script>
export default {
  name: 'py-cascader-mune-item',
  props: {
    isDisable: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    isActive() {
      // TODO: 待完成
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";
// @import "./cascader.scss";

$disable-color: #c0c4cc;

.py-cascader-mune-item {
  padding: 8px 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $color;
  height: 34px;
  line-height: 1.5;
  box-sizing: border-box;
  font-size: 14px;

  &:hover {
    background-color: #f5f7fa;
  }

  &.py-cascader-mune-item--disable {
    color: $disable-color;
    background-color: #fff;
    cursor: not-allowed;
  }

  &.py-cascader-mune-item--active {
    color: $color-active;
  }

  .icon-return {
    transform: rotate(-180deg);
    float: right;
    color: $disable-color;
  }
}
</style>

