import { oneOf } from '../utils/util';

export default {
  props: {
    to: {
      type: [Object, String],
    },
    replace: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      validator(value) {
        return oneOf(value, ['_blank', '_self', '_parent', '_top']);
      },
      default: '_self',
    },
  },
  computed: {
    linkUrl() {
      const type = typeof this.to;
      return type === 'string' ? this.to : null;
    },
  },
  methods: {
    handleClick(newWindow = false) {
      if (newWindow) {
        window.open(this.to);
      } else {
        const isRoute = this.$router;
        if (isRoute) {
          if (this.replace) {
            this.$router.replace(this.to);
          } else {
            this.$router.push(this.to);
          }
        } else {
          window.location.href = this.to;
        }
      }
    },
    handleCheckClick(event, newWindow = false) {
      if (this.to) {
        if (this.target === '_blank') {
          return false;
        }
        event.preventDefault();
        this.handleClick(newWindow);
      }
      return true;
    },
  },
};
