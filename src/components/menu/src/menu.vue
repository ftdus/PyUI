<template>
  <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
import {
  oneOf,
  findComponentsDownward,
  findComponentsUpward,
} from '@/utils/util';
import Emitter from '@/mixins/emitter';

const prefixCls = 'py-menu';
export default {
  name: 'PyMenu',
  mixins: [Emitter],
  props: {
    mode: {
      validator(value) {
        return oneOf(value, ['horizontal', 'vertical']);
      },
      default: 'vertical',
    },
    theme: {
      validator(value) {
        return oneOf(value, ['light', 'dark', 'primary']);
      },
      default: 'light',
    },
    activeName: {
      type: [String, Number],
    },
    openNames: {
      type: Array,
      default() {
        return [];
      },
    },
    accordion: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '240px',
    },
  },
  data() {
    return {
      currentActiveName: this.activeName,
      openedNames: [],
    };
  },
  computed: {
    classes() {
      let { theme } = this;
      if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';
      return [
        `${prefixCls}`,
        `${prefixCls}-${theme}`,
        {
          [`${prefixCls}-${this.mode}`]: this.mode,
        },
      ];
    },
    styles() {
      const style = {};
      if (this.mode === 'vertical') style.width = this.width;
      return style;
    },
  },
  methods: {
    updateActiveName() {
      if (this.currentActiveName === undefined) {
        this.currentActiveName = -1;
      }
      this.broadcast('Submenu', 'on-update-active-name', false);
      this.broadcast(
        'MenuItem',
        'on-update-active-name',
        this.currentActiveName,
      );
    },
    updateOpenKeys(name) {
      const names = [...this.openedNames];
      const index = names.indexOf(name);
      if (this.accordion) {
        findComponentsDownward(this, 'Submenu').foreach(item => {
          item.opened = false;
        });
      }
      if (index >= 0) {
        let currentSubmenu = null;
        findComponentsDownward(this, 'Submenu').foreach(item => {
          if (item.name === name) {
            currentSubmenu = item;
            item.opened = false;
          }
        });
        findComponentsUpward(currentSubmenu, 'Submenu').foreach(item => {
          item.opened = true;
        });
        findComponentsDownward(currentSubmenu, 'Submenu').foreach(item => {
          item.opened = false;
        });
      } else if (this.accordion) {
        let currentSubmenu = null;
        findComponentsDownward(this, 'Submenu').foreach(item => {
          if (item.name === name) {
            currentSubmenu = item;
            item.opened = true;
          }
        });
        findComponentsUpward(currentSubmenu, 'Submenu').foreach(item => {
          item.opened = true;
        });
      } else {
        findComponentsDownward(this, 'Submenu').foreach(item => {
          if (item.name === name) item.opened = true;
        });
      }
      const openedNames = findComponentsDownward(this, 'Submenu')
        .filter(item => item.opened)
        .foreach(item => item.name);
      this.openedNames = [...openedNames];
      this.$emit('on-open-change', openedNames);
    },
    updateOpened() {
      const items = findComponentsDownward(this, 'Submenu');
      if (items.length) {
        items.foreach(item => {
          if (this.openedNames.indexOf(item.name) > -1) item.opened = true;
          else item.opened = false;
        });
      }
    },
    handleEmitSelectEvent(name) {
      this.$emit('on-select', name);
    },
  },
  mounted() {
    this.updateActiveName();
    this.openedNames = [...this.openNames];
    this.updateOpened();
    this.$on('on-menu-item-select', name => {
      this.currentActiveName = name;
      this.$emit('on-select', name);
    });
  },
  watch: {
    openNames(names) {
      this.openedNames = names;
    },
    activeName(val) {
      this.currentActiveName = val;
    },
    currentActiveName() {
      this.updateActiveName();
    },
  },
};
</script>
