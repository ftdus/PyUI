<template>
    <div class="py-input">
        <span 
            :class="(clearText && currValue !== '') && !disabled  && 'clearText'" 
            v-if='type !== "textarea"' @click="clearInput">x</span>
        <input
        type="text" 
        :class="[
            !border && 'isBorder',  
            disabled && 'isDisabled',
            size === 'large' && 'large',
            size === 'small' && 'small'
        ]"
        :id="id"
        ref="input"
        v-if='type !== "textarea"'
        :name="name"
        :size='size'
        :value="currValue"
        :disabled='disabled'
        :readonly='readonly'
        :autofocus='autofocus'
        :maxlength='maxlength'
        :placeholder='placeholder'
        @blur="onBlur"
        @input="onInput"
        @focus="onFocus"
        @keyup="onKeyup"
        @keydown='onKeydown'
        @keyup.enter="onEnter"
        @keypress='onKeypress'
        @change="onChange"/>
        
        <textarea 
            :name="name" v-else :id="id" cols="30" :rows="rows"
            :class="[
                !border && 'isBorder',
                disabled && 'isDisabled'
            ]"
            :style='{overflow: autoHeight ? "hidden" : "auto"}'
            ref="textarea"
            :form='form'
            :value="currValue"
            :readonly='readonly'
            :disabled='disabled'
            :autofocus="autofocus"
            :maxlength="maxlength"
            :placeholder='placeholder'
            @blur="onBlur"
            @keyup="onKeyup"
            @input="onInput"
            @focus='onFocus'
            @keydown='onKeydown'
            @keyup.enter="onEnter"
            @keypress='onKeypress'
            ></textarea>
    </div>
</template>

<script>
var lastLength = 0;
var lastHeight = 0;
export default {
    data(){
        return {
            currValue: this.value
        }
    },
    inheritAttrs: false,
    mounted(){
        this.resizeHeight()
    },
    methods:{
        // 写入内容
        setCruuValue(newValue){
            if(newValue === ''){return false;}
            this.currValue = newValue
            //this.$emit('input', this.currValue)
        },
        // 获取内容
        getValue(){
            console.log( this.currValue )
            return this.currValue
        },
        // 清空内容
        clearInput(){
            this.setCruuValue('')
            this.$emit('input', '')
            this.$emit('on-change', '')
            this.currValue = (this.$refs.input || this.$refs.textarea).value = ''
        },
        // 松开键盘键
        onKeyup(e){
            this.$emit('on-keyup', e)
        },
        // 按下回车
        onEnter(){
            this.$emit('on-enter', this.currValue)
        },
        // 按下键盘键,并至少产生一个字符时发生
        onKeypress(e){
            this.$emit('on-keypress', e)
        },
        onKeydown(e){
            this.$emit('on-keydown', e)
        },
        // 改变文本内容后失去焦点触发
        onChange(e){
            this.$emit('on-change', e)
        },
        // 手动触发焦点
        focus(){
            (this.$refs.input || this.$refs.textarea).focus()
        },
        // 触发焦点
        onFocus(e){
            this.$emit('on-focus', e)
        },
        // 手动触发失去焦点
        blur(){
            (this.$refs.input || this.$refs.textarea).blur()
        },
        // 触发失去焦点
        onBlur(e){
            this.$emit('on-blur', e)
        },
        // 改变内容后触发
        onInput(e){
            this.resizeHeight()
            let v = e.target.value
            this.currValue = v
            this.$emit('input', v)
            this.setCruuValue(v)
            this.onChange(v)
        },
        // 文本域自适应高度
        resizeHeight(){
            var el = this.$refs.textarea
            if(el && this.autoHeight){
                var currentLength = el.value.length;
                if (currentLength < lastLength) {
                    el.style.height = '';
                }
                var currentHeight = el.scrollHeight;
                if (lastHeight !== currentHeight || !el.style.height) {
                    el.style.height = currentHeight + 2 + 'px';
                }
                lastLength = currentLength;
                lastHeight = currentHeight;
            }
        }
    },
    watch:{
        value: function(val){
            this.setCruuValue(val)
        }
    },
    props:{
        autoHeight: {
            type: Boolean,
            default: false
        },
        id:{
            type: [String, Number]
        },
        rows:{
            type: [String, Number],
            default: 5
        },
        form:{
            type:[String, Number]
        },
        type:{
            type: String,
            default: 'input'
        },
        name: {
            type: [String, Number]
        },
        size: {
            type: String
        },
        value: {
            type: [String, Number],
            default: ''
        },
        border:{
            type: false,
            default: true
        },
        autofocus:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        },
        maxlength:{
            type: Number
        },
        readonly:{
            type: Boolean,
            default: false
        },
        placeholder: {
            type: [String, Number],
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        },
        // 是否显示文本清空按钮
        clearText: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="scss">
.py-input{
    position: relative;
    padding: 4px;
    *{
        box-sizing: border-box;
    }
    input,textarea{
        padding: 6px;
        border-radius: 5px;
        outline: none;
        transition: .1s;
        width:100%;
        font-size: 14px;
        padding-right: 25px;
        border: 1px solid #ddd;
        &:focus, &:hover{
            border: 1px solid #4faff3;
            box-shadow: 0 0 4px #4faff3;
        }
    }
    textarea{
        overflow: hidden;
        transition: 0s;
        word-break: break-all;padding:6px;
        line-height: 20px;
    }
    .isBorder{
        border: 1px solid transparent;
    }
    span{
        display: none;
    }
    .clearText{
        background: #464444;
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
        transition: .5s;
        cursor: pointer;
    }
    .isDisabled{
        cursor: no-drop;
    }
    .large{
        font-size: 16px;
        padding: 8px;
        padding-right: 25px;
    }
    .small{
        font-size: 12px;
        padding: 5px;
        padding-right: 25px;
    }
}
</style>
