<template>
  <ul
    class="py-menu"
    :class="{
      'vertical-menu': mode === 'vertical',
      'horizontal-menu': mode === 'horizontal',
    }"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'py-menu',
  props: {
    mode: {
      type: String,
      default: 'vertical',
      validator: val => val === 'vertical' || val === 'horizontal',
    },
  },
  provide() {
    return {
      rootMenu: this,
    };
  },
  data() {
    return {
      // 记录被激活的菜单项
      activeItemIndex: null,
      // 记录被激活的子菜单的数组
      activeSubmenuIndex: [],
    };
  },
  mounted() {
    // 监听菜单项点击事件
    this.$on('clickMenuItem', this.handleItemClick);
    // 监听事件冒泡
    this.$on('clickBubble', this.handleBubble);
  },
  methods: {
    handleItemClick(index) {
      this.activeItemIndex = index;
    },
    handleBubble(param) {
      this.activeSubmenuIndex = JSON.parse(param);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";
.py-menu {
  box-sizing: border-box;
  display: flex;
  background-color: #35495e;
  color: #cadde2;
}
.py-menu.vertical-menu {
  flex-direction: column;
  width: 100%;
  padding: 15px 0;
}
.py-menu.horizontal-menu {
  height: 100%;
  padding: 0 15px;
}
</style>
