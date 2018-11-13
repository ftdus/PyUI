import PyPageInput from './pageInput.vue';
import PyPager from './pager.vue';

export default {
  name: 'PyPagination',
  components: {
    PyPageInput,
    PyPager,
    MySlot: {
      render() {
        return this.$parent.$slots.default ? this.$parent.$slots.default : '';
      },
    },
    Total: {
      render() {
        return (
          <div class="py-pagination__total">
            共<span>{this.$parent.total}</span>条
          </div>
        );
      },
    },
  },
  props: {
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator(value) {
        return (
          (value || 0) === value && value > 4 && value < 22 && value % 2 === 1
        );
      },
      default: 7,
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    simple: Boolean,
    prevText: {
      type: String,
      required: false,
      default: '<',
    },
    nextText: {
      type: String,
      required: false,
      default: '>',
    },
    layout: {
      type: String,
      default: 'total, pager, jumper, pageInput',
    },
  },
  data() {
    return {
      current: this.currentPage,
    };
  },
  render() {
    const template = <div class="py-pagination" />;
    const layout = this.layout || '';
    if (!layout) return undefined;
    const CHILD_TEMPLATE = {
      pager: (
        <py-pager
          currentPage={this.current}
          pageCount={this.pageCount}
          pagerCount={this.pagerCount}
          layout={this.layout}
          disabled={this.disabled}
          simple={this.simple}
          prevText={this.prevText}
          nextText={this.nextText}
          on-changePage={this.changePage}
        />
      ),
      jumper: (
        <py-page-input
          currentPage={this.current}
          pageCount={this.pageCount}
          disabled={this.disabled}
          on-changeCurrent={this.changeCurrent}
        />
      ),
      slot: <my-slot />,
      total: <total />,
    };
    const components = layout.split(',').map(item => item.trim());
    template.children = template.children || [];

    components.forEach(compo => {
      if (compo && CHILD_TEMPLATE[compo]) {
        template.children.push(CHILD_TEMPLATE[compo]);
      }
    });
    return template;
  },
  methods: {
    changeCurrent(_page) {
      this.current = _page;
    },
    changePage(_page) {
      this.current = _page;
    },
  },
};
