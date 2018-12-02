<template>
  <div class="py-collapse"><slot></slot></div>
</template>

<script>
// 组件class前缀
// const prefixCls = 'py-collapse';

export default {
  name: 'PyCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Array],
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      values: [].concat(this.value),
    };
  },
  provide() {
    return {
      collapse: this,
    };
  },
  watch: {
    value(newValue) {
      this.values = [].concat(newValue);
    },
  },
  methods: {
    itemHandlerClick(data) {
      const { identifier } = data;
      if (this.accordion) {
        if (this.values.indexOf(identifier) > -1) {
          this.values = [];
        } else {
          this.values = [].concat(identifier);
        }
      } else {
        const values = this.values.slice(0);
        const index = values.indexOf(identifier);
        if (index > -1) {
          values.splice(index, 1);
        } else {
          values.push(identifier);
        }
        this.values = values;
      }
      this.$emit('change', this.values);
    },
  },
};
</script>
