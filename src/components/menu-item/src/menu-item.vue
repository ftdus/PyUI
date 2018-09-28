<template>
  <li
    class="py-menu-item"
    :class="{
      'horizontal-menu': rootMenu.mode === 'horizontal',
      'vertical-menu': rootMenu.mode === 'vertical',
      'active': rootMenu.activeItemIndex === index,
      'disabled': disabled,
    }"
    @click="handleClick(index)"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'py-menu-item',
  inject: ['rootMenu'],
  props: {
    index: {
      type: String,
      required: true,
    },
    route: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(index) {
      // item被禁用时不执行
      if (this.disabled) return;
      // 如果item包含于submenu，则同时向rootMenu和submenu触发事件
      this.$parent.$options._componentTag === 'py-submenu' ? this.$parent.$emit('clickMenuItem', index) : this.rootMenu.$data.activeSubmenuIndex = [];
      this.rootMenu.$emit('clickMenuItem', index);
      this.$emit('clickMenuItem', index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";

$activeBackgroundColor: #41b883;
$activeFontColor: #cadde2;

.py-menu-item {
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
}
.py-menu-item:hover {
  background-color: $activeBackgroundColor;
}
.py-menu-item.active {
  background-color: $activeBackgroundColor;
  color: $activeFontColor;
}
.py-menu-item.horizontal-menu {
  padding: 6px 10px;
}
.py-menu-item.vertical-menu {
  padding: 10px 6px;
}
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background: none !important;
}
</style>
