<style lang='scss'>
.demo {
    padding: 10px;
    margin-bottom: 20px;
    h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .py-button {
        margin-left: 10px;
    }
    & .py-button-group .py-button {
        margin-left: 0;
    }
}
.py-button {
    &-box {
        padding: 10px;
        border: 1px solid #eee;
    }
    &-group {
        margin: 10px;
    }
}
</style>
<template>
  <div class='demo'>
    <h3>基础用法</h3>
    <div class="py-button-box">
      <py-button size="large" @click="handleClick">large</py-button>
      <py-button size="default">default</py-button>
      <py-button size="small">small</py-button>
      <br><br>
      <py-button>default</py-button>
      <py-button type="primary">primary</py-button>
      <py-button type="dashed">dashed</py-button>
      <py-button type="text">text</py-button>
      <br><br>
      <py-button type="info">按钮</py-button>
      <py-button type="success">按钮</py-button>
      <py-button type="warning">按钮</py-button>
      <py-button type="error">按钮</py-button>
    </div>

    <h3>按钮形状</h3>
    <div class="py-button-box">
      <py-button shape="circle" icon="icon-search"></py-button>
      <py-button shape="circle" icon="icon-search">search</py-button>
      <py-button icon="icon-search">search</py-button>
      <py-button shape="circle">search</py-button>
    </div>

    <h3>禁用状态</h3>
    <div class="py-button-box" id="dis">
      <py-button>default</py-button>
      <py-button disabled>default</py-button>
      <br><br>
      <py-button type="primary">primary</py-button>
      <py-button type="primary" disabled>primary</py-button>
      <br><br>
      <py-button type="dashed">dashed</py-button>
      <py-button type="dashed" disabled>dashed</py-button>
      <br><br>
      <py-button type="text">text</py-button>
      <py-button type="text" disabled>text</py-button>
    </div>

    <h3>长按钮</h3>
    <div class="py-button-box">
      <py-button long>按钮</py-button>
      <br><br>
      <py-button type="success" long>按钮</py-button>
    </div>

    <h3>加载中</h3>
    <div class="py-button-box">
      <py-button type="primary" :loading="true">加载中</py-button>
    </div>

    <h3>按钮组</h3>
    <div class="py-button-box">
      <py-button-group>
        <py-button>按钮</py-button>
        <py-button>按钮</py-button>
      </py-button-group>
      <br>
      <py-button-group>
        <py-button type="primary" icon="icon-return">上一页</py-button>
        <py-button type="primary" icon="icon-entry" class="py-icon--right">下一页</py-button>
      </py-button-group>
      <py-button-group>
        <py-button type="primary" icon="icon-brush"></py-button>
        <py-button type="primary" icon="icon-share"></py-button>
        <py-button type="primary" icon="icon-setup"></py-button>
      </py-button-group>
    </div>
  </div>
</template>

<script>
import PYButton from '../../components/button';
import PYButtonGroup from '../../components/buttonGroup';

export default {
  components: {
    'py-button': PYButton,
    'py-button-group': PYButtonGroup,
  },
  methods: {
    handleClick() {
      console.log('large button');
    },
  },
};

</script>

