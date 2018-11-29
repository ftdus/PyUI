<template>
  <div class="py-collapse-item" :class="itemClassList">
    <div @click="openContent" class="py-collapse-item__header">
      <div class="py-collapse-item__title">
        <span>{{ title }}</span> <span v-if="icon" v-html="icon"></span>
      </div>
      <py-icon type="right" class="py-collapse-item__arrow" :class="arrowClassList"></py-icon>
    </div>
    <collapse-transition name="before-enter">
      <div v-show="isActive" class="py-collapse-item__content"><slot></slot></div>
    </collapse-transition>
  </div>
</template>

<script>
import collapseTransition from './transition';

// 组件class前缀
const prefixCls = 'py-collapse-item';

export default {
  name: 'PyCollapseItem',
  props: {
    title: {
      type: String,
    },
    identifier: {
      type: [String, Number],
      default() {
        const { _uid: uid } = this;
        return uid;
      },
    },
    icon: {},
  },
  inject: ['collapse'],
  components: {
    collapseTransition,
  },
  data() {
    return {};
  },
  computed: {
    arrowClassList() {
      return [{ [`${prefixCls}__arrow--active`]: this.isActive }];
    },
    itemClassList() {
      return [
        {
          [`${prefixCls}--active`]: this.isActive,
        },
      ];
    },
    isActive() {
      return this.collapse.values.indexOf(this.identifier) > -1;
    },
  },
  methods: {
    openContent() {
      this.$parent.itemHandlerClick(
        {
          identifier: this.identifier,
          isActive: this.isActive,
        },
        this,
      );
    },
  },
};
</script>
