import PYTag from '@/components/tag/index';
import { mount } from '@vue/test-utils';

describe('PYTag', () => {
  let wrapper;
  afterEach(() => {
    setTimeout(() => {
      wrapper.destory()
    }, 100);
  });
  it('create type primary', () => {
    const wrapper = mount(PYTag, {
      propsData: {
        type: 'primary'
      }
    });
    expect(wrapper.classes('py-tag--primary')).to.be.true;
  });
});
