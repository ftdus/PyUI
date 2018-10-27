<template>
  <ul class="py-pager"  @click="changePage">
    <li
      :class="[
        'py-pager__prev',
        simple ? 'py-pager--simple' : 'py-pager--notsimple',
        (disabled || current === 1) ? 'py-pager--disabled' : ''
      ]"
    >
      {{ prevText }}
    </li>
    <li
      :class="[
        'py-pager__page',
        simple ? 'py-pager--simple' : 'py-pager--notsimple',
        current === 1 ? 'py-pager--active' : '',
        disabled ? 'py-pager--disabled' : ''
      ]"
    >1</li>
    <li
      v-show="showPrev"
      :class="[
        'py-pager--prev',
        simple ? 'py-pager--simple' : 'py-pager--notsimple',
        leftFlag === '<<' ? 'py-pager--active' : '',
        disabled ? 'py-pager--disabled' : ''
      ]"
      @mouseenter="onMouseenter('left')"
      @mouseleave="onMouseleave('left')"
    >
      {{ leftFlag }}
    </li>
    <li
      v-for="(page, index) in pageList"
      :class="[
        'py-pager__page',
        simple ? 'py-pager--simple' : 'py-pager--notsimple',
        current === page ? 'py-pager--active' : '',
        disabled ? 'py-pager--disabled' : ''
      ]"
      :key="index"
    >
      {{ page }}
    </li>
    <li
      v-show="showNext"
      :class="[
        'py-pager--next',
        simple ? 'py-pager--simple' : 'py-pager--notsimple',
        rightFlag === '>>' ? 'py-pager--active' : '',
        disabled ? 'py-pager--disabled' : '',
      ]"
      @mouseenter="onMouseenter('right')"
      @mouseleave="onMouseleave('right')"
    >
      {{ rightFlag }}
    </li>
    <li
      :class="[
        'py-pager__page',
        simple ? 'py-pager--simple' : 'py-pager--notsimple',
        current === pageCount ? 'py-pager--active' : '',
        disabled ? 'py-pager--disabled' : ''
      ]"
    >
      {{ pageCount }}
    </li>
    <li
      :class="[
        'py-pager__next',
        simple ? 'py-pager--simple' : 'py-pager--notsimple',
        (disabled || current === pageCount) ? 'py-pager--disabled' : ''
      ]"
    >
      {{ nextText }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PyPagination',
  props: {
    pageCount: Number,
    currentPage: Number,
    disabled: Boolean,
    pagerCount: Number,
    simple: Boolean,
    prevText: String,
    nextText: String,
  },
  data() {
    return {
      showPrev: false,
      showNext: false,
      current: null,
      leftFlag: '...',
      rightFlag: '...',
    };
  },
  computed: {
    // 分页
    pageList() {
      const currentNum = Number(this.current);
      const pageNum = Number(this.pageCount);
      const pagerNum = Number(this.pagerCount);
      const middleArray = [];
      const halfPagerNum = parseInt((pagerNum - 3) / 2, 10);

      if (pageNum > pagerNum) {
        const maxCurrent = pagerNum - 1 - halfPagerNum;
        if (currentNum > maxCurrent) {
          const maxPage = Number(currentNum + halfPagerNum);
          const minPage = Number(pageNum - (pagerNum - 2));
          if (maxPage < pageNum) {
            for (
              let i = currentNum - halfPagerNum;
              i <= currentNum + halfPagerNum;
              i += 1
            ) {
              middleArray.push(i);
            }
          } else {
            for (let i = pageNum - 1; i > minPage; i -= 1) {
              middleArray.unshift(i);
            }
          }
        } else {
          for (let i = 2; i < pagerNum; i += 1) {
            middleArray.push(i);
          }
        }
      } else {
        for (let i = 2; i < pageNum; i += 1) {
          middleArray.push(i);
        }
      }
      return middleArray;
    },
  },
  watch: {
    pageCount: {
      immediate: true,
      handler: 'compare',
    },
    currentPage(_val) {
      this.current = _val;
    },
    pageList() {
      const pageNum = Number(this.pageCount);
      const frontIndex = this.pageList.indexOf(2);
      const endIndex = this.pageList.indexOf(pageNum - 1);

      this.showPrev = frontIndex === -1;
      this.showNext = endIndex === -1;
    },
  },
  beforeMount() {
    this.current = this.currentPage;
  },
  methods: {
    // 是否显示快速移动
    compare() {
      if (this.pageCount > this.pagerCount) {
        this.showPrev = true;
        this.showNext = true;
      } else {
        this.showPrev = false;
        this.showNext = false;
      }
    },
    // 修改当前页码
    changePage(_event) {
      if (this.disabled) {
        return;
      }
      const targetClass = _event.target.className;
      const quickStep = this.pagerCount - 3;
      if (targetClass.indexOf('--prev') > -1) {
        this.current = Number(this.current - quickStep);
        if (this.current < 2) {
          this.current = 2;
        }
      } else if (targetClass.indexOf('--next') > -1) {
        this.current = Number(this.current + quickStep);
        if (this.current > this.pageCount) {
          this.current = this.pageCount;
        }
      } else if (targetClass.indexOf('__prev') > -1) {
        const minCurrent = this.current - 1;
        if (minCurrent > 0) {
          this.current = this.current - 1;
        }
        // 上一页失效，不可再点击，current仍为1
      } else if (targetClass.indexOf('__next') > -1) {
        const maxCurrent = this.current + 1;
        if (maxCurrent <= this.pageCount) {
          this.current = maxCurrent;
        }
        // 下一页失效，不可再点击，current仍为最后一页
      } else {
        this.current = Number(_event.target.innerText);
      }
      this.$emit('changePage', Number(this.current));
    },
    // 鼠标在快速移动标识上的移入移出事件
    onMouseenter(_type) {
      if (this.disabled) {
        return;
      }
      if (_type === 'left') {
        this.leftFlag = '<<';
      } else if (_type === 'right') {
        this.rightFlag = '>>';
      }
    },
    onMouseleave(_type) {
      if (_type === 'left') {
        this.leftFlag = '...';
      } else if (_type === 'right') {
        this.rightFlag = '...';
      }
    },
  },
};
</script>
