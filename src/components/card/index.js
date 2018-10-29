import PyCard from './src/card.vue';

PyCard.install = function(Vue) {
  Vue.component(PyCard.name, PyCard);
};

export default PyCard;
