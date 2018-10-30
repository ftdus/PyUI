<template>
    <div class="demo-block">
        <div class="component-info">
            <div class="cmp-source">
                <slot name="source"></slot>
            </div>
            <div class="cmp-highlight" v-show="isShowSource">
                <slot></slot>
                <slot name="highlight"></slot>
            </div>
            <div class="cmp-demo-control" @click="isShowSource = !isShowSource">
                <span>{{isShowSource ? '隐藏代码' : '显示代码'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShowSource: false,
    };
  },
};
</script>

<style lang="scss">
.demo-block {
  width: 100%;

  .component-info {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    .cmp-source {
      padding: 24px;
    }
    .cmp-highlight {
      .description {
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        margin: 10px;
        background-color: #fff;

        p {
          padding: 0;
          margin: 0;
        }

        code {
          color: #5e6d82;
          background-color: #e6effb;
          margin: 0 4px;
          display: inline-block;
          padding: 1px 5px;
          font-size: 12px;
          border-radius: 3px;
          height: 18px;
          line-height: 18px;
        }
      }
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      transition: height 0.2s;

      code.hljs {
        margin-bottom: 0;
      }
    }

    .cmp-demo-control {
      border-top: 1px solid #ebebeb;
      height: 44px;
      text-align: center;
      cursor: pointer;
      span {
        color: #d3dce6;
        font-size: 14px;
        line-height: 44px;
        transition: 0.3s;
      }
    }
  }
}
</style>
