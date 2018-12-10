## Pagination 分页

数据量过多时，使用分页分解数据

### 基础用法

:::demo 设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。`prev`表示上一页，`next`为下一页，`pager`表示页码列表，`total`表示总条目数，`jumper`表示跳转到哪一页。

```html
  <div class="demo-simple">
    <div class="demo-box" style="width: 45%">
      <span class="demo-label">页数较少时的效果</span>
      <py-pagination
        :page-count="6"
        layout="pager"
        simple
      ></py-pagination>
    </div>
    <div class="demo-box demo-box1" style="width: 55%">
      <span class="demo-label">大于 7 页时的效果</span>
      <py-pagination
        :page-count="8"
        :pager-count="7"
        layout="pager"
        simple
      ></py-pagination>
    </div>
  </div>
```
:::

### 页数较多时，设置最大按钮数

:::demo 默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过pager-count属性可以设置最大页码按钮数。
```html
  <div class="demo-box">
    <py-pagination
      :page-count="100"
      :pager-count="11"
      layout="pager,sizes"
      simple
    ></py-pagination>
  </div>
```
:::

### 带有背景色的分页

:::demo 设置simple属性可以为分页按钮添加背景色
```html
  <div class="demo-box">
    <py-pagination
      :page-count="10"
      :pager-count="7"
      layout="pager"
      :simple="false"
    ></py-pagination>
  </div>
```
:::

### 附加功能

:::demo
```html
  <div class="demo__more">
    <div class="demo-box">
      <span class="demo-label">显示总数:</span>
      <py-pagination
        :page-count="10"
        :pager-count="7"
        layout="total, pager"
        simple
        :total="100"
      ></py-pagination>
    </div>
    <div class="demo-box">
      <span class="demo-label">直接前往:</span>
      <py-pagination
        :page-count="10"
        :pager-count="7"
        layout="pager, jumper"
        simple
        :total="100"
      ></py-pagination>
    </div>
    <div class="demo-box demo-box1">
      <span class="demo-label">完整功能:</span>
      <py-pagination
        :page-count="5"
        :pager-count="5"
        layout="total, pager, sizes, jumper"
        simple
        :total="100"
      ></py-pagination>
    </div>
  </div>
```
:::

<style>
  .demo-block.demo-box {
    padding: 0;
    width: 100%;
  }
  .demo-box .source.first {
    padding: 0;
  }
  .source .demo-box {
    width: 100%;
    text-align: center;
  }
  .cmp-highlight {
    text-align: left;
  }
  .demo-box {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  .demo-simple .demo-box {
    border-right: solid 1px #EFF2F6;
    width: 50%;
  }
  .demo-label {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .source.last {
    padding: 0;
  }
  .demo__more .demo-box {
    text-align: left;
    padding: 30px 24px;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }
  .demo__more .demo-label {
    display: inline-block;
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }
  .demo__more .demo-label + .py-pagination {
    float: right;
    width: 80%;
    margin: 5px 20px 0 0;
  }
  .demo-box.demo-box1 {
    border: none;
  }
</style>

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| simple | 是否为简约模式（分页数没有背景色） | boolean | — | true |
| total | 总条目数 | number | — | — |
| page-count | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number | — | — |
| pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 5 且小于等于 21 的奇数 | 7 |
| current-page | 当前页数，支持 .sync 修饰符 | number | — | 1 |
| layout | 组件布局，子组件名用逗号分隔| String | `prev`, `pager`, `next`, `jumper`,  `total`, `slot` | 'prev, pager, next, jumper, total'  |
| prev-text | 替代图标显示的上一页文字 | string | — | — |
| next-text | 替代图标显示的下一页文字 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| page-size | 每页显示条目个数 | number | - | 10 |
| page-sizes | 每页显示个数选择器的选项设置 | number[] | - | [10, 20, 30, 40, 50, 100] |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| current-change | currentPage 改变时会触发 | 当前页 |
| prev-click | 用户点击上一页按钮改变当前页后触发 | 当前页 |
| next-click | 用户点击下一页按钮改变当前页后触发 | 当前页 |
| size-change | pageSize 改变时会触发 | 每页条数以及当前页码 |

### Slot
| name | 说明 |
|------|--------|
| — | 自定义内容，需要在 `layout` 中列出 `slot` |