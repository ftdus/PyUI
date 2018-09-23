<template>
  <header class="py-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'PyHeader',
    componentName: 'PyHeader',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
