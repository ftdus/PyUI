<template>
  <div class="page">
    <h2>基础用法：`&lt;py-rate&gt;&lt;/py-rate&gt;`</h2>
    <section>
      <py-rate v-model="value"></py-rate>
    </section>

    <h2>满分指数：`&lt;py-rate :count="7" &gt;&lt;/py-rate&gt;`</h2>
    <section>
      <py-rate :count="7" v-model="value"></py-rate>
    </section>

    <h2>半星：`&lt;py-rate allow-half&gt;&lt;/py-rate&gt;`</h2>
    <section>
      <py-rate allow-half v-model="valueHalf"></py-rate>
    </section>

    <h2>显示提示：`&lt;py-rate show-text&gt;&lt;/py-rate&gt;`</h2>
    <section>
      <py-rate show-text v-model="valueText"></py-rate>
    </section>

    <h2>只读：`&lt;py-rate disabled&gt;&lt;/py-rate&gt;`</h2>
    <section>
      <py-rate disabled v-model="valueText"></py-rate>
    </section>

    <h2>自定义字符：`&lt;py-rate character="A"&gt;&lt;/py-rate&gt;`</h2>
    <section>
      <py-rate allow-half character="A" v-model="valueHalf"></py-rate>
    </section>
    <section>
      <py-rate allow-half character="好" v-model="valueHalf"></py-rate>
    </section>

    <h2>自定义图标：`&lt;py-rate icon="icon-heart"&gt;&lt;/py-rate&gt;`</h2>
    <section>
      <py-rate allow-half icon="icon-heart" v-model="valueHalf"></py-rate>
    </section>
    <section>
      <py-rate allow-half icon="icon-livestar" v-model="valueHalf"></py-rate>
    </section>
    <section>
      <py-rate allow-half icon="icon-liveheart" v-model="valueHalf"></py-rate>
    </section>
    <section>
      <py-rate allow-half icon="icon-liveheart" v-model="valueHalf"></py-rate>
    </section>
  </div>
</template>

<script>
import PyRate from '@/components/rate';

export default {
  components: {
    'py-rate': PyRate,
  },
  data() {
    return {
      value: 0,
      valueHalf: 2.5,
      valueText: 3,
      valueCustomText: 4.0,
      valueDisabled: 2.4,
      valueClear: 1,
      valueClearHalf: 1.5,
      characterValue: 2.5,
      cv: 3.5,
    };
  },
};
</script>

<style lang="scss" scoped>
.page{
  padding: 20px;
  h2{
    margin-bottom: 10px;
  }
  section{
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #DCDFE6;
  }
  button{
    padding: 4px 10px;
    border: 1px solid #f1f1f1;
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>

