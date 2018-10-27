<template>
    <div class="py-test-demo">
        <py-colorPicker ></py-colorPicker>
    </div>
</template>

<script>
import PYColorPicker from '../../components/colorPicker';

export default {
  components: {
    'py-colorPicker': PYColorPicker,
  },
};
</script>

<style lang='scss' scoped>
.py-test-demo {
  margin-top: 50px;
  margin-left: 50px;
}
</style>
