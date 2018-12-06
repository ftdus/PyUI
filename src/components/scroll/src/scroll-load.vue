<template>
  <py-spin :style="{ textAlign: 'center' }" fix>
    <div><py-icon class="py-scroll__load--icon" size="16" type="load" /></div>
    <div
      :style="{
        fontSize: `${12}px`,
        lineHeight: 2.5,
      }"
    >
      {{ loadText }}
    </div>
  </py-spin>
</template>

<script>
export default {
  props: {
    loadText: {
      type: String,
    },
  },
};
</script>
