<!--
 * @author bitqiang<bitqiang@outlook.com>
 * @date 2018-11-28 21:17
 * @desc
 -->

<template>
  <div>
    <py-form :inline="true" :model="formInline2">
    <py-form-item label="审批人">
      <py-input v-model="formInline2.user" placeholder="审批人"></py-input>
    </py-form-item>
    <py-form-item label="活动区域">
      <py-select v-model="formInline2.region" placeholder="活动区域" :data="data2">
      </py-select>
    </py-form-item>
    <py-form-item>
      <py-button type="primary">查询</py-button>
    </py-form-item>
  </py-form>
</div>
</template>

<script>
export default {
  name: "form",
  data () {
    return {
      data2: [
        { value: "shanghai", label: "区域一" },
        { value: "beijing", label: "区域二" },
      ],
      formInline2: {
        user: "",
        region: "",
      },
    };
  },
};
</script>
