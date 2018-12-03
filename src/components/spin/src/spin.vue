<template>
  <transition :name="transitionName">
    <div class="py-spin" :class="spinClass" :style="{ position: fix ? 'absolute' : 'fixed' }">
      <div class="py-spin__centered" v-if="this.$slots.default"><slot></slot></div>
      <div class="py-spin__centered" v-else>
        <div class="py-spin__loadAnimate"><span></span> <span></span></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'py-spin',
  props: {
    spinClass: {
      type: String,
    },
    transitionName: {
      type: String,
      default: 'spin-fade',
    },
    fix: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
