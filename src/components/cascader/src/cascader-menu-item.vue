<template>
  <li class="py-cascader-menu-item py-cascader-menu-item:hover"
    :class="disabled ? 'py-cascader-menu-item--disable' : isActive ?
      'py-cascader-menu-item--active' : ''"
      @click="selectItem" @mouseover="triggerType === 'hover' && selectItem($event)">
      <div v-if="type === 'select'">
        {{option[props.label]}}
        <py-icon type="right" v-show="option[props.children]"></py-icon>
      </div>
      <div v-else v-html="html">
      </div>
  </li>
</template>
<script>
import PyIcon from '../../icon/src/icon.vue';

export default {
  name: 'PyCascaderMenuItem',
  components: {
    'py-icon': PyIcon,
  },
  props: {
    // item显示类型，filter 过滤模式 | select 选择模式
    type: {
      type: String,
      required: true,
    },
    // 当前item绑定的option
    option: {
      type: Object,
      required: false,
    },
    // 当前item的菜单层级
    menuIndex: {
      type: Number,
      required: false,
    },
    // item触发下一级方式
    triggerType: {
      type: String,
      default: 'click',
    },
    // 是否选中当前选项
    isActive: {
      type: Boolean,
      default: false,
    },
    // 分割符
    separator: {
      type: String,
      default: '/',
    },
    // option对象的key名称
    props: {
      type: Object,
      default() {
        return {
          value: 'value',
          label: 'label',
          children: 'children',
          disabled: 'disabled',
        };
      },
    },
    // 过滤关键字
    filterValue: {
      type: String,
      default: null,
    },
    // 过滤出的option数组
    filterOptionArr: {
      type: Array,
      required: false,
    },
  },
  computed: {
    html() {
      if (this.type === 'filter') {
        const { label } = this.props;
        const str = this.filterOptionArr.map(opt => opt[label]).join(` ${this.separator} `);
        const reg = new RegExp(this.filterValue, 'ig');
        return str.replace(reg, '<strong>$&</strong>');
      }
      return '';
    },
    disabled() {
      const { disabled } = this.props;
      if (this.type === 'filter') {
        const disabledarr = this.filterOptionArr.map(opt => opt[disabled]);
        return disabledarr.indexOf(true) !== -1;
      }
      return this.option[disabled];
    },
  },
  methods: {
    selectItem(event) {
      if (this.disabled) return;

      const { children } = this.props;
      if (event.type === 'click') {
        if (this.type === 'select') {
          this.$emit('select-menu', {
            option: this.option,
            menuIndex: this.menuIndex,
          });
        } else {
          this.$emit('select-filter-menu', this.filterOptionArr);
        }
      } else if (event.type === 'mouseover' && this.option[children]) {
        this.$emit('select-menu', {
          option: this.option,
          menuIndex: this.menuIndex,
          options: this.options,
        });
      }
    },
  },
};
</script>
