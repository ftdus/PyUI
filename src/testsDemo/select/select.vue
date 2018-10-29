<template>
  <div class="page">
    <h2>选择器不可用状态</h2>
    <p>为py-select设置disabled属性，则整个选择器不可用</p>
    <section>
      <py-select
        v-model="value"
        disabled
        :data="selectData"></py-select>
    </section>

    <h2>普通的select</h2>
    <p>适用广泛的基础单选</p>
    <section>
      <py-select
        v-model="value"
        @change="change"
        @blur="blur"
        @visible-change="visibleChange"
        :data="selectData"></py-select>
    </section>

    <h2>单选时可清空的select</h2>
    <p>适用广泛的基础单选,且可清空</p>
    <section>
      <py-select
        v-model="value"
        @change="change"
        clearable
        @clear="clear"
        :data="selectData"></py-select>
    </section>

    <h2>有禁用选项</h2>
    <p>在py-option中，设定disabled值为 true，即可禁用该选项</p>
    <section>
      <py-select
        v-model="value"
        @change="change"
        @blur="blur"
        :data="selectDisabledData"></py-select>
    </section>

    <h2>可搜索</h2>
    <p>可以利用搜索功能快速查找选项</p>
    <section>
      <py-select
        v-model="value"
        :filterable="true"
        :data="selectData"></py-select>
    </section>

    <h2>可搜索，且自定义搜索函数</h2>
    <p>适用于可以搜索，搜索函数可自定义</p>
    <section>
      <py-select
        v-model="value"
        :filterable="true"
        :filter-method="filterMethod"
        :data="filterData"></py-select>
    </section>

    <h2>基础多选</h2>
    <p>适用性较广的基础多选,v-model值需为数组</p>
    <section>
      <py-select
        v-model="multipleValue"
        :multiple="true"
        :data="selectData"></py-select>
    </section>

    <h2>可多选，可创建</h2>
    <p>适用于需要多选，且可以创建选项，创建的选项，该项value和输入的内容一致</p>
    <section>
      <py-select
        v-model="multipleValue"
        :multiple="true"
        :multipleLimit="3"
        :allow-create="true"
        :filterable="true"
        :data="filterData"></py-select>
    </section>

    <h2>可多选，可创建，可搜索，且搜索函数自定义</h2>
    <p>适用于需要多选，且可以创建选项，创建的选校，value和输入的内容一致，可搜索，搜索函数自定义</p>
    <section>
      <py-select
        v-model="multipleValue"
        :multiple="true"
        :allow-create="true"
        :filterable="true"
        :filter-method="filterMethod"
        :data="filterData"></py-select>
    </section>

    <h2>可多选，可创建，自定义远程搜索方法</h2>
    <p>适用于可多选，可创建选项，选校内容由远程获取；为了启用远程搜索，需要将filterable和remote设置为true</p>
    <section>
      <py-select
        v-model="multipleValue"
        :multiple="true"
        :allow-create="true"
        :filterable="true"
        :loading="remoteLoading"
        remote
        loading-text="加载中"
        :remote-method="remoteMethod"
        :data="remoteData"></py-select>
    </section>
  </div>
</template>

<script>
import PySelect from '@/components/select';

export default {
  components: {
    'py-select': PySelect,
  },
  data() {
    return {
      value: '',
      multipleValue: [],
      selectData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      selectDisabledData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
          disabled: true,
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
          disabled: true,
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      filterData: [
        { value: 0, label: 'Alabama' },
        { value: 1, label: 'Alaska' },
        { value: 2, label: 'Arizona' },
        { value: 3, label: 'Arkansas' },
        { value: 5, label: 'California' },
        { value: 6, label: 'Colorado' },
        { value: 7, label: 'Connecticut' },
        { value: 8, label: 'Delaware' },
        { value: 9, label: 'Florida' },
        { value: 10, label: 'Georgia' },
        { value: 11, label: 'Kentucky' },
        { value: 12, label: 'Ohio' },
        { value: 13, label: 'Oklahoma' },
        { value: 14, label: 'Nebraska' },
      ],
      remoteData: [],
      remoteLoading: false,
    };
  },
  watch: {
    multipleValue(val) {
      console.log('multipleValue:', val);
    },
  },
  methods: {
    clear() {
      console.log('已清空选项');
    },
    blur(e) {
      console.log(e);
    },
    removeTag(val) {
      console.log(val);
    },
    visibleChange(val) {
      console.log(val);
    },
    change(val) {
      console.log(val);
    },
    filterMethod(value, item) {
      if (item.label.indexOf(value) > -1) {
        return true;
      }
      return false;
    },
    remoteMethod(query) {
      if (query === '') {
        this.remoteData = [];
        return;
      }
      this.remoteLoading = true;
      setTimeout(() => {
        this.remoteLoading = false;
        this.remoteData = this.filterData.filter(data => {
          if (data.label.indexOf(query) > -1) {
            return true;
          }
          return false;
        });
      }, 300);
    },
  },
};
</script>

<style lang='scss' scoped>
.page {
  padding: 20px;
  h2 {
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    color: #888;
    margin-bottom: 10px;
  }
  section {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    margin-bottom: 30px;
  }
}
</style>
