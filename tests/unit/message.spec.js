import Message from '@/components/message/index';

describe('Message', () => {
  it('automatically close', done => {
    Message({
      message: '当当当',
      duration: 500,
    });
    const message = document.querySelector('.py-message__content');
    expect(document.querySelector('.py-message')).to.exist;
    expect(message.textContent).to.equal('当当当');
    setTimeout(() => {
      expect(document.querySelector('.py-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('manually close', done => {
    Message({
      message: 'manually close',
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
      message: 'custom icon',
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
      message: '<strong>html string</strong>',
      useHTMLString: true,
    });
    const message = document.querySelector('.py-message strong');
    expect(message.innerHTML).to.equal('html string');
  });

  it('create', () => {
    Message('create');
    expect(document.querySelector('.py-message')).to.exist;
  });

  it('center', () => {
    Message({
      message: 'center',
      center: true,
    });
    console.log(document.querySelector('.py-message').classList);
    expect(
      document.querySelector('.py-message').classList.contains('is-center')
    ).to.true;
  });

  it('reset timer', done => {
    Message({
      message: 'reset timer',
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
