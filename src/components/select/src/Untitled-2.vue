<template>
    <div
    class="py-select"
    :class="{'disabled': disabled}"
    ref="pySelect"
    v-ClickOutSide="closeDropDown">
    <div
      class="py-select__input"
      ref="inputEleBox"
      @click="handleClickLabel">
      <div class="input input-single-box" v-if="!multiple && !filterable">
        <input
          class="input-single"
          type="label"
          readonly="readyonly"
          :placeholder="placeholder"
          v-model="selectValue.label"
          @blur="$emit('blur', $event)"
          @focus="$emit('blur', $event)"
          @keydown.up.stop.prevent="switchOptions('prev')"
          @keydown.down.stop.prevent="switchOptions('next')"
          @keydown.enter.stop.prevent="selectOption"
          @keydown.esc.stop.prevent="showDropDown = false"
          @keydown.tab="showDropDown = false">
      </div>
      <div class="input-multiInput input" v-if="multiple || filterable">
        <div
          v-if="multiple"
          class="tag"
          :class="{'deleteSelected': selectItem.deleteSelected}"
          v-for="(selectItem, index) in selectValue"
          :key="index">
          <span>{{ selectItem.label }}</span>
          <i class="pyui-icons py-icon-close" @click.stop="deleteTag(index, selectItem)"></i>
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="queryText"
            :readonly="!filterable"
            @blur="$emit('blur', $event)"
            @focus="$emit('blur', $event)"
            @keydown.up.stop.prevent="switchOptions('prev')"
            @keydown.down.stop.prevent="switchOptions('next')"
            @keydown.enter.stop.prevent="selectOption"
            @keydown.esc.stop.prevent="showDropDown = false"
            @keydown.tab="showDropDown = false"
            @keydown.delete="deleteTagByKeyboard"
            ref="multiInput">
        </div>
        <span class="input-text" ref="multiText">{{ queryText }}</span>
        <span
          class="input-placeholder"
          v-show="placeholderShow">
          {{ placeholder }}
        </span>
      </div>
      <div
        class="py-select__suffix"
        :class="{ 'is-clearable': !multiple && selectValue.label && clearable }">
        <i
          class="py-select__caret pyui-icons py-icon-up"
          :class="[direction, showDropDown ? 'actived' : '']">
        </i>
        <i
          class="py-select__close pyui-icons py-icon-close"
          @click.stop="clearSelectValue">
        </i>
      </div>
    </div>
    <transition name="slide-up">
      <div
        :class="[
          'py-select__dropdown',
          direction === 'slide-down'? 'py-select__dropdown--down' : 'py-select__dropdown--up']"
        v-show="showDropDown"
        ref="dropDown">
        <ul class="py-select__dropdown--list" v-if="!loading">
          <li
            v-show="option.show !== false"
            class="py-select__dropdown--item"
            :class="{
              'selected': option.selected,
              'disabled': option.disabled || option.multipleDisabled,
              'actived': index === activedIndex,
            }"
            v-for="(option, index) in options"
            :key="index"
            @click="selectDropDownItem(option, $event)">
            {{ option.label }}
            <i
              v-show="option.selected && multiple"
              class="py-select__selected pyui-icons py-icon-check">
            </i>
          </li>
        </ul>
        <div class="py-select__dropdown--loading" v-if="loading">
          {{ loadingText }}
        </div>
        <div
          class="py-select__dropdown--none"
          v-if="!loading && options.length === 0 && queryText !== ''">
          {{ noDataText }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'PySelect',
  data() {
    return {
      showDropDown: false, // 下拉框显示/隐藏
      direction: 'slide-down', // 下拉框出现在input上方/下方
      selectValue: this.multiple ? [] : {}, // 被选择的选项
      options: JSON.parse(JSON.stringify(this.data)), // data组件内备份
      queryText: '', // input的value值
      activedIndex: -1, // 下拉框option被激活的index
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Number, String, Array],
      required: true,
    },
    maxHeight: {
      type: String,
      default: () => '260',
    },
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    multipleLimit: {
      type: Number,
      default: 0,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: () => '请选择',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    allowCreate: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    filterMethod: {
      type: Function,
      default(value, item) {
        if (item.label.indexOf(value) > -1) {
          return true;
        }
        return false;
      },
    },
    remote: {
      type: Boolean,
      default: false,
    },
    remoteMethod: {
      type: Function,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: '正在加载',
    },
    noDataText: {
      type: String,
      default: '无数据',
    },
  },
  watch: {
    showDropDown(val) {
      this.$emit('visible-change', val);
    },
    data: {
      handler(val) {
        this.options = JSON.parse(JSON.stringify(val));
        this.options.forEach(option => {
          const item = option;
          if (this.multiple) {
            this.selectValue.forEach(tag => {
              if (tag.label === option.label && tag.value === option.value) {
                item.selected = true;
              }
            });
          } else if (
            this.selectValue.label === option.label &&
            this.selectValue.value === option.value
          ) {
            item.selected = true;
          }
        });
        this.$nextTick(() => {
          this.setDirection();
        });
      },
      deep: true,
    },
    selectValue: {
      handler(val, oldVal) {
        if (this.multiple) {
          const multipleSelectValue = [];
          val.forEach(selectItem => {
            multipleSelectValue.push(selectItem.value);
            this.options.forEach(item => {
              if (item.value === selectItem.value && item.label === selectItem.label) {
                Vue.set(item, 'selected', true);
              }
            });
          });
          if (val.length === 0) {
            this.options.forEach(item => {
              const itemTemp = item;
              itemTemp.selected = false;
            });
          }
          this.$emit('change', multipleSelectValue);
          this.$emit('input', multipleSelectValue);
        } else if (oldVal.value !== val.value) {
          this.options.forEach(item => {
            if (item.value === val.value && item.label === val.label) {
              Vue.set(item, 'selected', true);
            } else {
              Vue.set(item, 'selected', false);
            }
          });
          this.$emit('change', this.selectValue.value ? this.selectValue.value : '');
          this.$emit('input', this.selectValue.value ? this.selectValue.value : '');
        }
        this.$nextTick(() => {
          this.setPosition();
          this.setDirection();
        });
      },
      deep: true,
    },
    queryText(val) {
      this.$nextTick(() => {
        const width = this.$refs.multiText.clientWidth > 6 ? this.$refs.multiText.clientWidth : 6;
        this.$refs.multiInput.style.width = `${width}px`;
        this.setPosition();
        this.setDirection();
        if (!this.filterable) return;
        this.activedIndex = -1;
        if (this.remote) {
          this.remoteMethod(val);
        } else {
          this.options.forEach(option => {
            if (!option.created) {
              if (val === '') {
                Vue.set(option, 'show', true);
              } else if (!this.filterMethod(val, option)) {
                Vue.set(option, 'show', false);
              } else if (this.filterMethod(val, option)) {
                Vue.set(option, 'show', true);
              }
            }
          });
        }
      });
      this.inputQuery();
    },
  },
  computed: {
    placeholderShow() {
      return this.multiple
        ? this.selectValue.length === 0 && this.queryText === ''
        : !this.selectValue.label && this.queryText === '';
    },
  },
  mounted() {
    this.$refs.dropDown.style.position = this.position;
    this.container = this.popperAppendToBody ? document.body : this.$refs.pySelect;
    this.container.appendChild(this.$refs.dropDown);
    window.addEventListener('resize', this.setPosition);
    window.addEventListener('scroll', this.setDirection);
    this.setPosition();
    this.setDirection();
  },
  beforeDestory() {
    window.removeEventListener('resize', this.setPosition);
    window.removeEventListener('scroll', this.setDirection);
  },
  methods: {
    clearSelectValue() {
      this.selectValue = {};
      this.$emit('clear');
    },
    // 输入查询内容
    inputQuery() {
      if (this.allowCreate && !this.remote) {
        if (this.queryText !== '') {
          const option = {
            label: this.queryText,
            value: this.queryText,
            created: true,
            show: true,
          };
          if (this.options[0].created) {
            this.options.shift();
          }
          this.options.unshift(option);
          this.activedIndex = 0;
        } else {
          this.activedIndex = -1;
          this.options.shift();
        }
      }
    },
    // 通过键盘删除tag
    deleteTagByKeyboard() {
      if (this.queryText !== '') {
        if (this.filterable && !this.multiple) {
          this.options.forEach(option => {
            const item = option;
            delete item.selected;
          });
        }
        return;
      }
      if (this.multiple) {
        if (this.selectValue.length === 0) return;
        const lastIndex = this.selectValue.length - 1;
        if (this.selectValue[lastIndex].deleteSelected) {
          this.options.forEach(option => {
            const optionItem = option;
            if (
              optionItem.value === this.selectValue[lastIndex].value &&
              optionItem.label === this.selectValue[lastIndex].label
            ) {
              delete optionItem.selected;
            }
          });
          this.deleteTag(lastIndex);
          return;
        }
        Vue.set(this.selectValue[lastIndex], 'deleteSelected', true);
      }
    },
    // 点击键盘上下键，option需上下选择
    switchOptions(direction) {
      if (!this.showDropDown) {
        this.showDropDown = true;
        return;
      }
      if (this.options.length > 0) {
        if (direction === 'next') {
          this.activedIndex += 1;
          this.options.forEach((option, index) => {
            if (option.disabled && index === this.activedIndex) {
              this.activedIndex += 1;
            }
            if (option.multipleDisabled && index === this.activedIndex) {
              this.activedIndex += 1;
            }
            if (option.show === false && index === this.activedIndex) {
              this.activedIndex += 1;
            }
          });
          if (this.activedIndex === this.options.length) {
            let firstShowOption = 0;
            let option = this.options[firstShowOption];
            while (option.show === false) {
              firstShowOption += 1;
              option = this.options[firstShowOption];
            }
            this.activedIndex = firstShowOption;
          }
        } else if (direction === 'prev') {
          this.activedIndex -= 1;
          for (let i = this.activedIndex; i >= 0; i -= 1) {
            const option = this.options[this.activedIndex];
            if (option.disabled && i === this.activedIndex) {
              this.activedIndex -= 1;
            }
            if (option.multipleDisabled && i === this.activedIndex) {
              this.activedIndex -= 1;
            }
            if (option.show === false && i === this.activedIndex) {
              this.activedIndex -= 1;
            }
          }
          if (this.activedIndex <= -1) {
            let lastShowOption = 0;
            this.options.forEach((option, index) => {
              if (option.show !== false) {
                lastShowOption = index;
              }
            });
            this.activedIndex = lastShowOption;
          }
        }
      }
    },
    // 键盘enter点击后选择某个option
    selectOption() {
      this.options.forEach((option, index) => {
        const item = option;
        if (index === this.activedIndex) {
          this.selectDropDownItem(option);
          if (option.created) {
            item.show = false;
            item.selected = true;
            this.queryText = '';
          }
        }
      });
    },
    // 关闭dropdown
    closeDropDown(el, e) {
      if (this.multiple && this.$refs.dropDown.contains(e)) return;
      this.showDropDown = false;
    },
    // 点击select
    handleClickLabel() {
      if (this.disabled) return;
      this.showDropDown = !this.showDropDown;
      if (this.showDropDown) {
        if (this.multiple || this.filterable) {
          this.$refs.multiInput.focus();
        }
        if (this.filterable && this.selectValue.label) {
          this.$refs.multiInput.select();
        }
      }
    },
    // 删除某个tag
    deleteTag(index, selectItem) {
      this.selectValue.splice(index, 1);
      if (selectItem) {
        this.options.forEach(option => {
          const optionItem = option;
          if (optionItem.value === selectItem.value && optionItem.label === selectItem.label) {
            delete optionItem.selected;
          }
        });
        this.$emit('remove-tag', selectItem);
      }
    },
    // 选择下拉菜单的option
    selectDropDownItem(option, e) {
      let optionItem = option;
      if (option.disabled || option.multipleDisabled) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        return;
      }
      if (option.selected && this.multiple) {
        this.$refs.multiInput.focus();
        this.selectValue.forEach((item, index) => {
          const selectValueItem = item;
          if (option.value === selectValueItem.value && option.label === selectValueItem.label) {
            this.deleteTag(index);
            optionItem.selected = false;
          }
          // 恢复option的multipleDisabled
          if (this.multipleLimit && this.selectValue.length < this.multipleLimit) {
            this.options.forEach(optionTemp => {
              optionItem = optionTemp;
              Vue.set(optionItem, 'multipleDisabled', false);
            });
          }
        });
        return;
      }
      const objOption = Object.assign({}, option);
      if (this.multiple) {
        if (objOption.show === false) return;
        this.selectValue.push(objOption);
        // 判断multipleLimit限制
        if (this.multipleLimit && this.selectValue.length >= this.multipleLimit) {
          this.options.forEach(optionTemp => {
            optionItem = optionTemp;
            if (
              !optionItem.selected &&
              optionItem.value !== option.value &&
              optionItem.label !== option.label
            ) {
              Vue.set(optionItem, 'multipleDisabled', true);
            }
          });
          return;
        }
        this.$refs.multiInput.focus();
      } else {
        this.selectValue = objOption;
        this.showDropDown = false;
        if (this.filterable) {
          this.queryText = objOption.label;
          this.$refs.multiInput.blur();
          this.activedIndex = -1;
        }
      }
    },
    // 获取scroll的top/left
    getScroll(top) {
      let ret = window[`page${top ? 'Y' : 'X'}Offset`];
      const method = `scroll${top ? 'Top' : 'Left'}`;
      if (typeof ret !== 'number') {
        const d = window.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
          // quirks mode
          ret = d.body[method];
        }
      }
      return ret;
    },
    // 获取offset对象
    getOffset(element, container = document.body) {
      const elRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const clientTop = element.clientTop || container.clientTop || 0;
      const clientLeft = element.clientLeft || container.clientLeft || 0;
      let top;
      let left;
      if (container === document.body) {
        top = this.getScroll(true);
        left = this.getScroll();
      } else {
        top = container.scrollTop - containerRect.top;
        left = container.scrollLeft - containerRect.left;
      }
      return {
        top: elRect.top + top + -clientTop,
        left: elRect.left + left + -clientLeft,
        right: elRect.right + left + -clientLeft,
        bottom: elRect.bottom + top + -clientTop,
      };
    },
    // 设置dropdown的位置
    setPosition() {
      const elePosition = this.getOffset(this.$refs.inputEleBox);
      this.$refs.dropDown.style.width = `${elePosition.right - elePosition.left}px`;
      this.$refs.dropDown.style.left = `${elePosition.left}px`;
      this.$refs.dropDown.style.top = `${elePosition.top +
        this.$refs.inputEleBox.offsetHeight +
        8}px`;
      this.$refs.dropDown.style.maxHeight = `${this.maxHeight}px`;
    },
    // 设置dropdown出现的方向
    setDirection() {
      const distance = 40;
      const elePosition = this.getOffset(this.$refs.inputEleBox);
      const documentScrollTop = document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
      const documentClientHeight = document.documentElement.clientHeight;
      let dropDownClientHeight = this.$refs.dropDown.clientHeight;
      if (!this.showDropDown) {
        this.$refs.dropDown.style.display = 'block';
        this.$refs.dropDown.style.visibility = 'hidden';
        dropDownClientHeight = this.$refs.dropDown.clientHeight;
        this.$refs.dropDown.style.visibility = 'visible';
        this.$refs.dropDown.style.display = 'none';
      }
      const inputEleBoxHeight = this.$refs.inputEleBox.clientHeight;
      if (
        dropDownClientHeight + elePosition.top + distance >=
        documentScrollTop + documentClientHeight
      ) {
        this.direction = 'slide-up';
        this.$refs.dropDown.style.top = `${elePosition.top - dropDownClientHeight - 16}px`;
      } else {
        this.direction = 'slide-down';
        this.$refs.dropDown.style.top = `${elePosition.top + inputEleBoxHeight + 8}px`;
      }
    },
  },
  directives: {
    // 点击el元素外的区域，执行binding函数
    ClickOutSide: {
      bind(el, binding) {
        const ele = el;
        function handleDocumentClick(e) {
          if (el.contains(e.target)) {
            return false;
          }
          if (binding.expression) {
            binding.value(el, e.target);
          }
          return true;
        }
        ele.handleDocumentClick = handleDocumentClick;
        window.addEventListener('click', handleDocumentClick);
      },
      unbind(el) {
        const ele = el;
        window.removeEventListener('click', el.handleDocumentClick);
        delete ele.handleDocumentClick;
      },
    },
  },
};
</script>
