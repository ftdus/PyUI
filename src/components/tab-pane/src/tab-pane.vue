<template>
  <div :class="classes" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-tab-pane';

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
  computed: {
    classes() {
      return [`${prefixCls}`];
    },
  },
};
</script>
