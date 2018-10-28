<template>
  <div class='contains'>
    <h3>常见布局1 —— Header + Content</h3>
    <div class="py-layout-box">
      <py-layout>
        <py-header>Header</py-header>
        <py-content>Content</py-content>
      </py-layout>
    </div>
    <h3>常见布局2 —— Header + Content + Footer</h3>
    <div class="py-layout-box">
      <py-layout>
        <py-header>Header</py-header>
        <py-content>Content</py-content>
        <py-footer>Footer</py-footer>
      </py-layout>
    </div>
    <h3>常见布局3 —— Sider + Footer</h3>
    <div class="py-layout-box">
      <py-layout>
        <py-sider width="150px">Sider</py-sider>
        <py-content>Content</py-content>
      </py-layout>
    </div>
    <h3>常见布局4 —— Header + Sider + Content</h3>
    <div class="py-layout-box">
      <py-layout>
        <py-header>Header</py-header>
        <py-layout>
          <py-sider width="150px">Sider</py-sider>
          <py-content>content</py-content>
        </py-layout>
      </py-layout>
    </div>
    <h3>常见布局5 —— Header + Sider + Footer + Content</h3>
    <div class="py-layout-box">
      <py-layout>
        <py-sider width="200px">Sider</py-sider>
        <py-layout>
          <py-header>Header</py-header>
          <py-content>Content</py-content>
          <py-footer>Footer</py-footer>
        </py-layout>
      </py-layout>
    </div>
  </div>
</template>

<script>
import PyLayout from '../../components/layout';
import PyHeader from '../../components/header';
import PyFooter from '../../components/footer';
import PyContent from '../../components/content';
import PySider from '../../components/sider';

export default {
  components: {
    'py-card': PyLayout,
    'py-header': PyHeader,
    'py-footer': PyFooter,
    'py-content': PyContent,
    'py-sider': PySider,
  },
};
</script>

<style lang='scss' scoped>
$prefixCls: 'layout';
.contains {
  padding: 10px;
  margin-bottom: 20px;
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

.py-layout {
  &-box {
    padding: 10px;
    border: 1px solid #eee;
  }
}

.py-header,
.py-footer {
  background-color: #b3d1b3eb;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.py-sider {
  background-color: #d8e6d3e0;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.py-content {
  background-color: #e8ecc0c2;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .py-layout {
  margin-bottom: 40px;
}

.py-layout:nth-child(5) .py-sider,
.py-layout:nth-child(6) .py-sider {
  line-height: 260px;
}

.py-layout:nth-child(7) .py-sider {
  line-height: 320px;
}
</style>
