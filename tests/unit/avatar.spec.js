/* eslint-disable no-unused-expressions */
import PyAvatar from '@/components/avatar/index';
// import PyIcon from '@/components/icon/index';
import { mount } from '@vue/test-utils';
import { expect } from "chai";
import Vue from 'vue';

describe('PyAvatar', () => {

  let wrapper;
  afterEach(() => {
    wrapper.destroy();
  });

  it('默认情况下的avatar', () => {
    wrapper = mount(PyAvatar, {
      propsData: {
        slot: 'ABC',
      },
    });

    expect(wrapper.classes('py-avatar--circle', 'py-avatar--default')).to.be.true;
  });

  it('avatar自定义形状和大小', () => {
    wrapper = mount(PyAvatar, {
      propsData: {
        slot: 'ABC',
        shape: 'square',
        size: 'large',
      },
    });
    expect(wrapper.classes('py-avatar--square', 'py-avatar--large')).to.be.true;
  });

  it('图片类型的avatar', () => {
    wrapper = mount(PyAvatar, {
      propsData: {
        src: 'https://cn.vuejs.org/images/logo.png',
      },
    });
    expect(wrapper.contains('img')).to.be.true;
    expect(wrapper.classes('py-avatar__image')).to.be.true;
  });

  it('icon类型的avatar', () => {
    wrapper = mount(PyAvatar, {
      propsData: {
        icon: 'frown',
      },
    });
    // const pyIconElem = wrapper.find('.py-avatar__icon');
    // expect(pyIconElem.is(PyIcon)).to.be.true;
    expect(wrapper.contains('.py-icon-frown')).to.be.true;
  });

  it('自定义icon类型的avatar', () => {
    wrapper = mount(PyAvatar, {
      propsData: {
        customIcon: ['pyui-icons', 'py-icon-heart-fill'],
      },
    });
    expect(wrapper.contains('.pyui-icons.py-icon-heart-fill')).to.be.true;
  });

  it('自定义背景和颜色的avatar', () => {
    wrapper = mount(PyAvatar, {
      propsData: {
        color: '#f56a00',
        backgroundColor: '#fde3cf',
        slot: 'ABC',
      },
    });
    expect(wrapper.find('.py-avatar').element.style.color).to.equal('rgb(245, 106, 0)');
    expect(wrapper.find('.py-avatar').element.style.backgroundColor).to.equal('rgb(253, 227, 207)');
  });

  // TODO: 未解决，待查看是什么问题导致transform 的属性一直为空
  it('avatar 文本大小自适应', done => {
    wrapper = mount(PyAvatar, {
      propsData: {
        slot: 'A',
      },
    });

    expect(wrapper.find('.py-avatar-string').element.style.transform).to.equal('scale(1)');

    wrapper.setProps({ slot: 'Short' });
    Vue.nextTick(() => {
      expect(wrapper.find('.py-avatar-string').element.style.transform).to.equal(`scale(0.5)`);
      done();
    });
  });

  it('avatar自定义点击事件', () => {
    // const clickHandler = sinon.stub();
    wrapper = mount(PyAvatar, {
      propsData: {
        slot: 'A',
      },
      data() {
        return { testID: 1 };
      },
      methods: {
        handleClick(event) {
          this.testID = 2;
        },
      },
    });

    wrapper.trigger('click');
    expect(wrapper.vm.testID).to.equal(2);
  });

});
