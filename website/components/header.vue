<template>
  <py-header class="header">
    <div class="container">
      <h1>PyUI</h1>
      <ul class="nav">
        <!-- <li>home</li> -->
        <li><router-link active-class="active" to="/component">组件</router-link></li>
        <li class="lang-item">中文</li>
        <li class="theme-item">
          主题
        </li>
        <li><theme-controller></theme-controller></li>
      </ul>
    </div>
  </py-header>
</template>

<script>
import ThemeController from './theme-controller.vue';

export default {
  components: {
    ThemeController,
  },
};
</script>

<style lang="scss">
$primaryColor: #ff9800;
$textColor: #606266;

.header {
  position: fixed;
  top: 0;
  height: 60px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.92);
  z-index: 1000;

  .container {
    width: 1140px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    h1 {
      width: 80px;
      height: 60px;
      text-indent: -1000px;
      background: url('../assets/images/logo.png') no-repeat center;
      background-size: 100%;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    li {
      padding: 0 20px;
      color: $textColor;
      a {
        color: $textColor;
      }
      .active {
        position: relative;
        color: $primaryColor;
        &::after {
          content: '';
          width: 20px;
          height: 2px;
          background: $primaryColor;
          position: absolute;
          bottom: -10px;
          left: 50%;
          margin-left: -10px;
        }
      }
    }
  }
}
</style>
