<template>
  <div class="page">
    <section>
      <h2>分组</h2>
      <py-select
        v-model="value"
        filterable
        allow-create
        multiple
        :multipleLimit="3"
        placeholder="请选择"
      >
        <py-option-group
          v-for="(optionGroup, key) in groupOptions"
          :label="optionGroup.label"
          :key="key"
        >
          <py-option
            v-for="(option, key) in optionGroup.options"
            :key="key"
            :value="option.value"
            :label="option.label"
            :disabled="option.disabled"
          >
            <span class="option-label" style="float: left;">{{ option.label }}</span>
            <span class="option-value" style="float: right;">{{ option.value }}</span>
          </py-option>
        </py-option-group>
      </py-select>
    </section>

    <section>
      <h2>自定义模板option</h2>
      <py-select
        v-model="value"
        filterable
        allow-create
        multiple
        :multipleLimit="3"
        placeholder="请选择"
      >
        <py-option
          v-for="(option, key) in selectData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        >
          <span class="option-label" style="float: left;">{{ option.label }}</span>
          <span class="option-value" style="float: right;">{{ option.value }}</span>
        </py-option>
      </py-select>
    </section>

    <section>
      <h2>多选时创建条目</h2>
      <py-select
        v-model="value"
        filterable
        allow-create
        multiple
        :multipleLimit="3"
        placeholder="请选择"
      >
        <py-option
          v-for="(option, key) in filterData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>单选时创建条目</h2>
      <py-select v-model="value" filterable allow-create placeholder="请选择">
        <py-option
          v-for="(option, key) in filterData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>远程数据</h2>
      <py-select
        v-model="value"
        filterable
        remote
        :remote-method="remoteMethod"
        :loading="remoteLoading"
        placeholder="请选择"
      >
        <py-option
          v-for="(option, key) in remoteData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>可提供搜索方法</h2>
      <py-select v-model="value" filterable :filter-method="filterMethod" placeholder="请选择">
        <py-option
          v-for="(option, key) in filterData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>可搜索</h2>
      <py-select v-model="value" filterable placeholder="请选择">
        <py-option
          v-for="(option, key) in filterData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>普通</h2>
      <py-select v-model="value" placeholder="请选择">
        <py-option
          v-for="(option, key) in selectData"
          :key="key"
          :value="option.value"
          :label="option.label"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>选项被禁用</h2>
      <py-select v-model="value" placeholder="请选择">
        <py-option
          v-for="(option, key) in selectDisabledData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>select被禁用</h2>
      <py-select v-model="value" disabled placeholder="请选择">
        <py-option
          v-for="(option, key) in selectDisabledData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>可清空</h2>
      <py-select v-model="value" clearable placeholder="请选择">
        <py-option
          v-for="(option, key) in selectDisabledData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
    </section>

    <section>
      <h2>可多选</h2>
      <py-select v-model="value" multiple placeholder="请选择">
        <py-option
          v-for="(option, key) in selectData"
          :key="key"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        ></py-option>
      </py-select>
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
          disabled: true,
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
          disabled: true,
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          disabled: true,
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
      groupOptions: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海',
              disabled: true,
            },
            {
              value: 'Beijing',
              label: '北京',
              disabled: true,
            },
          ],
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都',
              disabled: true,
            },
            {
              value: 'Shenzhen',
              label: '深圳',
            },
            {
              value: 'Guangzhou',
              label: '广州',
            },
            {
              value: 'Dalian',
              label: '大连',
            },
          ],
        },
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

<style lang="scss" scoped>
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
