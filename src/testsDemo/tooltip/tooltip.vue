<template>
  <div style="margin: 100px">
    <py-tooltip content="i am content" :delay="500" placement="left" always>hover</py-tooltip>
  </div>
</template>

<script>
import PyTooltip from '@/components/tooltip';

export default {
  components: {
    PyTooltip,
  },
};
</script>
