<template>
  <div
    class="py-form" :class="[
  labelPosition ? 'py-form--label-' + labelPosition : '',
  {'py-form--inline': inline}
  ]"
  >
    <slot></slot>
  </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'py-form';
export default {
  name: 'PyForm',
  provide() {
    return {
      pyForm: this,
    };
  },
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: '',
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fields: [],
    };
  },
  created() {
    this.$on('el.form.addField', field => {
      if (field) {
        this.fields.push(field);
      }
      // console.log('field', field);
    });
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },
  },
  methods: {
    resetFields() {
      if (!this.model) {
        console.warn('[PuUi Warn][Form]model is required for resetFields to work.');
        return;
      }
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    validate(callback) {
      if (!this.model) {
        console.warn('[Pyement Warn][Form]model is required for validate to work!');
        return;
      }
      if (typeof callback !== 'function' && window.Promise) {
        /* eslint-disable no-new */
        new window.Promise((resolve, reject) => {
          callback = function(valid) {
            if (valid) {
              resolve(valid);
            } else {
              reject(valid);
            }
          };
        });
        /* eslint-enable no-new */
      }
      
      let valid = true;
      let count = 0;
      
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      
      let invalidFields = {};
      this.fields.forEach(field => {
        field.validate('', (message, fieldv) => {
          if (message) {
            valid = false;
          }
          invalidFields = Object.assign({}, invalidFields, fieldv);
          count += 1;
          if (typeof callback === 'function' && count === this.fields.length) {
            callback(valid, invalidFields);
          }
        });
      });
    },
    validateField(props, cb) {
      props = [].concat(props);
      const fields = this.fields.filter(field => props.indexOf(field.prop) !== -1);
      if (!fields.length) {
        console.warn('[Pyement Warn]please pass correct props!');
        return;
      }
      
      fields.forEach(field => {
        field.validate('', cb);
      });
    },
  },
};
</script>
