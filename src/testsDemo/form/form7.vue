<template>
  <div>
    <py-form ref="form" :model="sizeForm7" label-width="80px" size="mini">
  <py-form-item label="活动名称">
    <py-input v-model="sizeForm7.name"></py-input>
  </py-form-item>
  <py-form-item label="活动区域">
    <py-select v-model="sizeForm7.region" placeholder="请选择活动区域" :data="select7">
    </py-select>
  </py-form-item>
  <py-form-item size="large">
    <py-button type="primary" @click="onSubmit7">立即创建</py-button>
    <py-button>取消</py-button>
  </py-form-item>
</py-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select7: [
        {
          value: 'shanghai',
          label: '区域一',
        },
        {
          value: 'beijing',
          label: '区域二',
        },
      ],
      sizeForm7: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit7 () {
      console.log("submit!");
    },
  },
};
</script>
