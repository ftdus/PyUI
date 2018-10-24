<style lang="scss" scoped>
$prefixClsCol: "py-col";
$prefixClsRow: "py-row";
.demo {
  padding: 10px;
}
.title {
  line-height: 30px;
}
.demo-box {
  border: 1px solid #eee;
  padding: 10px;
}
.demo-bgc {
  .#{$prefixClsCol} {
    background-color: rgba(0, 153, 229, 0.9);
    &:nth-child(odd) {
      background-color: rgba(0, 153, 229, 0.7);
    }
  }
}
.demo-bgc2 {
  .#{$prefixClsRow} {
    background-color: #eee;
  }
}
.demo-box-crevice {
  .#{$prefixClsRow} {
    > div > div {
      padding: 10px 0;
      background-color: rgba(0, 153, 229, 0.9);
      &:nth-child(odd) {
        background-color: rgba(0, 153, 229, 0.7);
      }
    }
  }
}
</style>

<template>
    <div class="py-grid">
        <div class="demo">
            <div class="title">基础用法</div>
            <div class="demo-box demo-bgc">
                <Row>
                    <Col span="12">col-12</Col>
                    <Col span="12">col-12</Col>
                </Row>
                <br>
                <Row>
                    <Col span="8">col-8</Col>
                    <Col span="8">col-8</Col>
                    <Col span="8">col-8</Col>
                </Row>
                <br>
                <Row>
                    <Col span="6">col-6</Col>
                    <Col span="6">col-6</Col>
                    <Col span="6">col-6</Col>
                    <Col span="6">col-6</Col>
                </Row>
                <br>
                <Row>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
            </div>
        </div>
        <div class="demo">
            <div class="title">区块间隔</div>
            <div class="demo-box demo-box-crevice">
                <Row :crevice="8">
                    <Col span="6">
                        <div>col-6</div>
                    </Col>
                    <Col span="6">
                        <div>col-6</div>
                    </Col>
                    <Col span="6">
                        <div>col-6</div>
                    </Col>
                    <Col span="6">
                        <div>col-6</div>
                    </Col>
                </Row>
            </div>
        </div>
        <br>
        <div class="demo">
            <div class="title">栅格顺序(flex)</div>
            <div class="demo-box demo-bgc">
                <Row type="flex">
                    <Col span="6" order="1">1</Col>
                    <Col span="6" order="2">2</Col>
                    <Col span="6" order="3">3</Col>
                    <Col span="6" order="4">4</Col>
                </Row>
            </div>
        </div>
        <div class="demo">
            <div class="title">栅格排序</div>
            <div class="demo-box demo-bgc">
                <Row>
                    <Col span="18" push="6">18</Col>
                    <Col span="6" pull="18">6</Col>
                </Row>
            </div>
        </div>
        <div class="demo">
            <demo class="title">左右偏移</demo>
            <div class="demo-box demo-bgc">
                <Row>
                    <Col span="8">col-8</Col>
                    <Col span="8" offset="8">col-8 | offset-8</Col>
                </Row>
                <br>
                <Row>
                    <Col span="6" offset="8">col-8 | offset-8</Col>
                    <Col span="6" offset="4">col-8 | offset-4</Col>
                </Row>
            </div>
        </div>
        <div class="demo">
            <div class="title">Flex布局</div>
            <div class="demo-box demo-bgc demo-bgc2">
                <p class="title">start</p>
                <Row type="flex" justify="start">
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <br>
                <p class="title">end</p>
                <Row type="flex" justify="end">
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <br>
                <p class="title">center</p>
                <Row type="flex" justify="center">
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <br>
                <p class="title">space-between</p>
                <Row type="flex" justify="space-between">
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <br>
                <p class="title">space-around</p>
                <Row type="flex" justify="space-around">
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
            </div>
        </div>
        <div class="demo">
            <div class="title">Flex对齐</div>
            <div class="demo-box demo-bgc demo-bgc2">
                <p>顶部对齐</p>
                <Row type="flex" justify="center" align="top" class="code-row-bg">
                    <Col span="4"><p style="height: 80px">col-4</p></Col>
                    <Col span="4"><p style="height: 30px">col-4</p></Col>
                    <Col span="4"><p style="height: 100px">col-4</p></Col>
                    <Col span="4"><p style="height: 60px">col-4</p></Col>
                </Row>
                <p>底部对齐</p>
                <Row type="flex" justify="center" align="bottom" class="code-row-bg">
                    <Col span="4"><p style="height: 80px">col-4</p></Col>
                    <Col span="4"><p style="height: 30px">col-4</p></Col>
                    <Col span="4"><p style="height: 100px">col-4</p></Col>
                    <Col span="4"><p style="height: 60px">col-4</p></Col>
                </Row>
                <p>居中对齐</p>
                <Row type="flex" justify="center" align="middle" class="code-row-bg">
                    <Col span="4"><p style="height: 80px">col-4</p></Col>
                    <Col span="4"><p style="height: 30px">col-4</p></Col>
                    <Col span="4"><p style="height: 100px">col-4</p></Col>
                    <Col span="4"><p style="height: 60px">col-4</p></Col>
                </Row>
            </div>
        </div>
        <div class="demo">
            <div class="title">响应式布局</div>
            <div class="demo-box demo-bgc">
                <Row>
                    <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                    <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
                    <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                </Row>
            </div>
        </div>
        <div class="demo">
            <div class="title">其他属性的响应式</div>
            <div class="demo-box demo-bgc">
                <Row>
                    <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                    <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                    <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
import { Row, Col } from "../../components/grid/index.js";

export default {
  name: "grid",
  components: {
    Row,
    Col
  }
};
</script>

