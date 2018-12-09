<template>
  <div>
    <py-select v-model="labelPosition3" placeholder="活动区域" :data="data3">
    </py-select>
    <div style="margin: 20px;"></div>
    <py-form :label-position="labelPosition3" label-width="80px" :model="formLabelAlign3">
      <py-form-item label="名称">
        <py-input v-model="formLabelAlign3.name"></py-input>
      </py-form-item>
      <py-form-item label="活动区域">
        <py-input v-model="formLabelAlign3.region"></py-input>
      </py-form-item>
      <py-form-item label="活动形式">
        <py-input v-model="formLabelAlign3.type"></py-input>
      </py-form-item>
    </py-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition3: "right",
      formLabelAlign3: {
        name: "",
        region: "",
        type: "",
      },
      data3: [
        {
          value: 'left',
          label: '左对齐',
        },
        {
          value: 'right',
          label: '右对齐',
        },
        {
          value: 'top',
          label: '顶部对齐',
        },
      ],
    };
  },
};
</script>
