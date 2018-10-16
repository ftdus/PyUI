import Vue from 'vue';
import {
  createTest,
  createVue,
  destroyVM
} from './util';
import loadingBar from '@/components/loadingBar/index'

describe('loadingBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(loadingBar, {
      color: 'red',
      progress: 50,
    }, true);

    const elStyle = vm.$el.style;

    expect(elStyle.background).to.equal('rgb(64, 158, 255)');
    expect(elStyle.boxShadow).to.be.equal('0 0 1px #409eff');
    expect(elStyle.width).to.be.equal('0%');

  });

  it('hanldeClick', done => {
    vm = createVue({
      template: `
        <button class='close' @click='closeLoading' ref='close'>关闭</button>
      `,
      methods: {
        start() {
          this.$loading.start();
        },
        closeLoading() {
          this.$loading.close();
        },
        updataLoading() {
          this.$loading.updata({
            color: 'rgb(247, 18, 18)',
            progress: 32,
          });
        },
      },
    }, true);

    vm.start();

    let el = document.querySelector('.py-loaderBar');
    expect(el).to.exist;
    expect(el.style.background).to.equal('rgb(64, 158, 255)');
    expect(el.style.width).to.equal('0%');

    setTimeout(done => {
      document.querySelector('.close').click();
      done();
    }, 100);


    vm.updataLoading();
    el = document.querySelector('.py-loaderBar');
    expect(el).to.exist;
    expect(el.style.background).to.equal('rgb(247, 18, 18)');
    expect(el.style.width).to.equal('32%');
  });
});