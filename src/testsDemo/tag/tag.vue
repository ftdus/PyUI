<template>
  <div class="page">
   <py-tag>dddd</py-tag>
   <py-tag type="success" hit closable>dddd</py-tag>
   <py-tag type="success" hit>dddd</py-tag>
   <py-tag type="warning" hit closable>dddd</py-tag>
   <py-tag type="danger" hit closable>dddd</py-tag>
   <py-tag type="info" hit>dddd</py-tag>
   <py-tag type="info" size="medium" closable hit>dddd</py-tag>
   <py-tag type="info" size="small" closable>dddd</py-tag>
   <py-tag type="info" size="mini" closable>dddd</py-tag>
   <py-tag type="info" closable>dddd</py-tag>
   <py-tag type="info" color="rgba(0, 0, 0, 0.1)" hit>dddd</py-tag>
   <py-tag type="info" color="rgba(0, 0, 0, 0.1)" hit>dddd</py-tag>
  </div>
</template>

<script>
import PyTag from '@/components/tag';

export default {
  components: {
    'py-tag': PyTag,
  },
  data() {
    return {};
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.page {
  padding: 20px;
  .py-tag {
    margin-right: 10px;
  }
}
</style>
