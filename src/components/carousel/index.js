import PyCarousel from './src/carousel.vue';

PyCarousel.install = function(Vue) {
  Vue.component(PyCarousel.name, PyCarousel);
};

export default PyCarousel;
