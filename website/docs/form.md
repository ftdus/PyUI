<style>
  .demo-box {
    display: flex;
  }
  .demo-cascader {
    margin-right: 100px;
  }
</style>
<script>
// 这里  你把每一个例子里的数据都要在这里写一遍 因为解析md 文件为vue 时，只识别一个script标签
// 你看下官网规范 https://github.com/ftdus/PyUI/blob/feature%2FcreateBaseComponents/docs/website.md











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
const data3 = [
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







</script>




## Form 表单
由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 典型表单
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

:::demo 在 Form 组件中，每一个表单域由一个 `Form-Item` 组件构成，表单域中可以放置各种类型的表单控件，包括 `Input`、`Select`、`Checkbox`、`Radio`、`Switch`、`DatePicker`、`TimePicker`
```html
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
```

:::

### 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

:::demo 设置 `inline` 属性可以让表单域变为行内的表单域

```html
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

```

:::

### 对齐方式
根据具体目标和制约因素，选择最佳的标签对齐方式。

:::demo 通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`，当设为 `top` 时标签会置于表单域的顶部

```html
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
```

:::

### 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

:::demo Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `Form-Item` 的 `prop` 属性设置为需校验的字段名即可。校验规则参见 `async-validator`

```html
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

```

:::

### 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

:::demo 本例还使用status-icon属性为输入框添加了表示校验结果的反馈图标。

```html
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
      console.warn(this)
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

```

:::

### 动态增减表单项

:::demo 除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则

```html
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
```

:::

### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |
| inline    | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string |  right/left/top            | right |
| label-width | 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 是否以行内形式展示校验信息 | boolean | — | false |
| validate-on-rule-change  | 是否在 `rules` 属性改变后立即触发一次验证 | boolean | — | true |

### Form Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))
| validateField | 对部分表单字段进行校验的方法 | Function(props: array | string, callback: Function(errorMessage: string))
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | —
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array | string)

### Form Events
| 事件名称 | 说明    | 回调参数  |
|--------- |-------- |---------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px' | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules    | 表单验证规则 | object | — | — |
| error    | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 以行内形式展示校验信息 | boolean | — | false |

### Form-Item Slot
| name | 说明 |
|------|--------|
| — | Form Item 的内容 |
| label | 标签文本的内容 |

### Form-Item Scoped Slot
|  name  |   说明  |
|--------|--------|
|  error | 自定义表单校验信息的显示方式，参数为 { error } |

### Form-Item Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | -
| clearValidate | 移除该表单项的校验结果 | -
