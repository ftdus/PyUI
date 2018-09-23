<template>
  <aside class="py-side" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'PySide',
    componentName: 'PySide',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
