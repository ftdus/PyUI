<template>
  <div class="py-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="py-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="py-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PyCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/base/themes.scss';

$prefixCls: 'py-card';
$card-box-shadow: 'rgba(0,0,0,.1)';
$element-separator: '__';
$modifier-separator: '-';
.#{$prefixCls} {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background-color: $bg-color;
  overflow: hidden;
  color: $color;
  transition: 0.3s;
  &#{$element-separator}header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
  &#{$element-separator}body {
    padding: 20px;
  }
  &.is#{$modifier-separator}always#{$modifier-separator}shadow {
    box-shadow: 0 2px 12px 0 #{$card-box-shadow};
  }
  &.is#{$modifier-separator}hover#{$modifier-separator}shadow {
    &:hover {
      box-shadow: 0 2px 12px 0 #{$card-box-shadow};
    }
    &:hover {
      box-shadow: 0 2px 12px 0 #{$card-box-shadow};
    }
  }
}
</style>
