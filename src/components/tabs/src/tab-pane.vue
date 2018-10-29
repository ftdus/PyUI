<template>
  <div class="py-tab-pane" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PyTabPane',
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: true,
    };
  },
  watch: {
    label() {
      this.updateNav();
    },
  },
  mounted() {
    this.updateNav();
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/base/themes.scss";
</style>

