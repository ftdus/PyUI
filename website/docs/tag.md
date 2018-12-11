<style>
    .py-tag + .py-tag {
      margin-left: 10px;
    }
    .col + .col{
        margin-top: 10px;
    }
</style>
<script>
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
  },
};
</script>

## Tag 标签

用于标记和选择。

### 基础用法

::: demo 由type属性来选择tag的类型，也可以通过color属性来自定义背景色。

```html
<py-tag>标签一</py-tag>
<py-tag type="success">标签二</py-tag>
<py-tag type="info">标签三</py-tag>
<py-tag type="warning">标签四</py-tag>
<py-tag type="danger">标签五</py-tag>
```

:::

### 可移除标签

::: demo 设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。

```html
<py-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</py-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
      };
    }
  }
</script>
```

:::

### 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现

::: demo 通过改变原始数据，可以动态添加或删除标签

```html
<py-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  @close="handleClose(tag)">
  {{tag}}
</py-tag>
<py-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</py-input>
<py-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</py-button>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style>
  .py-tag + .py-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
```

:::

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo 额外的尺寸：medium、small、mini，通过设置size属性来配置它们。

```html
<py-tag closable>默认标签</py-tag>
<py-tag size="medium" closable>中等标签</py-tag>
<py-tag size="small" closable>小型标签</py-tag>
<py-tag size="mini" closable>超小标签</py-tag>
```

:::

### Attributes

|       参数          |                  说明                 |         类型           |             可选值            |      默认值      |
| ------------------- | ------------------------------------ | ---------------------- | ----------------------------- | --------------- |
| type                | 主题                                 | string                 | success/info/warning/danger   | -               |
| closable            | 是否可关闭                            | boolean                | —                             | false           |
| disable-transitions | 是否禁用渐变动画                      | boolean                | —                              | false          |
| hit                 | 是否有边框描边                        | boolean                | —                              | false          |
| color               | 背景色                               | string                 | —                              | —              |
| size                | 尺寸	                               | string                 | medium / small / mini          | —              |


### Select Events

| 事件名称           | 说明                     | 回调参数 |
| ----------------- | -------------------------- | ------------------------------- |
| close             | 关闭 Tag 时触发的事件         |                               |
