<template>
    <div :class="classList">
        <slot></slot>
    </div>
</template>
<script>

const prefixCls = 'py-col'

export default {
    name: 'col',
    props: {
        span: [Number, String]
    },
    computed: {
        classList(){
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-span-${this.span}`]: this.span
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    $prefixCls: 'py-col';
    .#{$prefixCls} {
        background-color: rgba(0,153,229,.9);
        float: left;
        color: #fff;
        padding: 10px 0;
        text-align: center;
        &:nth-child(odd) {
            background-color: rgba(0,153,229,.7);
        }
        &-span-12 {
            width: 50%;
        }
        &-span-8 {
            width: 33.33%;
        }
        &-span-6 {
            width: 25%;
        }
        &-span-4{
            width: 16.66%;
        }
    }
</style>
