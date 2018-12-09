/* eslint-disable no-unused-expressions */
import PyRadio from '@/components/radio';
import PyRadioGroup from '@/components/radio-group';
import { expect } from "chai";
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

Vue.use(PyRadio);

describe('PyRadio', () => {

  let groupWrapper;
  let radioWrapper;

  before(() => {
    // const value = 1;
    groupWrapper = shallowMount(PyRadioGroup, {
      propsData: {
        value: 1,
      },
      slots: {
        default: ['<py-radio :label="1">选项1</py-radio>', '<py-radio :label="2">选项2</py-radio>'],
      },
    });
    radioWrapper = shallowMount(PyRadio, {
      propsData: {
        value: '1',
        label: '2',
      },
      listeners: {
        change: label => expect(label === '2').to.be.true,
      },
    });
  });

  it('radio 选中与未选中css', () => {
    // 未选中
    expect(radioWrapper.classes('py-radio--enabled')).to.be.true;
    expect(radioWrapper.classes('py-radio--selected')).to.be.false;

    // 选中状态 @vue/test-utils 中已经处理了vue异步更新dom的问题，变为同步更新
    radioWrapper.setProps({ value: '2' });
    expect(radioWrapper.hasClass('py-radio--enabled py-radio--selected')).to.be.true;
  });

  it('radio 禁用', () => {
    // 没有禁用
    expect(radioWrapper.classes('py-radio--disabled')).to.be.false;

    // 禁止点击且选中状态
    radioWrapper.setProps({ disabled: true, value: '2' });
    expect(radioWrapper.hasClass('py-radio--disabled py-radio--selected')).to.be.true;

    // 禁止点击且未选中状态
    radioWrapper.setProps({ value: '1', disabled: true });
    expect(radioWrapper.classes('py-radio--disabled')).to.be.true;
    expect(radioWrapper.classes('py-radio--selected')).to.be.false;
  });

  it('radio group 互斥选择', () => {
    let radios;
    // group为水平布局，第一个radio选中、第二个未选中
    expect(groupWrapper.classes('py-radio-group--horizontal')).to.be.true;
    // console.log(groupWrapper.html());
    expect(groupWrapper.vm.$children[0].groupParent === groupWrapper.vm).to.be.true;
    radios = groupWrapper.findAll('label');
    expect(radios.at(0).hasClass('py-radio--enabled py-radio--selected')).to.be.true;
    expect(radios.at(1).classes('py-radio--enabled')).to.be.true;
    expect(radios.at(1).classes('py-radio--selected')).to.be.false;

    groupWrapper.setProps({
      value: 2,
    });
    // group为水平布局，第二个radio选中、第一个未选中
    expect(groupWrapper.classes('py-radio-group--horizontal')).to.be.true;
    // console.log(groupWrapper.html());
    expect(groupWrapper.vm.$children[0].groupParent === groupWrapper.vm).to.be.true;
    radios = groupWrapper.findAll('label');
    expect(radios.at(0).classes('py-radio--enabled')).to.be.true;
    expect(radios.at(0).classes('py-radio--selected')).to.be.false;
    expect(radios.at(1).hasClass('py-radio--enabled py-radio--selected')).to.be.true;
  });

  it('radio group 禁用', () => {
    groupWrapper.setProps({
      disabled: true,
    });

    // radio禁用
    const radios = groupWrapper.findAll('label');
    radios.wrappers.forEach(radio => {
      expect(radio.classes('py-radio--disabled')).to.be.true;
    });
  });

  it('radio group 垂直布局', () => {
    // 不存在垂直布局
    expect(groupWrapper.classes('py-radio-group--vertical')).to.be.false;

    groupWrapper.setProps({
      disabled: false,
      vertical: true,
    });
    // 变为垂直布局
    expect(groupWrapper.classes('py-radio-group--vertical')).to.be.true;
  });

  it('radio group button样式', () => {
    // 不存在button样式
    let radios = groupWrapper.findAll('label');
    radios.wrappers.forEach(radio => {
      expect(radio.hasClass('py-radio-btn')).to.be.false;
    });

    groupWrapper.setProps({
      disabled: false,
      vertical: false,
      type: 'button',
      size: 'small',
    });

    // 存在button样式
    radios = groupWrapper.findAll('label');
    radios.wrappers.forEach(radio => {
      expect(radio.hasClass('py-radio-btn py-radio-btn--small')).to.be.true;
    });
  });

  after(() => {
    groupWrapper.destroy();
    radioWrapper.destroy();
  });
});
