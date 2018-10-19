<style lang="scss" scoped>
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
</style>

<template>
    <div class="py-grid">
        <div class="demo">
            <div class="title">基础用法</div>
            <div class="demo-box">
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
            <div class="demo-box">
                <Row gutter="16">
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
    </div>
</template>
<script>
import Grid from "../../components/grid/index";
export default {
  components: {
    Row: Grid.Row,
    Col: Grid.Col
  }
};
</script>

