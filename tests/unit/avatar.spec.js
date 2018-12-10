import PyAvatar from '@/components/avatar/index';
// import PyIcon from '@/components/icon/index';
import { mount } from '@vue/test-utils';

describe('PyAvatar', () => {
  // afterEach(() => {
  //   setTimeout(() => {
  //     wrapper.destory();
  //   }, 100);
  // });

  it('默认情况下的avatar', () => {
    const wrapper = mount(PyAvatar, {
      propsData: {
        slot: 'ABC',
      },
    });

    expect(wrapper.classes('py-avatar--circle', 'py-avatar--default')).to.be.true;
  });

  it('avatar自定义形状和大小', () => {
    const wrapper = mount(PyAvatar, {
      propsData: {
        slot: 'ABC',
        shape: 'square',
        size: 'large',
      },
    });
    expect(wrapper.classes('py-avatar--square', 'py-avatar--large')).to.be.true;
  });

  it('图片类型的avatar', () => {
    const wrapper = mount(PyAvatar, {
      propsData: {
        src: 'https://cn.vuejs.org/images/logo.png',
      },
    });
    expect(wrapper.contains('img')).to.be.true;
    expect(wrapper.classes('py-avatar__image')).to.be.true;
  });

  it('icon类型的avatar', () => {
    const wrapper = mount(PyAvatar, {
      propsData: {
        icon: 'frown',
      },
    });
    // const pyIconElem = wrapper.find('.py-avatar__icon');
    // expect(pyIconElem.is(PyIcon)).to.be.true;
    expect(wrapper.contains('.py-icon-frown')).to.be.true;
  });

  it('自定义icon类型的avatar', () => {
    const wrapper = mount(PyAvatar, {
      propsData: {
        customIcon: ['pyui-icons', 'py-icon-heart-fill'],
      },
    });
    expect(wrapper.contains('.pyui-icons.py-icon-heart-fill')).to.be.true;
  });

  it('自定义背景和颜色的avatar', () => {
    const wrapper = mount(PyAvatar, {
      propsData: {
        color: '#f56a00',
        backgroundColor: '#fde3cf',
        slot: 'ABC',
      },
    });
    expect(wrapper.find('.py-avatar').hasStyle('color', '#f56a00')).to.be.true;
    expect(wrapper.find('.py-avatar').hasStyle('background-color', '#fde3cf')).to.be.true;
  });

  it('avatar 文本大小自适应', () => {
    const wrapper = mount(PyAvatar, {
      propsData: {
        slot: 'A',
      },
    });

    expect(wrapper.vm.scale).to.equal(1);
    // expect(wrapper.find('.py-avatar-string').hasStyle('transform', 'scale(1)')).to.be.true;

    // wrapper.setProps({ slot: 'longlonglong' });    
    // expect(wrapper.find('.py-avatar-string').hasStyle('transform', `scale(${wrapper.vm.scale})`)).to.be.true;
  });

  // TODO: 待测试自定义方法
  // it('avatar自定义点击事件和文本自适应缩放', () => {
  //   const clickHandler = sinon.stub();
  //   const wrapper = mount(PyAvatar, {
  //     propsData: {
  //       slot: 'A',
  //       clickHandler,
  //     },
  //   });
  //   wrapper.trigger('click');
  //   expect(clickHandler.called).to.be.true;
  // });

});
