import PySpin from '@/components/spin/index';
import { mount } from '@vue/test-utils';

describe('PySpin', () => {
  afterEach(() => {
    setTimeout(() => {
      wrapper.destory();
    }, 100);
  });
  it('自定义body内容', () => {
    const wrapper = mount(PySpin, {
      slots: {
        default: '<div> mountainc44 </div>'
      }
    });
    expect(wrapper.find('.py-spin').text()).to.include('mountainc44');
  });
  
  it('使用fix', () => {
    const wrapper = mount(PySpin, {
      propsData: {
        fix: true
      }
    });
    expect(wrapper.find('.py-spin').hasStyle('position', 'absolute')).to.be.true
  })
  it('自定义外层class', () => {
    const wrapper = mount(PySpin, {
      propsData: {
        spinClass: 'love'
      }
    });
    expect(wrapper.classes('.love')).to.be.true
  })
})
