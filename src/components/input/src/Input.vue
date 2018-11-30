<template>
    <div class="py-input" :class="containerClass">
        <template class="input-group" v-if='type !== "textarea"'>
          <span class="input-span" v-if="$slots.before">
            <slot name="before" />
          </span>
          <div class="input-wrap">
            <span
            class="input-clear"
            :class="(clearText && currValue !== '') && !disabled  && 'clearText'"
            v-if='type !== "textarea"'
            @click="clearInput" >x</span>
            <input type="text"
              :class="[
                  !border && 'isBorder',
                  disabled && 'isDisabled',
                  size === 'large' && 'large',
                  size === 'small' && 'small'
              ]"
              :id="id"
              ref="input"
              :name="name"
              :size="size"
              :value="currValue"
              :disabled="disabled"
              :readonly="readonly"
              :autofocus="autofocus"
              :maxlength="maxlength"
              :placeholder="placeholder"
              @blur="onBlur"
              @input="onInput"
              @focus="onFocus"
              @keyup="onKeyup"
              @keydown="onKeydown"
              @keyup.enter="onEnter"
              @keypress="onKeypress"
              @change="onChange"/>
          </div>
          <span class="input-span" v-if="$slots.after">
            <slot name="after" />
          </span>
        </template>

        <textarea :name="name" v-else :id="id" cols="30" :rows="rows"
            :class="[
                !border && 'isBorder',
                disabled && 'isDisabled'
            ]"
            ref="textarea"
            :form="form"
            :value="currValue"
            :readonly="readonly"
            :disabled="disabled"
            :autofocus="autofocus"
            :maxlength="maxlength"
            :placeholder="placeholder"
            @blur="onBlur"
            @keyup="onKeyup"
            @input="onInput"
            @focus="onFocus"
            @keydown="onKeydown"
            @keyup.enter="onEnter"
            @keypress="onKeypress"
            ></textarea>
    </div>
</template>

<script>
let lastLength = 0;
let lastHeight = 0;
export default {
  name: 'py-input',
  data() {
    return {
      currValue: this.value,
      containerClass:
        (this.$slots.before ? 'input-before ' : '') + (this.$slots.after ? 'input-after' : ''),
    };
  },
  inheritAttrs: false,
  mounted() {
    this.resizeHeight();
  },
  methods: {
    // 写入内容
    setCruuValue(newValue) {
      this.currValue = newValue;
      this.$emit('input', newValue);
      return newValue;
    },
    // 获取内容
    getValue() {
      return this.currValue;
    },
    // 清空内容
    clearInput() {
      this.$emit('input', '');
      this.$emit('on-change', '');
      this.setCruuValue('');
      (this.$refs.input || this.$refs.textarea).value = '';
    },
    // 松开键盘键
    onKeyup(e) {
      this.$emit('on-keyup', e);
    },
    // 按下回车
    onEnter() {
      this.$emit('on-enter', this.currValue);
    },
    // 按下键盘键,并至少产生一个字符时发生
    onKeypress(e) {
      this.$emit('on-keypress', e);
    },
    onKeydown(e) {
      this.$emit('on-keydown', e);
    },
    // 改变文本内容后失去焦点触发
    onChange(e) {
      this.$emit('on-change', e);
    },
    // 手动触发焦点
    focus() {
      (this.$refs.input || this.$refs.textarea).focus();
    },
    // 触发焦点
    onFocus(e) {
      this.$emit('on-focus', e);
    },
    // 手动触发失去焦点
    blur() {
      (this.$refs.input || this.$refs.textarea).blur();
    },
    // 触发失去焦点
    onBlur(e) {
      this.$emit('on-blur', e);
    },
    // 改变内容后触发
    onInput(e) {
      const v = e.target.value;
      this.currValue = v;
      this.$emit('input', v);
      this.setCruuValue(v);
      this.onChange(v);
      this.resizeHeight();
    },
    // 文本域自适应高度
    resizeHeight() {
      const el = this.$refs.textarea;
      if (el && this.autoHeight) {
        const currentLength = el.value.length;
        // 初始高度
        let currentHeight = el.scrollHeight;
        // 判断字符的删除
        if (currentLength <= lastLength) {
          el.style.height = '';
          currentHeight = el.scrollHeight;
        }
        // 高度不小于初始高度时变化高度
        if (lastHeight < currentHeight || !el.style.height) {
          el.style.height = `${currentHeight}px`;
        }
        el.style.overflow = el.scrollHeight > currentHeight ? 'auto' : 'hidden';
        lastLength = currentLength;
        lastHeight = currentHeight;
      }
      return true;
    },
  },
  watch: {
    value(val) {
      this.setCruuValue(val);
    },
  },
  props: {
    autoHeight: {
      type: Boolean,
      default: false,
    },
    id: {
      type: [String, Number],
    },
    rows: {
      type: [String, Number],
      default: 5,
    },
    form: {
      type: [String, Number],
    },
    type: {
      type: String,
      validator(val) {
        const tsType = ['text', 'textarea', 'password', 'url', 'email', 'date'];
        if (tsType.indexOf(val) === -1) {
          return false;
        }
        return true;
      },
      default: 'text',
    },
    name: {
      type: [String, Number],
    },
    size: {
      type: String,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    border: {
      type: false,
      default: true,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    // 是否显示文本清空按钮
    clearText: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
