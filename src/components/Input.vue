<template>
    <div class="py-input">
        <label for="" v-if="!!label && labelValue !=='' " :style="labelStyle">{{labelValue}}</label>
        <input 
            type="text" 
            :class="[
                !border && 'isBorder',
                disabled && 'isDisabled'
            ]"
            v-if='type !== "textarea"'
            ref="input"
            :value='value'
            :disabled='disabled'
            :readonly='readonly'
            :autofocus='autofocus'
            :maxlength='maxlength'
            :placeholder='placeholder'
            @blur="onBlur"
            @input="onInput"
            @focus="onFocus"
            @change="onChange"/>

        <textarea name="" v-else id="" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    data(){
        return {
            createdClass: ''
        }
    },
    methods:{
        // 写入内容
        setValue(newValue){
            if(newValue === ''){return false;}
            this.$refs.input.value = newValue
        },
        // 获取内容
        getValue(newValue){
            return this.$refs.input.value
        },
        // 清空内容
        clearInput(){
            this.$refs.input.value = ''
        },
        // 改变文本内容后失去焦点触发
        onChange(e){
            this.$emit('on-change', e)
        },
        // 手动触发焦点
        focus(){
            this.$refs.input.focus()
        },
        // 触发焦点
        onFocus(e){
            this.$emit('on-focus', e)
        },
        // 手动触发失去焦点
        blur(){
            this.$refs.input.blur()
        },
        // 触发失去焦点
        onBlur(e){
            this.$emit('on-blur', e)
        },
        // 改变内容后触发
        onInput(e){
            let v = e.target.value === '' || this.$refs.input.value
            this.$emit('on-input', v)
        }
    },
    props:{
        label: {
            type: Boolean,
            default: false
        },
        labelValue: {
            type: [String, Number],
            default: ''
        },
        labelStyle: {
            type: String,
            default: ''
        },
        type:{
            type: String,
            default: 'input'
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
    }
}
</script>
<style lang="scss">
.py-input{
    label{
        font-size: 14px;
        margin-right: 5px;
        display: inline-block;
    }
    input{
        padding: 6px;
        border-radius: 5px;
        outline: none;
        transition: .3s;
        border: 1px solid #ddd;
        &:focus, &:hover{
            border: 1px solid #4faff3;
            box-shadow: 0 0 4px #4faff3;
        }
    }
    .isBorder{
        border: 1px solid transparent;
    }
    .isDisabled{
        cursor: no-drop;
    }
}
</style>
