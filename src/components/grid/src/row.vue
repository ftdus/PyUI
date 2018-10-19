<style lang="scss" scoped>
    $prefixCls: 'py-row';
    .#{$prefixCls} {
        &:after {
            content: " ";
            display: block;
            clear: both;
        }
    }
</style>

<template>
    <div class="py-row">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = "py-row";

export default {
    name: 'row',
    props: {
        gutter: {
            type: Number
        }
    },
    computed: {
        classList() {
            return [
                `${prefixCls}`,
            ]
        }
    }
}
</script>
