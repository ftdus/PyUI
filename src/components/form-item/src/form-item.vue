<template>
  <div
    class="py-form-item" :class="[{
     'is-required': isRequired || required,
     'is-error': validateState === 'error',
     'is-success': validateState === 'success'
  }]"
  >
    <label
      :for="labelFor" class="py-form-item__label" v-if="label || $slots.label" :style="labelStyle"
    >
      <slot name="lable">{{label}}</slot>
    </label>
    <div class="py-form-item__content" :style="contentStyle">
      <!--<p>validateState &emsp;&emsp;&emsp;{{validateState}}</p>-->
      <!--<p>showMessage  &emsp;&emsp;&emsp;{{showMessage === true}} </p>-->
      <!--<p>form.showMessage &emsp;&emsp;&emsp;{{form.showMessage === true}}</p>-->
      <!--<p>{{1===1}}</p>-->
      <slot></slot>
      <transition name="fade">
        <slot name="error">
          <div
            v-if="validateState === 'error' && showMessage
          && form.showMessage" :error="validateMessage"
          >
            <div
              class="py-form-item__error" :class="{
              'py-form-item__error--inline': typeof inlineMessage === 'boolean'
                ? inlineMessage
                : (pyForm && pyForm.inlineMessage || false)
            }"
            >
            {{validateMessage}}
          </div>
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script>
// 组件class前缀
import AsyncValidator from 'async-validator';
import { noop, getPropByPath } from '../../../../src/utils/util';
import emitter from '../../../../src/mixins/emitter';

export default {
  inject: ['pyForm'],
  provide() {
    return {
      pyFormItem: this,
    };
  },
  name: 'PyFormItem',
  mixins: [emitter],
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      isNested: false,
    };
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value;
      },
    },
  },
  computed: {
    labelFor() {
      return this.for || this.prop;
    },
    form: {
      get() {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== 'PyForm') {
          parent = parent.$parent;
          parentName = parent.$options.name;
        }
        return parent;
      },
      set() {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== 'PyForm') {
          if (parentName === 'PyFormItem') {
            this.isNested = true;
          }
          parent = parent.$parent;
          parentName = parent.$options.name;
        }
      },
    },
    labelStyle() {
      const style = {};
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) style.width = labelWidth;
      return style;
    },
    contentStyle() {
      const ret = {};
      const { label } = this;
      if (this.form.labelPosition === 'top' || this.form.inline) return ret;
      if (!label && !this.labelWidth && this.isNested) return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    isRequired() {
      const rules = this.getRules();
      let isRequired = false;
      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true;
          }
          return false;
        });
        return true;
      }
      return isRequired;
    },
    fieldValue() {
      const { model } = this.form;
      if (!model || !this.prop) {
        return null;
      }
      
      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }
      const result = getPropByPath(model, path, true);
      return result.v;
    },
  },
  methods: {
    validate(trigger, callback = noop) {
      this.validateDisabled = false;
      const rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }
      
      this.validateState = 'validating';
      
      const descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;
      
      const validator = new AsyncValidator(descriptor);
      const model = {};
      
      model[this.prop] = this.fieldValue;
      
      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        // debugger
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
        callback(this.validateMessage, invalidFields);
        if (this.pyForm) {
          this.pyForm.$emit('validate', this.prop, !errors, this.validateMessage || null);
        }
      });
      return false;
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      
      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') return true;
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1;
          }
          return rule.trigger === trigger;
        })
        .map(rule => Object.assign({}, rule));
    },
    getRules() {
      let formRules = this.form.rules;
      const selfRules = this.rules;
      const requiredRule = this.required !== undefined ? { required: !!this.required } : [];
      const prop = getPropByPath(formRules, this.prop || '');
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : [];
      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';
      
      const { model } = this.form;
      const value = this.fieldValue;
      
      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }
      // console.log('this.form', this.form);
      // console.log('model', model);
      const prop = getPropByPath(model, path, true);
      // console.log("value", value);
      this.validateDisabled = true;
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }
      // console.log('prop', prop);
      
      this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
    },
  },
  mounted() {
    // prop 外部传进来，绑定的key
    if (this.prop) {
      this.dispatch('PyForm', 'el.form.addField', [this]);
      
      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue,
      });
      const rules = this.getRules();
      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur);
        this.$on('el.form.change', this.onFieldChange);
      }
    }
  },
};
</script>
