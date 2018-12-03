<template>
  <div
    :class="classes"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    v-click-outside="handleClose"
  >
    <div :class="[prefixCls + '-rel']" ref="reference" @click="handleClick"><slot></slot></div>
    <transition name="fade">
      <div
        :class="popperClasses"
        :style="styles"
        ref="popper"
        v-show="visible"
        @click="handleTransferClick"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        :data-transfer="transfer"
        v-transfer-dom
      >
        <div :class="[prefixCls + '-content']">
          <div :class="[prefixCls + '-arrow']"></div>
          <div :class="[prefixCls + '-inner']" v-if="confirm">
            <div :class="[prefixCls + '-body']">
              <i class="ivu-icon ivu-icon-ios-help-circle"></i>
              <div :class="[prefixCls + '-body-message']">
                <slot name="title">{{ title }}</slot>
              </div>
            </div>
            <div :class="[prefixCls + '-footer']">
              <py-button type="text" size="small" @click.native="cancel">
                {{ localeCancelText }}
              </py-button>
              <py-button type="primary" size="small" @click.native="ok">
                {{ localeOkText }}
              </py-button>
            </div>
          </div>
          <div :class="[prefixCls + '-inner']" v-if="!confirm">
            <div
              :class="[prefixCls + '-title']"
              :style="contentPaddingStyle"
              v-if="showTitle"
              ref="title"
            >
              <slot name="title">
                <div :class="[prefixCls + '-title-inner']">{{ title }}</div>
              </slot>
            </div>
            <div :class="[prefixCls + '-body']" :style="contentPaddingStyle">
              <div :class="contentClasses">
                <slot name="content">
                  <div :class="[prefixCls + '-body-content-inner']">{{ content }}</div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { directive as clickOutside } from 'v-click-outside-x';
import Popper from '../mixins/popper';
import PyButton from '../../button';
import TransferDom from '../directives/transfer-dom';
import { transferIndex, transferIncrease } from '../utils/transfer-queue';

const prefixCls = 'py-poptip';
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
export default {
  name: 'PyPoptip',

  mixins: [Popper],

  directives: { clickOutside, TransferDom },

  components: { PyButton },

  props: {
    placement: {
      validator: value =>
        [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
        ].indexOf(value) > -1,
      default: 'top',
    },
    trigger: {
      type: String,
      validator: value => ['click', 'hover'].some(val => val === value),
    },
    title: {
      type: [String, Number],
    },
    content: {
      type: [String, Number],
      default: '',
    },
    width: {
      type: [String, Number],
    },
    confirm: {
      type: Boolean,
      default: false,
    },
    okText: {
      type: String,
    },
    cancelText: {
      type: String,
    },
    transfer: {
      type: Boolean,
      default: false,
    },
    popperClass: {
      type: String,
    },
    wordWrap: {
      type: Boolean,
      default: false,
    },
    // default by css: 8px 16px
    padding: {
      type: String,
    },
  },

  data() {
    return {
      prefixCls,
      showTitle: true,
      disableCloseUnderTransfer: false, // transfer 模式下，点击 slot 也会触发关闭
      tIndex: this.handleGetIndex(),
    };
  },

  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-confirm`]: this.confirm,
        },
      ];
    },
    popperClasses() {
      return [
        `${prefixCls}-popper`,
        {
          [`${prefixCls}-confirm`]: this.transfer && this.confirm,
          [`${this.popperClass}`]: !!this.popperClass,
        },
      ];
    },
    styles() {
      const style = {};
      if (this.width) {
        style.width = `${this.width}px`;
      }
      if (this.transfer) style['z-index'] = 1060 + this.tIndex;
      return style;
    },
    localeOkText() {
      if (this.okText === undefined) {
        return '确定';
      }
      return this.okText;
    },
    localeCancelText() {
      if (this.cancelText === undefined) {
        return '取消';
      }
      return this.cancelText;
    },
    contentClasses() {
      return [
        `${prefixCls}-body-content`,
        {
          [`${prefixCls}-body-content-word-wrap`]: this.wordWrap,
        },
      ];
    },
    contentPaddingStyle() {
      const styles = {};
      if (this.padding !== '') styles.padding = this.padding;
      return styles;
    },
  },

  methods: {
    handleClick() {
      if (this.confirm) {
        this.visible = !this.visible;
        return true;
      }
      if (this.trigger !== 'click') {
        return false;
      }
      this.visible = !this.visible;
    },
    handleTransferClick() {
      if (this.transfer) this.disableCloseUnderTransfer = true;
    },
    handleClose() {
      if (this.disableCloseUnderTransfer) {
        this.disableCloseUnderTransfer = false;
        return false;
      }
      if (this.confirm) {
        this.visible = false;
        return true;
      }
      if (this.trigger !== 'click') {
        return false;
      }
      this.visible = false;
    },

    handleMouseenter() {
      if (this.trigger !== 'hover' || this.confirm) {
        return false;
      }
      if (this.enterTimer) clearTimeout(this.enterTimer);
      this.enterTimer = setTimeout(() => {
        this.visible = true;
      }, 100);
    },
    handleMouseleave() {
      if (this.trigger !== 'hover' || this.confirm) {
        return false;
      }
      if (this.enterTimer) {
        clearTimeout(this.enterTimer);
        this.enterTimer = setTimeout(() => {
          this.visible = false;
        }, 100);
      }
    },
    cancel() {
      this.visible = false;
      this.$emit('on-cancel');
    },
    ok() {
      this.visible = false;
      this.$emit('on-ok');
    },
    getInputChildren() {
      const $input = this.$refs.reference.querySelectorAll('input');
      const $textarea = this.$refs.reference.querySelectorAll('textarea');
      let $children = null;

      if ($input.length) {
        $children = $input[0];
      } else if ($textarea.length) {
        $children = $textarea[0];
      }

      return $children;
    },
    handleGetIndex() {
      transferIncrease();
      return transferIndex;
    },
    handleIndexIncrease() {
      this.tIndex = this.handleGetIndex();
    },
  },

  mounted() {
    if (!this.confirm) {
      this.showTitle = this.$slots.title !== undefined || this.title;
    }
  },
};
</script>
