<template>
  <header class="header">
    <div class="container">
      <h1>PyUI</h1>
      <ul class="nav">
        <!-- <li>home</li> -->
        <li>
          <router-link active-class="active" to="/component">组件</router-link>
        </li>
        <li class="lang-item">中文</li>
        <li class="theme-item">主题</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
$primaryColor: #409eff;
$textColor: #606266;

.header {
  position: fixed;
  top: 0;
  height: 60px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  z-index: 1;

  .container {
    width: 1140px;
    margin: 0 auto;

    h1 {
      float: left;
      font-size: 24px;
      color: $primaryColor;
    }
  }
  .nav {
    float: right;
    display: flex;
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
