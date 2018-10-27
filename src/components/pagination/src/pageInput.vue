<template>
  <div class="py-pageinput">
    <span>前往</span>
    <span>
      <input
        v-model="current"
        type="text"
        :class="[
          'py-pageinput__input',
          disabled ? 'py-pageinput__input--disabled' : 'py-pageinput__input--nodisabled'
        ]"
        :disabled="disabled"
        @keyup.enter="changeCurrent"
        @change="changeCurrent"
        @input="input"
      >
    </span>
    <span>页</span>
  </div>
</template>

<script>
export default {
  name: 'PyPageInput',
  data() {
    return {
      current: this.currentPage,
    };
  },
  props: {
    currentPage: Number,
    pageCount: Number,
    disabled: Boolean,
  },
  watch: {
    currentPage(_val) {
      this.current = _val;
    },
  },
  methods: {
    input(_val) {
      const newValue = [];
      const objVal = _val.target.value;
      objVal.split('').forEach(item => {
        if (Number(item).toString() !== 'NaN') {
          newValue.push(item);
        }
      });
      this.current = newValue.join('');
    },
    changeCurrent() {
      const curPage = Number(this.current);
      if (curPage < 1) {
        this.current = 1;
      } else if (curPage > this.pageCount) {
        this.current = this.pageCount;
      }
      this.$emit('changeCurrent', Number(this.current));
    },
  },
};
</script>
