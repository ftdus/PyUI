import { createTest, createVue, destroyVM } from './util';
import PYButton from '@/components/button/index';

// const expect = require('chai').expect;


describe('PYButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(PYButton, { type: 'primary' }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('py-button--primary')).to.be.true;
  });
  it('size', () => {
    vm = createTest(PYButton, { size: 'large' }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('py-button--large')).to.be.true;
  });
  it('shape', () => {
    vm = createTest(PYButton, { shape: 'circle' }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('py-button--circle')).to.be.true;
  });
  it('icon', () => {
    vm = createTest(PYButton, { icon: 'icon-search' }, true);
    const buttonElm = vm.$el;
    const res = expect(buttonElm.querySelector('.icon-search'));
    res.to.be.ok;
  });
  it('long', () => {
    vm = createTest(PYButton, { long: true }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('py-button--long')).to.be.true;
  });
  it('disabled', () => {
    vm = createTest(PYButton, { disabled: true }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.getAttribute('disabled')).to.be.ok;
  });
  it('loading', () => {
    vm = createTest(PYButton, { loading: true }, true);
    const buttonElm = vm.$el;
    expect(buttonElm.classList.contains('py-button--loading')).to.be.true;
  });
  it('click', done => {
    let result;
    vm = createVue({
      template: `<py-button @click="handleClick"></py-button>`,
      methods: {
        handleClick(evt) {
          result = evt;
        },
      },
    }, true);
    console.log(vm.$el.template);
    vm.$el.click();
    
    setTimeout(_ => {
      expect(result).to.exist;
      done();
    }, 20);
  });
});

