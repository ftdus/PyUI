import { createTest, createVue, destroyVM } from './util';
import PYBadge from '@/components/badge/index';

const chai = require('chai');
const expect = (typeof require === 'undefined') ? chai.expect : require('chai').expect;


describe('PYButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('max', () => {
    vm = createTest(PYBadge, { max: 99, content: 1000 }, true);
    expect(vm.contentDot).to.equal("99+");
  });
  it('content', () => {
    vm = createTest(PYBadge, { content: 10 }, true);
    expect(vm.contentDot).to.equal(10);
  });
  it('hidden', () => {
    vm = createTest(PYBadge, { hidden: true }, true);
    expect(vm.$el.querySelector(".py-badge__dot").style.display).to.equal("none");
  });
  it('type', () => {
    vm = createTest(PYBadge, { type: "success" }, true);
    expect(vm.$el.querySelector(".py-badge__dot--success")).to.exist;
  });
  it('isDot', () => {
    vm = createTest(PYBadge, { isDot: true }, true);
    expect(vm.$el.querySelector(".py-badge__count")).to.exist;
  });
});
