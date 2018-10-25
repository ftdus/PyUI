<template>
  <div class='demo'>
    <h3>示例</h3>
    <div class="py-button-box">
      <py-divider>写你</py-divider>
      <p>你脖子扬起来 看云 云就散了 看雨 雨就收了 看我 我就酥了</p>
      <py-divider />
      <p>你是天地生的 美得超越人形</p>
      <py-divider dashed />
      <p>世间两种罪恶 你笑是一种 你不笑是另外一种</p>
      <py-divider orientation="left">水平分割线</py-divider>
      <p>默认为水平分割线，可在中间加入文字。</p>
    </div>
    <br/>
    <div class="py-button-box">
      text
      <py-divider type="vertical" />
      <a href="#">Link</a>
      <py-divider type="vertical" />
      <a href="#">Link</a>
      <py-divider orientation="left">垂直分割线</py-divider>
      <p>使用 type="vertical" 设置为行内的垂直分割线。</p>
    </div>
    <br/>

    <div class="py-button-box">
      <py-divider orientation="left">下雨</py-divider>
      <p>一场大雨这城市就陌生了 一见到你我就又是全新的了</p>
      <py-divider orientation="right">见你</py-divider>
      <p>立秋傍晚从河对岸吹来的风 二十来岁笑起来要人命的你</p>
      <py-divider orientation="left">标题位置</py-divider>
      <p>修改分割线标题的位置。</p>
    </div>
    <br/>

    <div class="py-button-box">
      属性：type
      <py-divider type="vertical" />
      说明：水平还是垂直类型，可选值为 horizontal 或 vertical
      <py-divider type="vertical" />
      类型：String
      <py-divider type="vertical" />
      默认值：horizontal
      <py-divider />
      属性：orientation
      <py-divider type="vertical" />
      说明：分割线标题的位置，可选值为 left、right 或 center
      <py-divider type="vertical" />
      类型：String
      <py-divider type="vertical" />
      默认值：center
      <py-divider />
      属性：dashed
      <py-divider type="vertical" />
      说明：是否虚线
      <py-divider type="vertical" />
      类型：Boolean
      <py-divider type="vertical" />
      默认值：false
    </div>
  </div>
</template>

<script>
import PYDivider from "../../components/divider";

export default {
  components: {
    "py-divider": PYDivider
  },
  methods: {
    handleClick() {
      console.log("large button");
    }
  }
};
</script>

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
}
.py-button {
  &-box {
    border: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
