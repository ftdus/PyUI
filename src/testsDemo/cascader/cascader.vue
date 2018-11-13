<template>
  <div class="container">
    <div class="demo-box">
      <h3 class="demo-box__title">基础用法</h3>
      <p class="demo-box__desc">click触发子菜单与hover触发子菜单</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :placeholder="'click触发'"
          :options="demoOptions1" @blur="logBlur"
          @focus="logFocus" @change="logChange"
          @active-item-change="logActiveItemChange"
          clearable mune-class="demo-mune demo-mune2"></py-cascader>
        <py-cascader class="demo-cascader" :placeholder="'hover触发'"
          :options="demoOptions1" :trigger-type="'hover'"
          @change="logChange" @active-item-change="logActiveItemChange"></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">禁用选项</h3>
      <p class="demo-box__desc">通过在数据源中设置 disabled 字段来声明该选项是禁用的</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions2"></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">仅显示最后一级</h3>
      <p class="demo-box__desc">可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。
        属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions2"
          :show-all-levels="false"></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">默认值</h3>
      <p class="demo-box__desc">通过value字段（或者v-model），以数组的形式设置默认值</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions1" v-model="defaultValues"
          @input="selectData"></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">选择即改变</h3>
      <p class="demo-box__desc">点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions1" change-on-select
          @change="logChange" @active-item-change="logActiveItemChange"></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">禁止使用</h3>
      <p class="demo-box__desc">设置disabled属性，让选择器禁止使用</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions1"
          change-on-select disabled></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">size改变大小</h3>
      <p class="demo-box__desc">设置size属性，让选择器改变默认大小，可选值为 mini、small、medium</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions1" size="mini"
          change-on-select></py-cascader>
        <py-cascader class="demo-cascader" :options="demoOptions1" size="small"
          change-on-select></py-cascader>
        <py-cascader class="demo-cascader" :options="demoOptions1" size="medium"
          change-on-select></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">动态加载次级选项</h3>
      <p class="demo-box__desc">当选中某一级时，动态加载该级下的选项。本例的选项数据源在初始化时
        不包含城市数据。利用active-item-change事件，可以在用户点击某个省份时拉取该省份下的城市数据</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" :options="demoOptions3"
          @active-item-change="loadOptions" :props="demoOptions3Props"></py-cascader>
      </div>
    </div>

    <div class="demo-box">
      <h3 class="demo-box__title">可搜索</h3>
      <p class="demo-box__desc">可以快捷地搜索选项并选择。</p>
      <div class="demo-box__cascader-box">
        <py-cascader class="demo-cascader" placeholder="试试搜索：组件" filterable :debounce="1000"
          :options="demoOptions2"></py-cascader>
      </div>
    </div>
  </div>
</template>
<script>
import PyCascader from '../../components/cascader';
import {
  demoOptions1,
  demoOptions2,
  demoOptions3,
  demoOptions3Props,
} from './mock';

export default {
  components: {
    'py-cascader': PyCascader,
  },
  data() {
    return {
      demoOptions1,
      demoOptions2,
      demoOptions3,
      demoOptions3Props,
      defaultValues: ['zhinan', 'shejiyuanze', 'yizhi'],
    };
  },
  methods: {
    selectData(values) {
      console.log(values);
    },
    logBlur(event) {
      console.log('blur');
      console.log(event);
    },
    logFocus(event) {
      console.log('logFocus');
      console.log(event);
    },
    logChange(values) {
      console.log('change');
      console.log(values);
    },
    logActiveItemChange(values) {
      console.log('active-item-change');
      console.log(values);
    },
    loadOptions(values) {
      console.log('active-item-change');
      console.log(values);
      if (values.indexOf('江苏') !== -1) {
        setTimeout(() => {
          this.demoOptions3[0].cities = [
            {
              myValue: '苏州',
              myLabel: '苏州',
            },
            {
              myValue: '温州',
              myLabel: '温州',
            },
          ];
        }, 1000);
      } else if (values.indexOf('深圳') !== -1) {
        setTimeout(() => {
          this.demoOptions3[1].cities[0].cities = [
            {
              myValue: '宝安',
              myLabel: '宝安',
            },
            {
              myValue: '福田',
              myLabel: '福田',
            },
          ];
        }, 1000);
      }
    },
    beforeFilter(str) {
      console.log(`beforeFilter： ${str}`);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('stop filter'));
        }, 2000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 400px 30px;
}
.demo-box {
  margin: 30px 0px;
  &__title {
    margin: 10px 0px;
  }
  &__desc {
    margin: 10px 0px;
  }
  &__cascader-box {
    display: flex;
  }
}
.demo-cascader {
  margin-right: 100px;
}
</style>
