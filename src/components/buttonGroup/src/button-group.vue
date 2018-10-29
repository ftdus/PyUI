<style lang='scss' scoped>
@mixin btnGroup {
  &:not(:first-child):not(:last-child){
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5);
  }
  &:last-child{
    border-left-color: hsla(0,0%,100%,.5);
  }
  &:hover {
    border-right-color: hsla(0,0%,100%,.5);
  }
}
$prefixCls: 'py-button';
$element-separator: '__';
$modifier-separator: '--';

.#{$prefixCls}-group {
  .#{$prefixCls} {
    float: left;
    position: relative;
    white-space: nowrap;
    &:hover {
      z-index: 1;
    }
    &:first-child {
      border-top-right-radius: 0%;
      border-bottom-right-radius: 0%;
    }
    &:last-child {
      border-top-left-radius: 0%;
      border-bottom-left-radius: 0%;
      margin-left: 0;
    }
    &:not(:last-child) {
      margin-right: -1px;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &#{$modifier-separator}primary{
      @include btnGroup();
    }
    &#{$modifier-separator}success {
      @include btnGroup();
    }
    &#{$modifier-separator}warning {
      @include btnGroup();
    }
    &#{$modifier-separator}error {
      @include btnGroup();
    }
  }
}
</style>
<template>
  <div :class='classes' class="clearfix">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'py-button-group';

export default {
  name: prefixCls,
  data() {
    return {

    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
      ];
    },
  },
};

</script>

