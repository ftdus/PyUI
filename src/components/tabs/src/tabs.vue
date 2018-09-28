<template>
  <div :class="tabsClass">
    <div class="py-tabs__nav-wrap">
      <div class="py-tabs__nav" :style="navBg">
        <!-- 标签页的标题 -->
        <div class="py-tabs__active-bar" :style="barStyle"></div>
        <div
          v-for="(item, index) in navList" :key="index"
          ref="tabNav"
          :class="tabCls(item)"
          :tab-nav="index"
          active="0"
          @click="handleChange(index)">
          {{item.label}}
          <i class="py-icon iconfont"
            :class="{'icon-delete': closable}"
            v-if="closable"
            @click.stop="removeTab(navList, index)">
          </i>
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
      default: '#fff'
    }
  },
  data() {
    return {
      navList: [],
      currentValue: this.value,
      currentIndex: -1,
      currentBarLeft: 0,
      currentBarWidth: 0
    };
  },
  computed: {
    tabsClass() {
      let classes = [];
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
        left: this.currentBarLeft + 'px',
        width: this.currentBarWidth + 'px'
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
  mounted() {
  },
  methods: {
    getTabs() {
      /**
       * 使用$children遍历子组件，得到所有的TabPane组件
       */
      return this.$children.filter((item) => {
        return item.$options.name === 'PyTabPane';
      });
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
      const name = nav.name;
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
      const [that] = [this];
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
    removeTab (navList, index) {
      this.navList.splice(index, 1)
      this.$emit('remove', index)
      if (index < this.navList.length && (this.currentIndex === index || this.currentIndex < index)) {
        this.$emit('input', this.navList[index].name)
      } else {
        this.$emit('input', this.navList[this.currentIndex - 1].name)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/base/themes.scss";
.py-tabs{
  .py-tabs__nav-wrap{
    position: relative;
    padding: 0;
    margin: 0 0 15px;
    .py-tabs__nav{
      position: relative;
      overflow: hidden;
      &:after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        z-index: -1;
        background: $border-color;
      }
      .py-tabs__navitem{
        float: left;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        font-weight: 500;
        color: $color;
        box-sizing: border-box;
        overflow: hidden;
        &:hover{
          color: $color-active;
          cursor: pointer;
        }
        &:nth-child(2){
          padding-left: 0;
        }
        &.py-tabs__navitem--active{
          color: $color-active;
        }
      }
    }
  }
  /* 选项卡样式 */
  &.py-tabs--tab{
    .py-tabs__nav-wrap{
      .py-tabs__nav{
        &:after{
          height: 1px;
        }
        .py-tabs__navitem{
          border: 1px solid $border-color;
          border-right: 0;
          &:nth-child(2){
            border-top-left-radius: 4px;
            padding-left: 20px;
          }
          &:last-child{
            border-top-right-radius: 4px;
            border-right: 1px solid $border-color;
          }
        }
      }
    }
    .py-tabs__active-bar{
      height: 1px;
      background: #fff;
    }
  }
  /* 卡片化样式 */
  &.py-tabs--card{
    border: 1px solid $border-color;
    box-shadow: 0 2px 10px 0 $border-color;
    .tabs-content{
      padding: 0 20px 20px;
    }
    .py-tabs__nav-wrap{
      .py-tabs__nav{
        &:after{
          height: 1px;
        }
        .py-tabs__navitem{
          border-right: 1px solid $border-color;
          &.py-tabs__navitem--active{
            border-bottom: 1px solid #fff;
          }
          &:nth-child(2){
            border-top-left-radius: 4px;
            padding-left: 20px;
          }
          &:last-child{
            border-top-right-radius: 4px;
            border-right: 1px solid $border-color;
          }
        }
      }
    }
    .py-tabs__active-bar{
      display: none;
      height: 1px;
      background: #fff;
    }
  }
  /* 可关闭样式 */
  &.is-closable{
    .py-tabs__nav-wrap{
      .py-tabs__nav{
        .py-tabs__navitem{
          &:hover{
            .py-icon{
              width: 20px;
            }
          }
          &.py-tabs__navitem--active{
            border-bottom: 1px solid #fff;
            .py-icon{
              width: 20px;
            }
          }
        }
      }
    }
  }
}
.py-tabs__active-bar{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: $border-color-active;
  z-index: 1;
  transition: all 0.3s;
}
.py-icon{
  position: relative;
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  line-height: 1;
  font-size: 14px;
  width: 0;
  overflow: hidden;
  top: 1px;
  margin-left: 5px;
  transition: all 0.3s;
}
</style>
