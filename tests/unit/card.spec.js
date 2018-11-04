import PYCard from '@/components/card/index';
import {
  mount
}
from '@vue/test-utils'
describe('PYCard', () => {
  afterEach(() => {
    setTimeout(() => {
      wrapper.destory();
    }, 100);
  });
  it('card头部具名插槽', () => {
    const wrapper = mount(PYCard, {
      slots: {
        header: '<div> mountainc44 </div>'
      }
    });
    expect(wrapper.find('.py-card__header').text()).to.include('mountainc44');
  });

  it('card自定义头部', () => {
    const wrapper = mount(PYCard, {
      propsData: {
        header: 'mountainc44'
      }
    });
    expect(wrapper.find('.py-card__header').text()).to.include('mountainc44');
  });

  it('card自定义bodyStyle', () => {
    const wrapper = mount(PYCard, {
      propsData: {
        bodyStyle: {
          padding: '10px'
        }
      }
    });
    expect(wrapper.find('.py-card__body').hasStyle('padding', '10px')).to.be.true;
  });

  it('card总是显示阴影', () => {
    const wrapper = mount(PYCard, {
      propsData: {
        shadow: 'always'
      }
    });
    expect(wrapper.classes('is-always-shadow')).to.be.true;
  });

  it('card鼠标触碰显示阴影', () => {
    const wrapper = mount(PYCard, {
      propsData: {
        shadow: 'hover'
      }
    });
    expect(wrapper.classes('is-hover-shadow')).to.be.true;
  });

  it('card永不显示阴影', () => {
    const wrapper = mount(PYCard, {
      propsData: {
        shadow: 'never'
      }
    });
    expect(wrapper.classes('is-never-shadow')).to.be.true;
  });
});
