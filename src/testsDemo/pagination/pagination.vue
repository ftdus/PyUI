<template>
  <div class="py-pagination-demo">
    <h3>Simple 简约模式</h3>
    <div class="demo__simple">
      <div class="demo__con">
        <span>页数较少时:</span>
        <py-pagination
        :page-count="6"
        layout="pager"
        simple
      ></py-pagination>
      </div>
      <div class="demo__con">
        <span>页数较多时，设置最大按钮数</span>
        <py-pagination
          :page-count="10"
          :pager-count="7"
          layout="pager"
          simple
        ></py-pagination>
      </div>
    </div>

    <h3>非简约模式（带有背景色）</h3>
    <div class="demo__nosimple">
      <py-pagination
        class="demo__con"
        :page-count="10"
        :pager-count="7"
        layout="pager"
      ></py-pagination>
    </div>
    <h3>更多功能</h3>
    <div class="demo__more">
      <div class="demo__con">
        <span>显示总数:</span>
        <py-pagination
          :page-count="10"
          :pager-count="7"
          layout="total, pager"
          simple
          :total="100"
        ></py-pagination>
      </div>
      <div class="demo__con">
        <span>直接前往:</span>
        <py-pagination
          :page-count="10"
          :pager-count="7"
          layout="pager, jumper"
          simple
          :total="100"
        ></py-pagination>
      </div>
      <div class="demo__con">
        <span>disabled:</span>
        <py-pagination
          :page-count="10"
          :pager-count="7"
          layout="pager, jumper"
          simple
          disabled
          :total="100"
        ></py-pagination>
      </div>
      <div class="demo__con">
        <span>完整功能:</span>
        <py-pagination
          :page-count="10"
          :pager-count="7"
          layout="total, pager, jumper"
          simple
          :total="100"
        ></py-pagination>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pagination-demo',
};
</script>

<style lang="scss" scoped>
.py-pagination-demo {
  margin: 30px;
  & h3 {
    margin: 20px 0 10px 0;
  }
  & .demo__con {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    & span {
      margin-right: 10px;
    }
  }
  & .demo__simple,
  & .demo__nosimple,
  & .demo__more {
    padding: 20px 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
  }
  & .demo__more {
    & .demo__con {
      padding: 10px 0;
    }
  }
}
</style>
