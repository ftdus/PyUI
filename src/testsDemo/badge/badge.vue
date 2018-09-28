<style lang='scss'>
.demo {
  padding: 10px;
  margin-bottom: 20px;
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  &-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
  }
  &-line {
    display: inline-block;
    font-size: 14px;
    color: #1e90ff;
  }
  &-ml100 {
      margin-left: 100px;
  }
  &-myBg {
      background-color: #FFDEAD!important;
  }
}
.py-badge {
    &-box {
        padding: 20px;
        border: 1px solid #eee;
    }
}
</style>
<template>
    <div class='demo'>
        <h3>基础用法</h3>
        <div  class="py-badge-box">
            <pyui-badge content="3">
                <a href="#" class="demo-badge"/>
            </pyui-badge>
        </div>

        <h3>小红点</h3>
        <div  class="py-badge-box">
            <pyui-badge :is-dot="true">
                <a href="#" class="demo-badge"/>
            </pyui-badge>
            <pyui-badge :is-dot="true" class="demo-ml100">
                <a href="#" class="demo-line">这是一个链接</a>
            </pyui-badge>
        </div>

        <h3>设置最大值</h3>
        <div  class="py-badge-box">
            <pyui-badge :content="100" :max="99">
                <a href="#" class="demo-badge"/>
            </pyui-badge>
            <pyui-badge :content="10110" :max="999" class="demo-ml100">
                <a href="#" class="demo-badge"/>
            </pyui-badge>
        </div>

        <h3>自定义背景样式</h3>
        <div  class="py-badge-box">
            <pyui-badge :content="100" :max="99" type="success">
                <a href="#" class="demo-badge"/>
            </pyui-badge>
            <pyui-badge :content="10110" :max="999" className="demo-myBg" class="demo-ml100">
                <a href="#" class="demo-badge"/>
            </pyui-badge>
        </div>

        <h3>独立使用</h3>
        <div  class="py-badge-box">
            <pyui-badge :content="100" :max="99" type="success">
            </pyui-badge>
            <pyui-badge :content="10110" :max="999" className="demo-myBg" class="demo-ml100">
            </pyui-badge>
        </div>

        <h3>自定义内容</h3>
        <div  class="py-badge-box">
            <pyui-badge content="自定义内容">
                <a href="#" class="demo-badge"/>
            </pyui-badge>
            <pyui-badge content="hot" className="demo-myBg">
                <a href="#" class="demo-badge demo-ml100" />
            </pyui-badge>
        </div>

    </div>
</template>

<script>
import PYBadge from "@/components/badge";

export default {
  components: {
    "pyui-badge": PYBadge,
  },
};
</script>

