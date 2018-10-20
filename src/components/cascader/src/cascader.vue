<template>
  <div class="py-cascader">
    <div class="input-group" @click="toggleMenu">
      <input ref="cascaderInput" class="input-group__input"
        :class="isFocus ? 'input-group__input--focus' : 'input-group__input--unfocus'"
        :readonly="isReadonly" :placeholder="placeholder"
        @focus="focusInput" @blur="blurInput"/>
      <span class="input-group__icon-wrapper">
        <i class="py-icon iconfont icon-return"
          :class="isShowMenu ? 'icon-return--up' : 'icon-return--down'"></i>
      </span>
    </div>
    <!-- 级联选择弹出区域 -->
    <div class="menu-group" v-show="isShowMenu" @click="clickMenu">
        <py-cascader-mune>
          <py-cascader-mune-item v-for="item in options" :key="item.value"
            :isDisable="item.disabled" :label="item.label">
          </py-cascader-mune-item>
        </py-cascader-mune>
    </div>
  </div>
</template>
<script>
import PYCascaderMune from './cascader-mune.vue';
import PYCascaderMuneItem from './cascader-mune-item.vue';

let blurTimer;

export default {
  name: 'py-cascader',
  components: {
    'py-cascader-mune': PYCascaderMune,
    'py-cascader-mune-item': PYCascaderMuneItem,
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isFocus: false,
      isReadonly: true,
      isShowMenu: false,
      selectedData: [],
    };
  },
  methods: {
    focusInput() {
      this.isFocus = true;
    },
    blurInput() {
      this.isFocus = false;
      blurTimer = setTimeout(() => {
        this.isShowMenu = false;
        blurTimer = null;
      }, 300);
    },
    clickMenu() {
      this.$refs.cascaderInput.focus();
      if (blurTimer) {
        clearTimeout(blurTimer);
        blurTimer = null;
      }
    },
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";

.py-cascader {
  display: inline-block;
  min-width: 222px;
  position: relative;
}
.input-group {
  &__input {
    width: 100%;
    height: 40px;

    padding: 0px 30px 0px 15px;
    border-radius: $border-radius;
    border: 1px solid;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    background: $bg-color;

    line-height: 40px;
    &--unfocus {
      border-color: $border-color;
    }
    &--focus {
      border-color: $border-color-active;
    }
  }

  &__icon-wrapper {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    pointer-events: none;
    .icon-return {
      font-size: 14px;
      height: 100%;
      line-height: 40px;
      transition: transform .3s;
      &--down {
        transform: rotate(-90deg);
      }
      &--up {
        transform: rotate(90deg);
      }
    }
  }
}
.menu-group {
  position: absolute;
  top: 50px;
  left: 0px;

  display: flex;

  border: 1px solid #e4e7ed;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
