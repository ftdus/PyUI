<!--
 * @author bitqiang<bitqiang@outlook.com>
 * @date 2018/12/4 22:10
 * @desc
 -->

<template>
<div>
    <py-form :model="ruleForm5" status-icon :rules="rules5" ref="ruleForm5" label-width="100px" class="demo-ruleForm">
      <py-form-item label="密码" prop="pass">
        <py-input type="password" v-model="ruleForm5.pass" autocomplete="off"></py-input>
          </py-form-item>
          <py-form-item label="确认密码" prop="checkPass">
          <py-input type="password" v-model="ruleForm5.checkPass" autocomplete="off"></py-input>
          </py-form-item>
      <py-form-item label="年龄" prop="age">
        <py-input v-model.number="ruleForm5.age"></py-input>
      </py-form-item>
      <py-form-item>
        <py-button type="primary" @click="submitForm5('ruleForm5')">提交</py-button>
        <py-button @click="resetForm5('ruleForm5')">重置</py-button>
      </py-form-item>
    </py-form>
</div>
</template>

<script>

export default {
  data () {
    const checkAge5 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else if (value < 18) {
          callback(new Error("必须年满18岁"));
        } else {
          callback();
        }
      }, 1000);
    };
    const validatePass5 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm5.checkPass !== "") {
          this.$refs.ruleForm5.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass51 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm5.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm5: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules5: {
        pass: [
          { validator: validatePass5, trigger: "blur" },
        ],
        checkPass: [
          { validator: validatePass51, trigger: "blur" },
        ],
        age: [
          { validator: checkAge5, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm5 (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm5 (formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
