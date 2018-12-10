## scroll 无限滚动

<style>
  .test-card {
    height: 100px;
    border: 1px solid #dcdee2;
    border-color: #e8eaec;
    text-align: center;
    padding: 40px 0;
    line-height: 1;
    margin: 10px 0;
  }
</style>

<script>

  const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  export default {
    data() {
      return {
        list1: testList.map(v => v),
        list2: testList.map(v => v),
        list3: testList.map(v => v),
      };
    },
    methods: {
      handleReachTop(done) {
          setTimeout(() => {
            const first = this.list1[0];
            for (let i = 1; i < 11; i++) {
              this.list1.unshift(first - i);
            }
            done();
          }, 2000);
      },
      handleReachBottom(done) {
          setTimeout(() => {
            const last = this.list2[this.list2.length - 1];
            for (let i = 1; i < 11; i++) {
              this.list2.push(last + i);
            }
            done();
          }, 2000);
      },
      handleReachEdge(done, dir) {
          setTimeout(() => {
            if (dir > 0) {
              const first = this.list3[0];
              for (let i = 1; i < 11; i++) {
                this.list3.unshift(first - i);
              }
            } else {
              const last = this.list3[this.list3.length - 1];
              for (let i = 1; i < 11; i++) {
                this.list3.push(last + i);
              }
            }
            done(this.performSome);
          }, 2000);
      },
      performSome() {
        console.log('performSome');
      },
    },
  };
</script>

### 代码示例1 -- 顶端触发

:::demo

```html
<template>
  <py-scroll :on-reach-top="handleReachTop">
    <div class="test-card" v-for="(item, index) in list1" :key="index">Content {{item}}</div>
  </py-scroll>
</template>
<script>
  export default {
    data() {
      return {
        list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      };
    },
    methods: {
      handleReachTop(done) {
          setTimeout(() => {
            const first = this.list1[0];
            for (let i = 1; i < 11; i++) {
              this.list1.unshift(first - i);
            }
            done();
          }, 2000);
      },
    },
  };
</script>

```

:::

### 代码示例2 -- 底部触发
:::demo

```html
<template>
  <py-scroll :on-reach-bottom="handleReachBottom">
    <div class="test-card" v-for="(item, index) in list2" :key="index">Content {{item}}</div>
  </py-scroll>
</template>
<script>
  export default {
    data() {
      return {
        list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      };
    },
    methods: {
      handleReachBottom(done) {
          setTimeout(() => {
            const last = this.list2[this.list2.length - 1];
            for (let i = 1; i < 11; i++) {
              this.list2.push(last + i);
            }
            done();
          }, 2000);
      },
    },
  };
</script>
```

:::

### 代码示例3 -- 边缘触发
:::demo

```html
<template>
  <py-scroll :on-reach-edge="handleReachEdge">
    <div class="test-card" v-for="(item, index) in list3" :key="index">Content {{item}}</div>
  </py-scroll>
</template>
<script>
  export default {
    data() {
      return {
        list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      };
    },
    methods: {
      handleReachEdge(done, dir) {
          setTimeout(() => {
            if (dir > 0) {
              const first = this.list3[0];
              for (let i = 1; i < 11; i++) {
                this.list3.unshift(first - i);
              }
            } else {
              const last = this.list3[this.list3.length - 1];
              for (let i = 1; i < 11; i++) {
                this.list3.push(last + i);
              }
            }
            done(this.performSome);
          }, 2000);
      },
      performSome() {
        console.log('performSome');
      },
    },
  };
</script>
```

:::

### Attributes

| 参数             | 说明                                                             | 类型           | 默认值    |
| ---------------- | ---------------------------------------------------------------- | -------------- | --------- |
| loadText         | 进入加载状态时的说明文字                                         | string         | 加载中... |
| height           | scroll组件的高度                                                 | number, string | 300       |
| distance-to-edge | 从边缘到触发回调的距离。如果是负的，取绝对值。值最好在 24 以下。 | number, string | [20,  20] |

### Functions

| 参数            | 说明                   | 类型     | 默认值 |
| --------------- | ---------------------- | -------- | ------ |
| on-reach-top    | 滚动至顶部时触发       | function | -      |
| on-reach-bottom | 滚动至底部时触发       | function | -      |
| on-reach-edge   | 滚动至顶部或底部时触发 | function | -      |

### slots

| 名称 | 说明         |
| ---- | ------------ |
| 无   | 自定义的内容 |

### Function => on-reach-top 

| 函数名称     | 默认参数 | 所属类型 |
| ------------ | -------- | -------- |
| on-reach-top | done     | function |

### Function => on-reach-bottom 

| 函数名称        | 默认参数 | 所属类型 |
| --------------- | -------- | -------- |
| on-reach-bottom | done     | function |

### Function => on-reach-edge 

| 函数名称      | 默认参数  | 所属类型 |
| ------------- | --------- | -------- |
| on-reach-edge | done      | function |
|               | direction | number   |

### 参数说明 
| 参数名称  | 说明一                                 | 说明二                                                     |
| --------- | -------------------------------------- | ---------------------------------------------------------- |
| done      | 调用该函数，组件会为下一轮操作做好准备 | 该函数还可以接受一些函数作为参数，会在组件结束该轮之前调用 |
| direction | 用作判断滚动的方向, 值为: 1 或者 -1    | -                                                          |

