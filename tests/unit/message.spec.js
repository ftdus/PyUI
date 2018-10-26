import { createTest, createVue, destroyVM } from './util';
import Message from '@/components/message/index';

describe('Message', () => {
  it('automatically close', done => {
    Message({
      message: '灰风',
      duration: 500,
    });
    const message = document.querySelector('.py-message__content');
    expect(document.querySelector('.py-message')).to.exist;
    expect(message.textContent).to.equal('灰风');
    setTimeout(() => {
      expect(document.querySelector('.py-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('manually close', done => {
    Message({
      message: '夏天',
      showClose: true,
    });
    setTimeout(() => {
      document.querySelector('.py-message__close').click();
      setTimeout(() => {
        expect(document.querySelector('.py-message')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });

  it('custom icon', done => {
    Message({
      message: '夏天',
      iconClass: 'test-close',
    });
    setTimeout(() => {
      const icon = document.querySelector('.py-message i');
      expect(icon.classList.contains('test-close')).to.true;
      done();
    }, 500);
  });

  it('html string', () => {
    Message({
      message: '<strong>夏天</strong>',
      dangerouslyUseHTMLString: true,
    });
    const message = document.querySelector('.py-message strong');
    expect(message.textContent).to.equal('夏天');
  });

  it('create', () => {
    Message('娜梅莉亚');
    expect(document.querySelector('.py-message')).to.exist;
  });

  it('invoke with type', () => {
    Message.success('毛毛狗');
    expect(document.querySelector('.py-message').__vue__.type).to.equal(
      'success'
    );
  });

  it('center', () => {
    Message({
      message: '夏天',
      center: true,
      duration: 0,
    });
    expect(
      document.querySelector('.py-message').classList.contains('is-center')
    ).to.true;
  });

  it('reset timer', done => {
    Message({
      message: '白灵',
      duration: 1000,
    });
    setTimeout(() => {
      triggerEvent(document.querySelector('.py-message'), 'mouseenter');
      setTimeout(() => {
        expect(document.querySelector('.py-message')).to.exist;
        done();
      }, 700);
    }, 500);
  });
});
