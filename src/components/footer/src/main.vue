<template>
  <footer class="py-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'PyFooter',
    componentName: 'PyFooter',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
