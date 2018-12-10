<!--
 * @author bitqiang<bitqiang@outlook.com>
 * @date 2018/12/1 11:03
 * @desc
 -->

<template>
  <div>
    <py-form :model="ruleForm4" :rules="rules4" ref="ruleForm4" label-width="100px" class="demo-ruleForm4">
      <py-form-item label="活动名称" prop="name">
        <py-input v-model="ruleForm4.name"></py-input>
      </py-form-item>
      <py-form-item label="活动区域" prop="region">
        <py-select v-model="ruleForm4.region" placeholder="请选择活动区域" :data="select4">
        </py-select>
      </py-form-item>
      <py-form-item label="即时配送" prop="delivery">
        <py-switch v-model="ruleForm4.delivery"></py-switch>
      </py-form-item>
      <py-form-item label="活动形式" prop="desc">
        <py-input type="textarea" v-model="ruleForm4.desc"></py-input>
      </py-form-item>
      <py-form-item>
        <py-button type="primary" @click="submitForm4('ruleForm4')">立即创建</py-button>
        <py-button @click="resetForm4('ruleForm4')">重置</py-button>
      </py-form-item>
  </py-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      select4: [
        {
          value: 'shanghai',
          label: '区域一',
        },
        {
          value: 'beijing',
          label: '区域二',
        },
      ],
      ruleForm4: {
        name: "",
        region: "",
        delivery: false,
        desc: "",
      },
      rules4: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur",
          },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date", required: true, message: "请选择日期", trigger: "change",
          },
        ],
        date2: [
          {
            type: "date", required: true, message: "请选择时间", trigger: "change",
          },
        ],
        type: [
          {
            type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm4 (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm4 (formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
