<style>
  .radio-demo__div-line {
    /* display: block; */
    margin-bottom: 20px;
  }
</style>
<script>
  export default {
    data() {
      return {
        model1: 1,
        model2: 1,
        model3: 1,
        model4: 1,
        model5: 1,
        model6: 1,
        model7: 1,
        model8: 1,
        model9: 1,
      };
    },
    methods: {
      logChange(label) {
        console.log(label);
      }
    }
  }
</script>

## Radio 单选框
在一组备选项中进行单选

### 基础用法
:::demo 使用v-model为radio设置绑定值，并且监听change事件，在radio发生变化的时候进行业务处理
```html
<div>
  <py-radio :label="1" v-model="model1" @change="logChange">选项1</py-radio>
  <py-radio :label="2" v-model="model1" >选项2</py-radio>
</div>
<script>
  export default {
    data () {
      return {
        model1: 1
      };
    },
    methods: {
      logChange(label) {
        console.log(label);
      }
    }
  }
</script>
```
:::

### 禁用状态
:::demo 使用disabled设置radio为禁用状态
```html
<div>
  <py-radio :label="1" v-model="model2" disabled>选项1</py-radio>
  <py-radio :label="2" v-model="model2" disabled>选项2</py-radio>
</div>
<script>
  export default {
    data () {
      return {
        model2: 1
      };
    }
  }
</script>
```
:::

### 单选框组
将多个radio组成一个group，适用于多个互斥的选项
:::demo 使用py-radio-group组件将多个radio组件包裹起来，形成一个group，并且在py-radio-group组件上设置v-model进行值绑定和监听选项变化
```html
<div>
  <py-radio-group v-model="model3" @change="logChange">
    <py-radio :label="1">选项1</py-radio>
    <py-radio :label="2">选项2</py-radio>
  </py-radio-group>
</div>
<script>
  export default {
    data () {
      return {
        model3: 1
      };
    },
    methods: {
      logChange(label) {
        console.log(label);
      }
    }
  }
</script>
```
:::

### 按钮样式
按钮样式的单选框
:::demo 在py-radio-group组件中将type设置为button，可以将radio样式变为按钮样式。并通过size属性来调整按钮的大小
```html
<div>
  <py-radio-group v-model="model4" type="button" >
    <py-radio :label="1">选项1</py-radio>
    <py-radio :label="2">选项2</py-radio>
  </py-radio-group>
  <div class="radio-demo__div-line"></div>
  <py-radio-group v-model="model5" type="button" size="medium" >
    <py-radio :label="1">选项1</py-radio>
    <py-radio :label="2">选项2</py-radio>
  </py-radio-group>
  <div class="radio-demo__div-line"></div>
  <py-radio-group v-model="model6" type="button" size="small" >
    <py-radio :label="1">选项1</py-radio>
    <py-radio :label="2">选项2</py-radio>
  </py-radio-group>
  <div class="radio-demo__div-line"></div>
  <py-radio-group v-model="model7" type="button" size="mini" >
    <py-radio :label="1">选项1</py-radio>
    <py-radio :label="2">选项2</py-radio>
  </py-radio-group>
</div>
<script>
  export default {
    data () {
      return {
        model4: 1,
        model5：2,
        model6：2,
        model7：2,
      };
    }
  }
</script>
```
:::

### radio垂直排列
:::demo 在py-radio-group组件中设置vertical属性，可以让radio组件实现垂直排列布局。如果设置py-radio-group组件的disabled属性，则会禁用整个group内的radio
```html
<div>
  <py-radio-group v-model="model8" type="button" vertical  >
    <py-radio :label="1">选项1</py-radio>
    <py-radio :label="2">选项2</py-radio>
  </py-radio-group>
  <div class="radio-demo__div-line"></div>
  <py-radio-group v-model="model9" disabled vertical  >
    <py-radio :label="1">选项1</py-radio>
    <py-radio :label="2">选项2</py-radio>
  </py-radio-group>
</div>
<script>
  export default {
    data () {
      return {
        model8: 1,
        model9: 2,
      };
    }
  }
</script>
```
:::

### Radio Attributes
| 参数        | 说明                                       | 类型           | 可选值 | 默认值 |
| ---------- | ------------------------------------------ | --------------| ------ | ------ |
| label      | 选中Radio时的 value                         | any           | —      | —      |
| disabled   | 禁用radio                                  | boolean        | —      | false    |
| type       | 当type设置为button时，radio呈现按钮样式       | string       | radio / button | radio |
| size       | 当type为button时，可以用来指定button的大小    | string       | medium / small / mini | —  |

### Radio Events
| 事件名称        | 说明                                    | 回调参数      |
| ---------- | ------------------------------------------ | --------------|
| change     | 当绑定值变化时触发的事件                     | 选中的radio label的值 |

### Radio-group Attributes
| 参数        | 说明                                       | 类型           | 可选值 | 默认值 |
| ---------- | ------------------------------------------ | --------------| ------ | ------ |
| vertical   | group内的radio是否使用垂直布局               | boolean       | —      | false     |
| disabled   | 禁用group内的所有radio                     | boolean        | —      | false    |
| type       | 当type设置为button时，group内的radio呈现按钮样式   | string       | radio / button | radio |
| size       | 当type为button时，可以用来指定group内的button的大小    | string       | medium / small / mini | —  |

### Radio-group Events
| 事件名称    | 说明                                    | 回调参数      |
| ---------- | ------------------------------------------ | --------------|
| change     | 当绑定值变化时触发的事件                     | 选中的radio的label的值 |