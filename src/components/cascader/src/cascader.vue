<template>
  <div class="py-cascader" :class="size ? 'py-cascader--' + size : ''">
    <div class="py-cascader__input-box" @click="!disabled && toggleMenu()"
      @mouseover="mouseoverHandler" @mouseout="mouseoutHandler">
      <input ref="cascaderInput" class="py-cascader__input"
        :class="disabled ? 'py-cascader__input--disabled' : isFocus ?
        'py-cascader__input--focus' : 'py-cascader__input--unfocus'"
        :placeholder="placeholderValue" :readonly="!filterable"
        :disabled="disabled" :value="inputValue"
        @focus="focusInput" @blur="blurInput"
        @input="inputFilter" @compositionstart="compositionstartHandler"
        @compositionend="compositionendHandler"/>
      <span class="py-cascader__input-icon">
        <py-icon type="close-circle-fill" v-if="isShowDelete" @click="clear()"></py-icon>
        <py-icon type="up" v-else :class="isShowMenu ? 'icon--up' : 'icon--down'"></py-icon>
      </span>
    </div>
     <div class="py-cascader__menu" v-show="isShowMenu" @click="clickMenu($event)"
      :class="menuClass">
        <py-cascader-menu v-if="filterable && isShowFilterMenu">
          <py-cascader-menu-item type="filter" v-for="(item, index) in filterOptions" :key="index"
            @select-filter-menu="selectFilterMenu" :filter-value="filterValue" :props="props"
            :filter-option-arr="item" :separator="separator">
          </py-cascader-menu-item>
          <py-cascader-menu-item type="select" v-if="filterOptions.length === 0"
            :option="{ label: '无匹配数据', disabled: true }">
          </py-cascader-menu-item>
        </py-cascader-menu>
        <py-cascader-menu v-else v-for="(opts, index) in showOptions" :key="index">
          <py-cascader-menu-item type="select" v-for="item in opts" :key="item.value"
            :option="item" :menuIndex="index" :trigger-type="triggerType"
            :isActive="item === selectingData[index]"
            :props="props" :separator="separator"
            @select-menu="selectMenu">
          </py-cascader-menu-item>
        </py-cascader-menu>
    </div>
  </div>
</template>

<script>
import PyIcon from '../../icon/src/icon.vue';
import PyCascaderMenu from './cascader-menu.vue';
import PyCascaderMenuItem from './cascader-menu-item.vue';

// 组件class前缀
// const prefixCls = 'py-cascader';

/**
 * @description 根据value值，从options数组中找出option
 * @param {stirng} targetValue 制定value值
 * @param {any} options 给定options数组
 * @param {any} props 给定option对象的key名称
 */
function findChildren(targetValue, options, props) {
  let child;
  let opt;
  const { value, children } = props;
  for (let i = 0; i < options.length; i += 1) {
    if (targetValue === options[i][value]) {
      child = options[i][children];
      opt = options[i];
      break;
    }
  }
  return {
    child,
    opt,
  };
}

/**
 * @description 将一个option的所有children option添加入过滤结果数组
 * @param {any} opts 被添加的option
 * @param {any[]} optStack 保存了上一级option的数组
 * @param {any[]} filterResults 过滤结果数组
 * @param {any} props 给定option对象的key名称
 */
function addChildrenOptions(opts, optStack, filterResults, props) {
  let currentOptStack = [];
  const { children } = props;
  opts.forEach(opt => {
    currentOptStack = optStack.slice();
    currentOptStack.push(opt);
    if (opt[children]) {
      addChildrenOptions(opt[children], currentOptStack, filterResults, props);
    } else {
      filterResults.push(currentOptStack);
    }
  });
}

/**
 * @description 过滤一个option的所有children option
 * @param {any} opts 制定value值
 * @param {RegExp} reg 过滤正则对象
 * @param {any[]} optStack 保存了上一级option的数组
 * @param {any[]} filterResults 过滤结果数组
 * @param {any} props 给定option对象的key名称
 */
function filterChildrenOptions(opts, reg, optStack, filterResults, props) {
  let currentOptStack = [];
  const { children, label } = props;
  opts.forEach(opt => {
    currentOptStack = optStack.slice();
    currentOptStack.push(opt);
    if (opt[label].match(reg)) {
      if (opt[children]) {
        addChildrenOptions(opt[children], currentOptStack, filterResults, props);
      } else {
        filterResults.push(currentOptStack);
      }
    } else if (opt[children]) {
      filterChildrenOptions(opt[children], reg, currentOptStack, filterResults, props);
    }
  });
}

/**
 * @description 根据关键字在options中过滤出结果
 * @param {any} opts 制定value值
 * @param {string} keyWorld 过滤正则对象
 * @param {any} props 给定option对象的key名称
 */
function filterKeyWorkd(opts, keyWorld, props) {
  let optStack = [];
  const filterResults = [];
  const reg = new RegExp(keyWorld, 'i');
  const { label, children } = props;
  opts.forEach(opt => {
    optStack = [];
    optStack.push(opt);

    if (opt[label].match(reg)) {
      if (opt[children]) {
        addChildrenOptions(opt[children], optStack, filterResults, props);
      } else {
        filterResults.push(optStack);
      }
    } else if (opt[children]) {
      filterChildrenOptions(opt[children], reg, optStack, filterResults, props);
    }
  });
  return filterResults;
}

export default {
  name: 'PyCascader',
  components: {
    'py-cascader-menu': PyCascaderMenu,
    'py-cascader-menu-item': PyCascaderMenuItem,
    'py-icon': PyIcon,
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    },
    // 数据选项
    options: {
      type: Array,
      required: true,
    },
    // 下一级菜单触发方式，click | hover
    triggerType: {
      type: String,
      default: 'click',
    },
    // 分割符
    separator: {
      type: String,
      default: '/',
    },
    // 选择即改变，可用于选择任意一级菜单的选项。
    changeOnSelect: {
      type: Boolean,
      default: false,
    },
    // 传入选择好的默认值
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    // 是否显示所有路径
    showAllLevels: {
      type: Boolean,
      default: true,
    },
    // 禁止使用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否显示清楚图标
    clearable: {
      type: Boolean,
      default: false,
    },
    // 添加到菜单的自定义class
    menuClass: {
      type: String,
      default: '',
    },
    // 选择器的尺寸大小，medium | small | mini
    size: {
      type: String,
      default: '',
    },
    // options对象的key名称
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
    // 是否可以过滤搜索
    filterable: {
      type: Boolean,
      default: false,
    },
    // 搜索关键词输入的去抖延迟，毫秒
    debounce: {
      type: Number,
      default: 300,
    },
    // 过滤前回调函数
    beforeFilter: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      // class name前缀
      // prefixCls,
      isFocus: false,
      isShowMenu: false,
      // 正在选择中的数据
      selectingData: [],
      // 最终选好的数据
      selectedData: [],
      // 失去焦点定时器
      blurTimer: null,
      // 鼠标是否悬停在选择器
      mouseIn: false,
      // 是否正在输入拼音中文
      isInputChinese: false,
      // 去抖延迟timer
      filterTimer: null,
      // 用户输入的过滤文本
      filterValue: null,
      // 是否显示过滤菜单
      isShowFilterMenu: false,
      // 过滤出的选项
      filterOptions: [],
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        // 检测value与当前 selectedData 的值是否一样
        const oldSelectedValue = this.selectedData.map(item => item[this.props.value]);
        let isSame = true;
        const length =
          newVal.length > oldSelectedValue.length ? newVal.length : oldSelectedValue.length;
        for (let i = 0; i < length; i += 1) {
          if (oldSelectedValue[i] !== newVal[i]) {
            isSame = false;
            break;
          }
        }
        if (isSame) return;

        const selectedValue = newVal.slice();
        let currentOpts = this.options;
        this.selectingData = [];
        this.selectedData = [];

        for (let i = 0; i < selectedValue.length; i += 1) {
          const value = selectedValue[i];
          const { child, opt } = findChildren(value, currentOpts, this.props);
          if (opt.disabled) {
            break;
          } else {
            this.selectingData.push(opt);
            this.selectedData.push(opt);
          }
          if (child) {
            currentOpts = child;
          } else {
            break;
          }
        }
      },
    },
    selectedData(newVal) {
      const { value } = this.props;
      this.$emit('input', newVal.map(item => item[value]));
      this.$emit('change', newVal.map(item => item[value]));
    },
  },
  computed: {
    placeholderValue() {
      if (this.filterable && this.isFocus && this.filterValue === null) {
        // 当输入关键词进行过滤时，让当前选择结果成为placeholder
        const { label } = this.props;
        if (this.showAllLevels) {
          return (
            this.selectedData.map(data => data[label]).join(` ${this.separator} `) ||
            this.placeholder
          );
        }
        return this.selectedData.map(data => data[label]).pop() || this.placeholder;
      }
      return this.placeholder;
    },
    inputValue() {
      if (this.filterable && this.isFocus) {
        if (this.filterValue !== null) {
          return this.filterValue;
        }
        return '';
      }
      const { label } = this.props;
      if (this.showAllLevels) {
        return this.selectedData.map(data => data[label]).join(` ${this.separator} `);
      }
      return this.selectedData.map(data => data[label]).pop() || '';
    },
    isShowDelete() {
      if (!this.clearable) {
        return false;
      } else if (this.mouseIn && (this.value.length > 0 || this.selectedData.length > 0)) {
        return true;
      }
      return false;
    },
    showOptions() {
      const showOptions = [this.options];
      const { children } = this.props;
      for (let i = 0; i < this.selectingData.length; i += 1) {
        if (this.selectingData[i][children]) {
          showOptions.push(this.selectingData[i][children]);
        }
      }
      return showOptions;
    },
  },
  methods: {
    compositionstartHandler() {
      this.isInputChinese = true;
    },
    compositionendHandler(event) {
      this.isInputChinese = false;
      this.filterValue = this.filterValue || '';
      this.filter(this.filterValue + event.data);
    },
    inputFilter(event) {
      if (this.isInputChinese) return;
      this.filter(event.target.value);
    },
    filter(value) {
      if (this.filterTimer) {
        clearTimeout(this.filterTimer);
      }
      this.filterValue = value;

      // 运行before-filter方法 并检测运行结果
      if (this.beforeFilter) {
        const res = this.beforeFilter(value);
        if (res === false) {
          return;
        } else if (res instanceof Promise) {
          res
            .then(() => {
              this.filterTimer = setTimeout(() => {
                // 根据关键字过滤出options
                this.filterOptions = filterKeyWorkd(this.options, this.filterValue, this.props);

                if (value.length > 0) {
                  this.isShowFilterMenu = true;
                } else {
                  this.isShowFilterMenu = false;
                }
                this.filterTimer = null;
              }, this.debounce);
            })
            .catch(e => e);
          return;
        }
      }

      this.filterTimer = setTimeout(() => {
        this.filterOptions = filterKeyWorkd(this.options, this.filterValue, this.props);

        if (value.length > 0) {
          this.isShowFilterMenu = true;
        } else {
          this.isShowFilterMenu = false;
        }
        this.filterTimer = null;
      }, this.debounce);
    },
    // 从过滤出的item中选择
    selectFilterMenu(values) {
      this.selectedData = values;
      this.filterValue = null;
    },
    clear() {
      this.selectedData = [];
    },
    mouseoverHandler() {
      this.mouseIn = true;
    },
    mouseoutHandler() {
      this.mouseIn = false;
    },
    focusInput(event) {
      this.isFocus = true;
      if (!this.blurTimer) {
        this.$emit('focus', event);
      }
    },
    blurInput(event) {
      this.blurTimer = setTimeout(() => {
        this.$emit('blur', event);
        this.isFocus = false;
        this.isShowMenu = false;
        this.blurTimer = null;
        this.filterValue = null;
        this.isShowFilterMenu = false;
      }, 300);
    },
    // 选择菜单
    selectMenu(data) {
      const { option, menuIndex } = data;
      this.selectingData.splice(menuIndex);
      this.selectingData.push(option);

      if (option[this.props.children]) {
        // 还有下一级选项
        if (this.changeOnSelect) {
          this.selectedData = this.selectingData.slice();
        } else {
          // 点击非最后一级的选项才会触发 'active-item-change' 事件
          this.$emit('active-item-change', this.selectingData.map(item => item[this.props.value]));
        }
      } else {
        // 无下一级选项
        this.selectedData = this.selectingData.slice();
        this.isShowMenu = false;
      }
    },
    // 点击菜单
    clickMenu() {
      // 让输入框重新聚焦
      this.$refs.cascaderInput.focus();
      if (this.blurTimer) {
        clearTimeout(this.blurTimer);
        this.blurTimer = null;
      }
    },
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
      if (this.isShowMenu) {
        const selectedValue = this.selectedData.map(data => data[this.props.value]);
        let currentOpts = this.options;
        this.selectingData = [];

        for (let i = 0; i < selectedValue.length; i += 1) {
          const value = selectedValue[i];
          const { child, opt } = findChildren(value, currentOpts, this.props);
          if (opt.disabled) {
            break;
          } else {
            this.selectingData.push(opt);
          }
          if (child) {
            currentOpts = child;
          } else {
            break;
          }
        }
      }
    },
  },
};
</script>
