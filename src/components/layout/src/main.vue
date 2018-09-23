<template>
  <section class="py-layout" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.py-layout {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}

.py-layout .is-vertical {
    flex-direction: column;
}
</style>


<script>
export default {
  name: "PyLayout",
  componentName: "PyLayout",
  props: {
    direction: String
  },

  computed: {
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === "py-header" || tag === "py-footer";
          })
        : false;
    }
  }
};
</script>
