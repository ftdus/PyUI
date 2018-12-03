<template>
  <div class="page">
   <py-tag>标签一</py-tag>
   <py-tag type="success" hit closable>标签一</py-tag>
   <py-tag type="success" hit>标签一</py-tag>
   <py-tag type="warning" hit closable>标签一</py-tag>
   <py-tag type="danger" hit closable>标签一</py-tag>
   <py-tag type="info" hit>标签一</py-tag>
   <py-tag type="info" size="medium" closable hit>标签一</py-tag>
   <py-tag type="info" size="small" closable>标签一</py-tag>
   <py-tag type="info" size="mini" closable>标签一</py-tag>
   <py-tag type="info" closable>标签一</py-tag>
   <py-tag type="info" color="rgba(0, 0, 0, 0.1)" hit>标签一</py-tag>
   <py-tag type="info" color="rgba(0, 0, 0, 0.1)" hit>标签一</py-tag>
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
