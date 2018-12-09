<template>
  <div>
    <py-form :model="dynamicValidateForm6" ref="dynamicValidateForm6" label-width="100px" class="demo-dynamic">
    <py-form-item
    prop="email" label="邮箱" :rules="[
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
    >
    <py-input v-model="dynamicValidateForm6.email"></py-input>
    </py-form-item>
    <py-form-item
    v-for="(domain, index) in dynamicValidateForm6.domains"
    :label="'域名' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
    required: true, message: '域名不能为空', trigger: 'blur'
    }"
    >
    <py-input v-model="domain.value"></py-input><py-button @click.prevent="removeDomain6(domain)">删除</py-button>
    </py-form-item>
    <py-form-item>
    <py-button type="primary" @click="submitForm6('dynamicValidateForm6')">提交</py-button>
    <py-button @click="addDomain6">新增域名</py-button>
    <py-button @click="resetForm6('dynamicValidateForm6')">重置</py-button>
    </py-form-item>
    </py-form>
  </div>

</template>

<script>
export default {
  data () {
    return {
      dynamicValidateForm6: {
        domains: [{
          value: "",
        }],
        email: "",
      },
    };
  },
  methods: {
    submitForm6 (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm6 (formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain6 (item) {
      const index = this.dynamicValidateForm6.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm6.domains.splice(index, 1);
      }
    },
    addDomain6 () {
      this.dynamicValidateForm6.domains.push({
        value: "",
        key: Date.now(),
      });
    },
  },
};
</script>
