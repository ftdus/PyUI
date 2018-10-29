<style lang="scss">
$prefixClspy-col: 'py-col';
$prefixClspy-row: 'py-row';
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
  .#{$prefixClspy-col} {
    background-color: rgba(0, 153, 229, 0.9);
    &:nth-child(odd) {
      background-color: rgba(0, 153, 229, 0.7);
    }
  }
}
.demo-bgc2 {
  .#{$prefixClspy-row} {
    background-color: #eee;
  }
}
.demo-box-crevice {
  .#{$prefixClspy-row} {
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
    <div class="py-grid-demo">
        <div class="demo">
            <div class="title">基础用法</div>
            <div class="demo-box demo-bgc">
                <py-row>
                    <py-col span="12">py-col-12</py-col>
                    <py-col span="12">py-col-12</py-col>
                </py-row>
                <br>
                <py-row>
                    <py-col span="8">py-col-8</py-col>
                    <py-col span="8">py-col-8</py-col>
                    <py-col span="8">py-col-8</py-col>
                </py-row>
                <br>
                <py-row>
                    <py-col span="6">py-col-6</py-col>
                    <py-col span="6">py-col-6</py-col>
                    <py-col span="6">py-col-6</py-col>
                    <py-col span="6">py-col-6</py-col>
                </py-row>
                <br>
                <py-row>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">区块间隔</div>
            <div class="demo-box demo-box-crevice">
                <py-row :crevice="8">
                    <py-col span="6">
                        <div>py-col-6</div>
                    </py-col>
                    <py-col span="6">
                        <div>py-col-6</div>
                    </py-col>
                    <py-col span="6">
                        <div>py-col-6</div>
                    </py-col>
                    <py-col span="6">
                        <div>py-col-6</div>
                    </py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">栅格顺序(flex)</div>
            <div class="demo-box demo-bgc">
                <py-row type="flex">
                    <py-col span="6" order="1">1</py-col>
                    <py-col span="6" order="2">2</py-col>
                    <py-col span="6" order="3">3</py-col>
                    <py-col span="6" order="4">4</py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">栅格排序</div>
            <div class="demo-box demo-bgc">
                <py-row>
                    <py-col span="18" push="6">18</py-col>
                    <py-col span="6" pull="18">6</py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">左右偏移</div>
            <div class="demo-box demo-bgc">
                <py-row>
                    <py-col span="8">py-col-8</py-col>
                    <py-col span="8" offset="8">py-col-8 | offset-8</py-col>
                </py-row>
                <br>
                <py-row>
                    <py-col span="6" offset="8">py-col-8 | offset-8</py-col>
                    <py-col span="6" offset="4">py-col-8 | offset-4</py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">Flex布局</div>
            <div class="demo-box demo-bgc demo-bgc2">
                <p class="title">start</p>
                <py-row type="flex" justify="start">
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                </py-row>
                <br>
                <p class="title">end</p>
                <py-row type="flex" justify="end">
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                </py-row>
                <br>
                <p class="title">center</p>
                <py-row type="flex" justify="center">
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                </py-row>
                <br>
                <p class="title">space-between</p>
                <py-row type="flex" justify="space-between">
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                </py-row>
                <br>
                <p class="title">space-around</p>
                <py-row type="flex" justify="space-around">
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                    <py-col span="4">py-col-4</py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">Flex对齐</div>
            <div class="demo-box demo-bgc demo-bgc2">
                <p>顶部对齐</p>
                <py-row type="flex" justify="center" align="top" class="code-py-row-bg">
                    <py-col span="4"><p style="height: 80px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 30px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 100px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 60px">py-col-4</p></py-col>
                </py-row>
                <p>底部对齐</p>
                <py-row type="flex" justify="center" align="bottom" class="code-py-row-bg">
                    <py-col span="4"><p style="height: 80px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 30px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 100px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 60px">py-col-4</p></py-col>
                </py-row>
                <p>居中对齐</p>
                <py-row type="flex" justify="center" align="middle" class="code-py-row-bg">
                    <py-col span="4"><p style="height: 80px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 30px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 100px">py-col-4</p></py-col>
                    <py-col span="4"><p style="height: 60px">py-col-4</p></py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">响应式布局</div>
            <div class="demo-box demo-bgc">
                <py-row>
                    <py-col :xs="2" :sm="4" :md="6" :lg="8">py-col</py-col>
                    <py-col :xs="20" :sm="16" :md="12" :lg="8">py-col</py-col>
                    <py-col :xs="2" :sm="4" :md="6" :lg="8">py-col</py-col>
                </py-row>
            </div>
        </div>
        <div class="demo">
            <div class="title">其他属性的响应式</div>
            <div class="demo-box demo-bgc">
                <py-row>
                    <py-col :xs="{ span: 5, offset: 1 }"
                        :lg="{ span: 6, offset: 2 }">py-col</py-col>
                    <py-col :xs="{ span: 11, offset: 1 }"
                        :lg="{ span: 6, offset: 2 }">py-col</py-col>
                    <py-col :xs="{ span: 5, offset: 1 }"
                        :lg="{ span: 6, offset: 2 }">py-col</py-col>
                </py-row>
            </div>
        </div>
    </div>
</template>
<script>
import PyRow from '../../components/row/index';
import PyCol from '../../components/col/index';

export default {
  name: 'py-grid-demo',
  components: {
    'py-row': PyRow,
    'py-col': PyCol,
  },
};
</script>
