<style>
    .py-select + .py-select {
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
      value: '',
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      disabledData: [
        {
          value: '选项1',
          label: '黄金糕',
          disabled: true,
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
          disabled: true,
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      multipleValue: [],
      remoteData: [],
      remoteLoading: false,
      filterData: [
        { value: 0, label: 'Alabama' },
        { value: 1, label: 'Alaska' },
        { value: 2, label: 'Arizona' },
        { value: 3, label: 'Arkansas' },
        { value: 5, label: 'California' },
        { value: 6, label: 'Colorado' },
        { value: 7, label: 'Connecticut' },
        { value: 8, label: 'Delaware' },
        { value: 9, label: 'Florida' },
        { value: 10, label: 'Georgia' },
        { value: 11, label: 'Kentucky' },
        { value: 12, label: 'Ohio' },
        { value: 13, label: 'Oklahoma' },
        { value: 14, label: 'Nebraska' },
      ],
    };
  },
  methods: {
    clearHandler () {},
    remoteMethod(query) {
      if (query === '') {
        this.remoteData = [];
        return;
      }
      this.remoteLoading = true;
      setTimeout(() => {
        this.remoteLoading = false;
        this.remoteData = this.filterData.filter(data => {
          if (data.label.indexOf(query) > -1) {
            return true;
          }
          return false;
        });
      }, 300);
    },
  }
};
</script>

## Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

适用广泛的基础单选

::: demo v-model的值为当前被选中的py-option的 value 属性值

```html
<py-select v-model="value" :data="selectData"></py-select>

<script>
export default {
  data() {
    return {
      value: '',
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
};
</script>
```

:::

### 有禁用选项

::: demo 在py-option中，设定disabled值为 true，即可禁用该选项

```html
<py-select v-model="value" :data="disabledData"></py-select>

<script>
export default {
  data() {
    return {
      value: '',
      disabledData: [
        {
          value: '选项1',
          label: '黄金糕',
          disabled: true,
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
          disabled: true,
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
};
</script>
```

:::

### 禁用状态

选择器不可用状态

::: demo 为py-select设置disabled属性，则整个选择器不可用

```html
<py-select v-model="value" :data="selectData" disabled></py-select>

<script>
export default {
  data() {
    return {
      value: '',
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
};
</script>
```

:::

### 可清空单选

包含清空按钮，可将选择器清空为初始状态

::: demo 为py-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。

```html
<py-select
  v-model="value"
  :data="selectData"
  clearable
  @clear="clearHandler">
</py-select>

<script>
export default {
  data() {
    return {
      value: '',
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
  methods: {
    clearHandler () {}
  }
};
</script>
```

:::

### 基础多选

适用性较广的基础多选，用 Tag 展示已选项

::: demo 为py-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，同时可删除每个Tag，也可使用键盘的delete键逐个删除。

```html
<py-select
  v-model="multipleValue"
  multiple
  :data="selectData">
</py-select>

<script>
export default {
  data() {
    return {
      multipleValue: [],
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
};
</script>
```

:::

### 可搜索

可以利用搜索功能快速查找选项

::: demo 为py-select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值

```html
<py-select
  v-model="value"
  filterable
  :data="selectData">
</py-select>

<script>
export default {
  data() {
    return {
      value: '',
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
};
</script>
```

:::

### 远程搜索

从服务器搜索数据，输入关键字进行查找

::: demo 为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。

```html
<py-select
    v-model="value"
    filterable
    remote
    :loading="remoteLoading"
    loading-text="加载中"
    :remote-method="remoteMethod"
    :data="remoteData">
</py-select>

<script>
export default {
  data() {
    return {
      value: '',
      remoteData: [],
      remoteLoading: false,
      filterData: [
        { value: 0, label: 'Alabama' },
        { value: 1, label: 'Alaska' },
        { value: 2, label: 'Arizona' },
        { value: 3, label: 'Arkansas' },
        { value: 5, label: 'California' },
        { value: 6, label: 'Colorado' },
        { value: 7, label: 'Connecticut' },
        { value: 8, label: 'Delaware' },
        { value: 9, label: 'Florida' },
        { value: 10, label: 'Georgia' },
        { value: 11, label: 'Kentucky' },
        { value: 12, label: 'Ohio' },
        { value: 13, label: 'Oklahoma' },
        { value: 14, label: 'Nebraska' },
      ],
    };
  },
  methods: {
    remoteMethod(query) {
      if (query === '') {
        this.remoteData = [];
        return;
      }
      this.remoteLoading = true;
      setTimeout(() => {
        this.remoteLoading = false;
        this.remoteData = this.filterData.filter(data => {
          if (data.label.indexOf(query) > -1) {
            return true;
          }
          return false;
        });
      }, 300);
    },
  }
};
</script>
```

:::

### 创建条目

可以创建并选中选项中不存在的条目

::: demo 使用allow-create属性即可通过在输入框中输入文字来创建新的条目，创建的条目label和value均是输入的文字。注意此时filterable必须为真。

```html
<py-select
  v-model="value"
  :allow-create="true"
  filterable
  :data="selectData">
</py-select>
<py-select
  v-model="multipleValue"
  multiple
  :allow-create="true"
  filterable
  :data="selectData">
</py-select>

<script>
export default {
  data() {
    return {
      multipleValue: [],
      value: '',
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
  methods: {
    remoteMethod(query) {
      if (query === '') {
        this.remoteData = [];
        return;
      }
      this.remoteLoading = true;
      setTimeout(() => {
        this.remoteLoading = false;
        this.remoteData = this.filterData.filter(data => {
          if (data.label.indexOf(query) > -1) {
            return true;
          }
          return false;
        });
      }, 300);
    },
  }
};
</script>
```

:::

### Attributes

|       参数          |                  说明                 |         类型           |   可选值            |     默认值    |
| ------------------- | ------------------------------------ | ---------------------- | ------------------ | ------------ |
| data                | select下拉框数据                      | array                 | —                      | -          |
| value               | select的v-model值                    | number, string, array  | —                      | -          |
| multiple            | 是否多选                              | boolean                | —                      | false      |
| disabled            | 是否禁用                              | 是否禁用                | —                      | false      |
| clearable           | 是否可以清空选项                       | boolean                | —                      | false      |
| multiple-limit      | 多选时用户最多可以选择的项目数，为 0 则不限制 | number                | —                      | 0     |
| placeholder         | 占位符                                 | string                | —                      | 请选择      |
| filterable          | 是否可搜索                             | boolean               | —                      | false      |
| allow-create        | 是否允许用户创建新条目，需配合 filterable 使用  | boolean               | —                      | false |
| filter-method       | 自定义搜索方法                         | function              | —                      | —           |
| remote              | 是否为远程搜索                         | function              | —                      | —           |
| loading             | 是否正在从远程获取数据                  | boolean               | —                      | false       |
| loading-text        | 	远程加载时显示的文字                  | string	               | —                      | 加载中      |
| no-data-text        | 搜索条件无匹配时显示的文字              | string                | —                       | 无数据     |
| popper-append-to-body | 是否将弹出框插入至 body 元素。</br>在弹出框的定位出现问题时，可将该属性设置为 false   | boolean  | —   | true |
| maxHeight           |  select下拉框的最大高度                 | number                | —                      | 260        |
| loading             | 是否正在从远程获取数据                   | boolean               | —                      | false      |

:::

### Select Events

| 事件名称           | 说明                     | 回调参数 |
| ----------------- | -------------------------- | ------------------------------- |
| change            | 选中值发生变化时触发         | 目前的选中值                     |
| visible-change    | 下拉框出现/隐藏时触发        | 出现则为 true，隐藏则为 false     |
| remove-tag    | 多选模式下移除tag时触发        | 移除的tag值     |
| clear    | 可清空的单选模式下用户点击清空按钮时触发       | -     |
| blur    | 当 input 失去焦点时触发        | (event: Event)     |
| focus   | 当 input 获得焦点时触发        | (event: Event)     |
