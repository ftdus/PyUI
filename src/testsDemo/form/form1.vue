<!--
 * @author bitqiang<bitqiang@outlook.com>
 * @date 2018-11-28 21:17
 * @desc
 -->

<template>
  <div>
    <py-form :model="form1" label-width="200px">
      <py-form-item label="活动名称" required>
        <py-input v-model="form1.name"></py-input>
      </py-form-item>

      <py-form-item label="活动区域">
      <py-select
        v-model="form1.region" placeholder="请选择活动区域" :data="data1"
      >
      </py-select>
      </py-form-item>
      <py-form-item label="即时配送">
      <py-switch v-model="form1.delivery"></py-switch>
      </py-form-item>
      <py-form-item label="活动形式">
      <py-input type="textarea" v-model="form1.desc"></py-input>
      </py-form-item>
      <py-form-item>
      <py-button type="primary" @click="onSubmit1">立即创建</py-button>
      <py-button>取消</py-button>
      </py-form-item>
    </py-form>
  </div>
</template>

<script>
export default {
  name: "form",
  data () {
    return {
      data1: [
        { value: "shanghai", label: "区域一" },
        { value: "beijing", label: "区域二" },
      ],
      form1: {
        name: "",
        region: "",
        delivery: false,
        desc: "",
      },
    };
  },
  methods: {
    onSubmit1 () {
      console.log("submit!");
    },
  },
};
</script>
