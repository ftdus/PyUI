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
      containerClass: (this.$slots.before ? 'input-before ' : '') + (this.$slots.after ? 'input-after' : ''),
    };
  },
  inheritAttrs: false,
  mounted() {
    this.resizeHeight();
    console.log(this.$el.querySelector('input'))
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
          el.style.height = "";
          currentHeight = el.scrollHeight;
        }
        // 高度不小于初始高度时变化高度
        if (lastHeight < currentHeight || !el.style.height) {
          el.style.height = `${currentHeight}px`;
        }
        el.style.overflow = (el.scrollHeight > currentHeight ? "auto" : "hidden");
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
      validator (val) {
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

<style lang="scss" scoped>
@import "@/base/themes.scss";
.py-input {
  position: relative;
  padding: 4px;
  display: inline-table;
  .input-wrap{
    flex:1;
    position:relative
  }
  input[disabled],
  textarea[disabled] {
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: $color;
  }
  * {
    box-sizing: border-box;
  }
  input,
  textarea {
    padding: 6px;
    border-radius: 5px;
    outline: none;
    transition: 0.2s;
    width: 100%;
    font-size: 14px;
    flex: 1;
    padding-right: 25px;
    border: 1px solid #ddd;
    &:focus,
    &:hover {
      border-color: $border-color-hover;
      box-shadow: 0 0 4px $border-color-hover;
    }
  }
  textarea {
    overflow: auto;
    transition: 0s;
    word-break: break-all;
    padding: 6px;
    transition: 0.05s;
    min-width: 350px;
    line-height: 20px;
  }
  .isBorder {
    border: 1px solid transparent;
  }
  .input-span{
    line-height: 1.9em;
    margin-right: 5px;
    color: $color;
    display: table-cell;
    font-size: 13px;
    padding-left: 10px;
    padding-right: 10px;
    white-space: nowrap;
    cursor: context-menu;
    transition: .4s;
    &:hover{
      background: $color-active;
    }
  }
  .input-clear {
    display: none;
  }
  .clearText {
    background: $color;
    position: absolute;
    right: 10px;
    top: 0;
    display: block;
    height: 16px;
    line-height: 15px;
    width: 16px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    bottom: 0;
    margin: auto;
    font-size: 13px;
    transition: 0.5s;
    cursor: pointer;
  }
  .isDisabled {
    cursor: no-drop;
  }
  .large {
    font-size: 16px;
    padding: 8px;
    padding-right: 25px;
  }
  .small {
    font-size: 12px;
    padding: 5px;
    padding-right: 25px;
  }
}

.input-before{
  border-radius: 25px 0 0 25px;
  overflow: hidden;
  .input-span{
    background: $border-color-hover;
    color: #fff;
    min-width: 35px;
    text-align: center;
    margin: 0;
  }
  input{
    border-radius: 0 5px 5px 0;
    border-left: 0;
  }
}

.input-after{
  border-radius:  0 25px 25px 0;
  overflow: hidden;
  .input-span{
    background: $border-color-hover;
    color: #fff;
    min-width: 35px;
    text-align: center;
    margin: 0;
  }
  input{
    border-radius: 5px 0 0 5px;
    border-right: 0;
  }
  .clearText{
    right:5px;
  }
}
.input-before.input-after{
  border-radius:  25px;
  input{
    border-radius: 0px;
    border-right: 0;
    border-left: 0;
  }
}
</style>
