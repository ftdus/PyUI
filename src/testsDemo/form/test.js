const data1 = [
  { value: "shanghai", label: "区域一" },
  { value: "beijing", label: "区域二" },
];
const form1 = {
  name: "",
  region: "",
  delivery: false,
  desc: "",
};

const data2 = [
  { value: "shanghai", label: "区域一" },
  { value: "beijing", label: "区域二" },
];
const formInline2 = {
  user: "",
  region: "",
};

const labelPosition3 = "right";
const formLabelAlign3 = {
  name: "",
  region: "",
  type: "",
};
const data3 = [cd
  {
    value: "left",
    label: "左对齐",
  },
  {
    value: "right",
    label: "右对齐",
  },
  {
    value: "top",
    label: "顶部对齐",
  },
];

const select4 = [
  {
    value: "shanghai",
    label: "区域一",
  },
  {
    value: "beijing",
    label: "区域二",
  },
];
const ruleForm4 = {
  name: "",
  region: "",
  delivery: false,
  desc: "",
};
const rules4 = {
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
};


const dynamicValidateForm6 = {
  domains: [{
    value: "",
  }],
  email: "",
};


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

    const ruleForm5 = {
      pass: "",
      checkPass: "",
      age: "",
    };
    const rules5 = {
      pass: [
        { validator: validatePass5, trigger: "blur" },
      ],
      checkPass: [
        { validator: validatePass51, trigger: "blur" },
      ],
      age: [
        { validator: checkAge5, trigger: "blur" },
      ],
    };
    return {
      data1,
      form1,
      data2,
      formInline2,
      labelPosition3,
      formLabelAlign3,
      data3,
      select4,
      ruleForm4,
      rules4,
      ruleForm5,
      rules5,
      dynamicValidateForm6,
    };
  },
  methods: {
    onSubmit1 () {
      console.log("submit!");
    },
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
    submitForm5 (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm5 (formName) {
      this.$refs[formName].resetFields();
    },
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

