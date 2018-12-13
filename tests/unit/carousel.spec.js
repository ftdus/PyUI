/* eslint-disable no-undef */
import { shallowMount, mount } from '@vue/test-utils';
import PYCarousel from '@/components/carousel/index';
import { createTest, destroyVM, createVue } from './util';

describe('PYCarousel', () => {
  let vm;
  let carouselElm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('组件创建', () => {
    vm = createTest(PYCarousel, {}, true);
    carouselElm = vm.$el;
    // eslint-disable-next-line no-unused-expressions
    expect(carouselElm.classList.contains('py-carousel')).to.be.true;
  });
  it('设置初始不自动轮播', () => {
    carouselElm = mount(PYCarousel, {
      propsData: {
        autoloop: false,
      },
      slots: {
        default: ['<div>轮播2</div>', '<div>轮播2</div>', '<div>轮播2</div>'],
      },
    });
    // eslint-disable-next-line no-unused-expressions
    expect(carouselElm.props('autoloop')).toBe('false');
  });
  it('两侧箭头点击', () => {
    carouselElm = shallowMount(PYCarousel, {
      propsData: {
        autoloop: false,
      },
      slots: {
        default: ['<div>轮播2</div>', '<div>轮播2</div>', '<div>轮播2</div>'],
      },
    });
    expect(carouselElm.classes('py-carousel__positions-outside')).to.be.true;
  });
});
