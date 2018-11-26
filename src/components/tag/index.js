import PYTag from './src/Tag.vue';

PYTag.install = Vue => {
  Vue.component(PYTag.name, PYTag);
};

export default PYTag;
