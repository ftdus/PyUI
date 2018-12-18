/* eslint-disable */

import PyTooltip from '@/components/tooltip/index';
import { mount } from '@vue/test-utils';

describe('PyTooltip', () => {
  // it('tooltip主题', () => {
  //   const wrapper = mount(PYTooltip, {
  //     propsData: {
  //       theme: 'light'
  //     }
  //   });
  //   expect(wrapper.classes('py-tooltip__light')).to.be.true;
  // });
  // it('tooltip方向', () => {
  //   const wrapper = mount(PYTooltip, {
  //     propsData: {
  //       placement: 'right'
  //     }
  //   });
  //   expect(wrapper.classes('x-placement').text()).to.equal('righ');
  // });
  // it('tooltip内容', () => {
  //   const wrapper = mount(PyTooltip, {
  //     propsData: {
  //       content: 'hi'
  //     }
  //   });
  //   expect(wrapper.find('.py-tooltip__inner').text()).to.include('hi');
  // });
  it('tooltip总是显示', () => {
    const wrapper = mount(PyTooltip, {
      propsData: {
        always: true,
      },
    });
    expect(wrapper.always).to.be.true;
  });

  afterEach(() => {
    setTimeout(() => {
      wrapper.destory();
    }, 100);
  });

});
