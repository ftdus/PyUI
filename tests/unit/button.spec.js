
import Vue from 'vue';
import PYButton from './../../src/components/button/index';

// const expect = require('chai').expect;
const chai = require('chai');
const expect = (typeof require === 'undefined') ? chai.expect : require('chai').expect;


let id = 0;

const createElm = function () {
  const div = document.createElement('div');
  id += 1;
  div.id = 'app'.concat(id);
  document.body.appendChild(div);
  return div;
};

const destoryVM = function (vm) {
  vm.$destory && vm.$destory();
  vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
};

const createVue = function(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo };
  }
  return new Vue(Compo).$mount(mounted === false ? null : createElm());
};

const createTest = function (Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  const ele = createElm();
  const Ctor = Vue.extend(Compo);
  return new Ctor({ propsData }).$mount(mounted === false ? null : ele);
};

describe('PYButton', () => {
  let vm;
  afterEach(() => {
    destoryVM(vm);
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
    vm.$el.click();
    
    setTimeout(_ => {
      expect(result).to.exist;
      done();
    }, 20);
  });
});

