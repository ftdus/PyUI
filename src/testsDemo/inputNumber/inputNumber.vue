<template>
  <div>
    <h3 class="py-input-number-title">基础用法</h3>	
    <py-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></py-input-number>
    <template>
      <h3 class="py-input-number-title">禁用状态</h3> 
      <py-input-number v-model="num2" :disabled="true"></py-input-number>
    </template>
    <template>
      <h3 class="py-input-number-title">步数</h3>
      <py-input-number v-model="num3" :step="2"></py-input-number>
    </template>
    <template>
      <h3 class="py-input-number-title">精度</h3>
      <py-input-number v-model="num4" :precision="2" :step="0.1" :max="10"></py-input-number>
    </template>
    <template>
      <h3 class="py-input-number-title">尺寸</h3>
      <py-input-number v-model="num8"></py-input-number>
      <py-input-number size="medium" v-model="num5" class="py-input-number-medium"></py-input-number>
      <py-input-number size="small" v-model="num6"></py-input-number>
      <py-input-number size="mini" v-model="num7"></py-input-number>
    </template>
    <template>
      <h3 class="py-input-number-title">按钮位置</h3>
      <py-input-number v-model="num9" controls-position="right" @change="handleChange" :min="1" :max="10"></py-input-number>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .py-input-number-title{
    margin-top:30px;
    margin-bottom:30px;
    padding-left:10px;
  }
</style>

<script>
export default {
  name:'inputNumber',
  created () {

  },
  data () {
  	return {
      num1:1,
      num2:1,
      num3:1,
      num4:1,
      num5:1,
      num6:1,
      num7:1,
      num8:1,
      num9:1
  	}
  },
  methods: {
  	handleChange (val) {
  	  console.log(val);
  	},
  },
};
</script>
