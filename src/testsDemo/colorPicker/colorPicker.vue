<template>
    <div class="py-test-demo">
        <h1>ColorPicker 颜色选择器</h1>
        <h2>基本用法</h2>
        <p>使用：`&lt;py-colorPicker&gt;&lt;/py-colorPicker&gt;`</p>
        <section>
        <py-colorPicker ></py-colorPicker>
        </section>
    </div>
</template>

<script>
import PYColorPicker from '../../components/color-picker';

export default {
  components: {
    'py-colorPicker': PYColorPicker,
  },
};
</script>

<style lang='scss' scoped>
.py-test-demo {
  margin-left: 20px;
  margin-top: 20px;
  h1,
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  section {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #dcdfe6;
  }
}
</style>
