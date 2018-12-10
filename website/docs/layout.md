<style scoped>
.py-header,
.py-footer {
  background-color: #ff9900e0;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.py-sider {
  background-color: #ff9900b8;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.py-content {
  background-color: #ffbb54b8;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
## Layout 布局

此组件用于对页面进行布局，对页面进行快速布局搭建。

**`<py-layout>`** : 外层容器。当子元素中包含 *`<py-header>`* 或 *`<py-footer>`* 时，全部子元素会垂直上下排列，否则子元素会水平左右排列

**`<py-header>`** : 顶栏容器。

**`<py-sider>`** : 侧边栏容器。

**`<py-content>`** : 内容区域容器。

**`<py-header>`** : 顶部容器。

<py-alert type="warning" title="提示" :title-icon="true" :closable="false">
注意：该组件采用 flex 布局实现，请注意  <a data-v-11a02437="" href="https://caniuse.com/#search=flex" target="_blank" title="can i use">浏览器兼容性</a>  问题。
</py-alert>

### 常见布局 — Header + Content

::: demo

```html
  <py-layout>
    <py-header>Header</py-header>
    <py-content>Content</py-content>
  </py-layout> 

  <style scoped>
    .py-header,
    .py-footer {
      background-color: #ff9900e0;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .py-sider {
      background-color: #ff9900b8;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .py-content {
      background-color: #ffbb54b8;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  </style>
```

:::

### 常见布局 — Header + Content + Footer

::: demo 样式代码与 `案例一` 相同

```html
  <py-layout>
    <py-header>Header</py-header>
    <py-content>Content</py-content>
    <py-footer>Footer</py-footer>
  </py-layout>
```

:::

### 常见布局 — Sider + Footer

::: demo 样式代码与 `案例一` 相同

```html
  <py-layout>
    <py-sider width="150px">Sider</py-sider>
    <py-content>Content</py-content>
  </py-layout>
```

:::

### 常见布局 — Header + Sider + Content

::: demo 样式代码与 `案例一` 相同

```html
  <py-layout>
    <py-header>Header</py-header>
      <py-layout>
        <py-sider width="150px">Sider</py-sider>
        <py-content>content</py-content>
    </py-layout>
  </py-layout>
```

:::

### 常见布局 — Header + Sider + Footer + Content

::: demo 样式代码与 `案例一` 相同

```html
  <py-layout>
    <py-sider width="200px">Sider</py-sider>
    <py-layout>
      <py-header>Header</py-header>
      <py-content>Content</py-content>
      <py-footer>Footer</py-footer>
    </py-layout>
  </py-layout>
```

:::
