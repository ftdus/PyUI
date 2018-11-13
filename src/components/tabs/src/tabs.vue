<template>
  <div :class="tabsClass">
    <div class="py-tabs__nav-wrap">
      <div class="py-tabs__nav">
        <!-- 标签页的标题 -->
        <div class="py-tabs__active-bar" :style="barStyle"></div>
        <div
          v-for="(item, index) in navList"
          :key="index"
          ref="tabNav"
          :class="tabCls(item)"
          :tab-nav="index"
          active="0"
          @click="handleChange(index)"
        >
          {{item.label}}
          <py-icon
            class="py-tabs__close"
            :type="closable ? 'close' : ''"
            v-if="closable"
            @click.stop="removeTab(navList, index)">
          </py-icon>
        </div>
      </div>
    </div>
    <!-- 标签页内容板块 -->
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const prefixCls = 'py-tabs';
export default {
  name: 'pyTabs',
  props: {
    value: {
      type: [String],
    },
    type: {
      type: String,
      default: '',
    },
    closable: {
      type: Boolean,
      default: false,
    },
    navBackground: {
      type: String,
      default: '#fff',
    },
  },
  data() {
    return {
      navList: [],
      currentValue: this.value,
      currentIndex: -1,
      currentBarLeft: 0,
      currentBarWidth: 0,
    };
  },
  computed: {
    tabsClass() {
      const classes = [];
      classes.push(`${prefixCls}`);
      if (this.type === 'tab') {
        classes.push(`${prefixCls}--tab`);
      }
      if (this.type === 'card') {
        classes.push(`${prefixCls}--card`);
      }
      if (this.closable) {
        classes.push('is-closable');
      }
      return classes;
    },
    barStyle() {
      return {
        left: `${this.currentBarLeft}px`,
        width: `${this.currentBarWidth}px`,
      };
    },
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue;
    },
    currentValue() {
      // tab发生变化时，更新pane的显示状态
      this.updateStatus();
      this.updateBarPosition();
    },
  },
  mounted() {},
  methods: {
    getTabs() {
      /**
       * 使用$children遍历子组件，得到所有的TabPane组件
       */
      return this.$children.filter(item => item.$options.name === 'PyTabPane');
    },
    tabCls(item) {
      return [
        'py-tabs__navitem',
        {
          'py-tabs__navitem--active': item.name === this.currentValue,
        },
      ];
    },
    handleChange(index) {
      /**
       * 点击tab标题触发
       */
      const nav = this.navList[index];
      const { name } = nav;
      this.currentValue = name;
      this.currentIndex = index;
      this.$emit('input', name);
    },
    updateBarPosition() {
      /**
       * 更新bar的位置
       */
      this.$nextTick(() => {
        this.currentBarLeft = this.$refs.tabNav[this.currentIndex].offsetLeft;
        this.currentBarWidth = this.$refs.tabNav[this.currentIndex].offsetWidth;
      });
    },
    updateStatus() {
      /**
       * 更新pane的显示状态
       */
      const tabs = this.getTabs();
      const that = this;
      tabs.forEach((tab, index) => {
        tab.show = false;
        if (tab.name === that.currentValue) {
          tab.show = true;
          that.currentIndex = index;
        }
        return tab.show;
      });
    },
    updateNav() {
      /**
       * 更新tabs
       */
      this.navList = [];
      const that = this;
      this.getTabs().forEach((pane, index) => {
        that.navList.push({
          label: pane.label,
          name: pane.name || index,
        });
        // 如果没有设置name，默认设置为index
        if (!pane.name) {
          pane.name = index;
        }
        if (index === 0) {
          if (!that.currentValue) {
            that.currentValue = pane.name || index;
            that.$emit('input', that.currentValue);
          }
        }
      });
      this.updateStatus();
      this.updateBarPosition();
    },
    removeTab(navList, index) {
      this.navList.splice(index, 1);
      this.$emit('remove', index);
      if (
        index < this.navList.length &&
        (this.currentIndex === index || this.currentIndex < index)
      ) {
        this.$emit('input', this.navList[index].name);
      } else {
        this.$emit('input', this.navList[this.currentIndex - 1].name);
      }
    },
  },
};
</script>
