import PYScroll from '@/components/scroll/index';
import { mount } from '@vue/test-utils';

describe('PYScroll', () => {
  it('slot-默认插槽', () => {
    const wrapper = mount(PYScroll, {
      slots: {
        defalut: '<div> scrollDiv </div>',
      },
    });
    expect(wrapper.find('.py-scroll__container > div').text()).to.include('scrollDiv');
  });

  it('props => heigth', () => {
    const wrapper = mount(PYScroll, {
      propsData: {
        heigth: 300,
      },
    });
    expect(wrapper.vm.heigth).toBe(300);
  });

  it('props => loadText', () => {
    const wrapper = mount(PYScroll, {
      propsData: {
        loadText: 'test',
      },
    });
    expect(wrapper.vm.loadText).toBe('test');
  });

  it('props => distanceToEdge', () => {
    const wrapper = mount(PYScroll, {
      propsData: {
        distanceToEdge: 20,
      },
    });
    expect(wrapper.vm.distanceToEdge).toBe(20);
  });

  it('props => onReachTop', () => {
    const onReachTop = () => {};
    const wrapper = mount(PYScroll, {
      propsData: {
        onReachTop: onReachTop,
      },
    });
    expect(wrapper.vm.onReachTop).toBe(onReachTop);
  });

  it('props => onReachBottom', () => {
    const onReachBottom = () => {};
    const wrapper = mount(PYScroll, {
      propsData: {
        onReachBottom: onReachBottom,
      },
    });
    expect(wrapper.vm.onReachBottom).toBe(onReachBottom);
  });

  it('props => onReachEdge', () => {
    const onReachEdge = () => {};
    const wrapper = mount(PYScroll, {
      propsData: {
        onReachEdge: onReachEdge,
      },
    });
    expect(wrapper.vm.onReachEdge).toBe(onReachEdge);
  });

  it('dom 事件 => scroll', () => {
    const wrapper = mount(PYScroll);
    expect(wrapper.trigger('scroll'));
  });
});
