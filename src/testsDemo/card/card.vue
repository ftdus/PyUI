<template>
  <div class='contains'>
    <h3>简单卡片 默认带阴影</h3>
    <div class="py-card-box">
      <py-card class="box-card">
        <div v-for="item in 4" :key="item" class="card-text card-item">
          {{'卡片内容 ' + item }}
        </div>
      </py-card>
    </div>
    <h3>基本卡片</h3>
    <div class="py-card-box">
      <py-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="position: relative;top: 10px;">卡片名称</span>
          <py-button class="card-button" shape="circle">按 钮</py-button>
        </div>
        <div v-for="item in 4" :key="item" class="card-text card-item">
          {{'卡片内容 ' + item }}
        </div>
      </py-card>
    </div>
    <h3>带图片卡片</h3>
    <div class="py-card-box">
      <py-card :body-style="{ padding: '0px' }" class="box-card">
        <img src="../../assets/demo-card-img.png" class="card-image">
        <div style="padding: 14px;">
          <span style="position: relative;top: 25px;">mountainc44</span>
          <div class="card-bottom clearfix">
            <!-- <span class="card-time">{{ currentDate }}</span> -->
            <py-button shape="circle" class="card-button">按 钮</py-button>
          </div>
        </div>
      </py-card>
    </div>
    <h3>带阴影卡片</h3>
    <div class="py-card-box">
      <py-card shadow="always" class="box-card">
        显示阴影
      </py-card>
    </div>
    <h3>鼠标悬浮带阴影</h3>
    <div class="py-card-box">
      <py-card shadow="hover" class="box-card">
        鼠标悬浮带阴影
      </py-card>
    </div>
    <h3>不带阴影卡片</h3>
    <div class="py-card-box">
      <py-card shadow="never" class="box-card">
        无阴影
      </py-card>
    </div>
  </div>
</template>

<script>
import PYCard from "../../components/card";
import PYButton from "../../components/button";

export default {
  components: {
    "py-card": PYCard,
    "py-button": PYButton,
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    handleClick() {
      console.log("large button");
    },
  },
};
</script>

<style lang='scss' scoped>
  $prefixCls: "card";
  .contains {
    padding: 10px;
    margin-bottom: 20px;
    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
  .py-card {
    &-box {
      padding: 10px;
      border: 1px solid #eee;
    }
  }
  .box-card {
    width: 480px;
    .#{$prefixCls}-text {
      font-size: 14px;
    }
    .#{$prefixCls}-item {
      padding: 18px 0;
    }
    .#{$prefixCls}-button {
      float: right;
    }
    .#{$prefixCls}-image {
      width: 100%;
      display: block;
    }
    .#{$prefixCls}-time {
      font-size: 13px;
      color: #999;
    }
    .clearfix {
      &:before,
      &:after {
        display: table;
        content: "";
      }
      &:after {
        clear: both;
      }
    }
  }
</style>
