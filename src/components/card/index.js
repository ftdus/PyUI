import PYCard from './src/card.vue';

PYCard.install = function PyCard(Vue) {
  Vue.component(PYCard.name, PYCard);
};

export default PYCard;
