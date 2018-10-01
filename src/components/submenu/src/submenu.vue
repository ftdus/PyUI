<template>
  <li
    class="py-submenu"
    @mouseenter="mouseEnterCallback"
    @mouseleave="mouseLeaveCallback"
  >
    <!--子菜单标题-->
    <div
      ref="title"
      class="py-submenu--title"
      :class="{
        'horizontal-menu': rootMenu.mode === 'horizontal',
        'vertical-menu': rootMenu.mode === 'vertical',
        'py-submenu--title--choosen': rootMenu.activeSubmenuIndex.indexOf(index) !== -1,
        'disabled': disabled,
      }"
      @click="clickCallback"
    >
      <slot name="title"></slot>
    </div>
    <!--子菜单列表-->
    <transition name="submenu-list">
      <ul
        v-show="!collapse"
        ref="list"
        class="py-submenu--ul"
        :class="{
          'horizontal-menu': rootMenu.mode === 'horizontal',
          'vertical-menu': rootMenu.mode === 'vertical',
        }"
      >
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'py-submenu',
  // 注入根菜单组件
  inject: ['rootMenu'],
  props: {
    index: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapse: true,
    };
  },
  computed: {
    parentMenuName() {
      return this.$parent.$options._componentTag;
    },
  },
  mounted() {
    // 监听菜单项点击事件
    this.$on('clickMenuItem', this.handleItemClick);
    // 监听事件冒泡
    this.$on('clickBubble', this.handleBubble);
    // 根菜单为水平时，动态计算定位
    if (this.rootMenu.mode === 'horizontal') {
      this.$watch('collapse', this.parentMenuName === 'py-menu' ? this.singlePosition : this.multiplePosition);
    }
    // this.$watch('collapse', this.handleCollapseChange);
  },
  methods: {
    mouseEnterCallback() {
      if (this.rootMenu.mode === 'horizontal' && !this.disabled) this.collapse = false;
    },
    mouseLeaveCallback() {
      if (this.rootMenu.mode === 'horizontal' && !this.disabled) this.collapse = true;
    },
    clickCallback() {
      if (this.rootMenu.mode === 'vertical' && !this.disabled) this.collapse = !this.collapse;
    },
    // 处理子菜单项的点击
    handleItemClick() {
      const arr = [];
      arr.push(this.index);
      // 向父组件触发事件
      this.$parent.$emit('clickBubble', JSON.stringify(arr));
    },
    // 处理子菜单的事件冒泡
    handleBubble(param) {
      const arr = JSON.parse(param);
      arr.push(this.index);
      this.$parent.$emit('clickBubble', JSON.stringify(arr));
    },
    // 单级水平子菜单时动态定位
    singlePosition(val) {
      if (val) return;
      this.$nextTick(() => {
        this.$refs.list.style.top = `${4 + this.$refs.title.offsetHeight}px`;
      });
    },
    // 多级水平子菜单时动态定位
    multiplePosition(val) {
      if (val) return;
      this.$nextTick(() => {
        this.$refs.list.style.left = `${2 + this.$refs.title.offsetWidth}px`;
        this.$refs.list.style.top = '0px';
      });
    },
    // collapse动画
    // handleCollapseChange(value) {
    //   if (value) {
    //     // 折叠
    //     this.$nextTick(() => {
    //       this.$refs.list.style.height = `0px`;
    //     });
    //   } else {
    //     // 展开
    //     this.$refs.list.style.height = 'auto';
    //     const targetHeight = this.$refs.list.getBoundingClientRect().height;
    //     this.$refs.list.style.height = '0px';
    //     this.$nextTick(() => {
    //       this.$refs.list.style.height = `${targetHeight}px`;
    //     });
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";

$submenuBackgroundColor: #54858c;
$activeBackgroundColor: #41b883;
$activeFontColor: #41b883;

.py-submenu {
  position: relative;
}

/*标题的样式*/
.py-submenu--title {
  box-sizing: border-box;
}
.py-submenu--title:hover {
  background-color: $activeBackgroundColor;
}
.py-submenu--title--choosen {
  color: $activeFontColor;
  border-bottom: 2px solid $activeFontColor;
}
.py-submenu--title.horizontal-menu {
  padding: 6px 10px;
}
.py-submenu--title.vertical-menu {
  padding: 10px 6px;
}
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background: none !important;
}

/*子菜单的样式*/
.py-submenu--ul {
  background-color: $submenuBackgroundColor;
  /*overflow: hidden;*/
}
.py-submenu--ul.horizontal-menu {
  position: absolute;
  z-index: 999;
}

/*子菜单的动画*/
.submenu-list-enter, .submenu-list-leave-to {
  opacity: 0;
}
.submenu-list-enter-to, .submenu-list-leave {
  opacity: 1;
}
.submenu-list-enter-active, .submenu-list-leave-active {
  transition: all .2s ease;
}
</style>
