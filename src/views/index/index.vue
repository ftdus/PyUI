<template>
    <div>
        <!-- <py-layout class="layout">
            <py-header class="header">Header</py-header>
            <py-content class="content">Main</py-content>
        </py-layout> -->

        <py-layout>
            <py-side width="200px">side</py-side>
            <py-layout>
                <py-header>Header</py-header>
                <py-content>Main</py-content>
                <py-footer>Footer</py-footer>
            </py-layout>
        </py-layout>

    </div>
</template>
<script>
import PyLayout from "../../components/layout/index.js";
import PyHeader from "../../components/header/index.js";
import PyFooter from "../../components/footer/index.js";
import PyContent from "../../components/content/index.js";
import PySide from "../../components/side/index.js";

export default {
  components: {
    PyLayout,
    PyHeader,
    PyFooter,
    PyContent,
    PySide
  }
};
</script>

<style>
  .py-header, .py-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .py-side {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .py-content {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .py-layout {
    margin-bottom: 40px;
  }
  
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  } */
  
  /* .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
