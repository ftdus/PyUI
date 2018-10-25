import {
  createTest,
  createVue,
  destroyVM
} from './util';
import PYInput from '@/components/input/index'

const chai = require('chai');
const expect = (typeof require === 'undefined') ? chai.expect : require('chai').expect;

describe('PYInput', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PYInput, {
      autofocus: true,
      placeholder: '这是placeholder',
      name: 'input',
      size: 'large',
      maxlength: 5,
      value: 'value',
    }, true);
    setTimeout(() => {
      const inputEl = vm.$el.querySelector('input');
      expect(inputEl.getAttribute('placeholder')).to.equal('这是placeholder');
      expect(inputEl.getAttribute('name')).to.equal('input');
      expect(inputEl.getAttribute('size')).to.equal('large');
      expect(inputEl.getAttribute('maxlength')).to.equal('5');
      expect(inputEl.value).to.equal('value');
      return expect(inputEl.autofocus).to.be.true;
    }, 20);
  });

  it('hanleClick', () => {
    vm = createVue({
      template: `
        <py-input
          ref='input'
          v-model='value' />
      `,
      data() {
        return {
          value: '123',
        };
      },
      methods: {
        getValue() {
          return this.$refs.input.getValue();
        },
        handleFocus() {
          this.$refs.input.focus();
        },
        clearValue() {
          this.$refs.textarea.clearInput();
        },
      },
    }, true);

    setTimeout(() => {
      const inputEl = vm.$el.querySelector('input');
      vm.handleFocus();
      
      expect(inputEl.value).to.equal('123');
      expect(vm.getValue()).to.equal('123');

      vm.clearValue();
      expect(inputEl.value).to.equal('');
      return expect(inputEl.autofocus).to.be.true;
    }, 20);
  });

  it('isShow', () => {
    vm = createVue({
      template: `
        <py-input :disabled='disabled' :readonly='readonly'>
          <i class="iconfont  icon-coordinates" slot="before"></i>
          <i class="iconfont  icon-coordinates" slot="after"></i>
        </py-input>
      `,
      data() {
        return {
          disabled: true,
          readonly: true,
        };
      },
      methods: {
        toggleDisabled() {
          this.disabled = !this.disabled;
        },
        toggleReadonly() {
          this.readonly = !this.readonly;
        },
      },
    });

    setTimeout(() => {
      const i = vm.$el.querySelectorAll('i').length;
      const inputEl = vm.$el.querySelector('input');
      
      expect(i).to.equal(2);
      expect(inputEl.disabled).to.be.true;
      expect(inputEl.readonly).to.be.true;

      vm.toggleDisabled();
      vm.toggleReadonly();
      
      expect(inputEl.readonly).to.be.false;
      return expect(inputEl.disabled).to.be.false;
    }, 20);
  });

  // textarea
  it('createTextarea', () => {
    vm = createTest(PYInput, {
      type: 'textarea',
      autofocus: true,
      name: 'textarea',
      maxlength: 5,
      value: 'value',
      placeholder: '这是placeholder',
    }, true);

    setTimeout(() => {
      const inputEl = vm.$el.querySelector('textarea');

      expect(inputEl.value).to.equal('value');
      expect(inputEl.getAttribute('maxlength')).to.equal('5');
      expect(inputEl.getAttribute('name')).to.equal('textarea');
      expect(inputEl.getAttribute('placeholder')).to.equal('这是placeholder');
      expect(inputEl.type).to.equal('textarea');
      return expect(inputEl.autofocus).to.be.true;
    }, 20);
  });

  it('textareaClick', () => {
    vm = createVue({
      template: `
        <py-input
          type='textarea'
          ref='input'
          v-model='value' />
      `,
      data() {
        return {
          value: '123',
        };
      },
      methods: {
        getValue() {
          return this.$refs.input.getValue();
        },
        handleFocus() {
          this.$refs.input.focus();
        },
        clearValue() {
          this.$refs.textarea.clearInput();
        },
      },
    }, true);

    setTimeout(() => {
      const inputEl = vm.$el.querySelector('input');
      vm.handleFocus();
      
      expect(inputEl.type).to.equal('textarea');
      expect(inputEl.value).to.equal('123');
      expect(vm.getValue()).to.equal('123');

      vm.clearValue();
      expect(inputEl.value).to.equal('');
      return expect(inputEl.autofocus).to.be.true;
    }, 20);
  });

  it('toggleShow', () => {
    vm = createVue({
      template: `
        <py-input type='textarea' :disabled='disabled' :readonly='readonly'>
        </py-input>
      `,
      data() {
        return {
          disabled: true,
          readonly: true
        };
      },
      methods: {
        toggleDisabled() {
          this.disabled = !this.disabled;
        },
        toggleReadonly() {
          this.readonly = !this.readonly;
        },
      },
    });

    setTimeout(() => {
      const inputEl = vm.$el.querySelector('textarea');
      
      expect(inputEl.disabled).to.be.true;
      expect(inputEl.readonly).to.be.true;

      vm.toggleDisabled();
      vm.toggleReadonly();
      expect(inputEl.disabled).to.be.false;
      return expect(inputEl.readonly).to.be.false;
    }, 20);
  });
});
