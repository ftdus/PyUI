import PyCarouselItem from '../carousel/src/carousel-item.vue';

PyCarouselItem.install = Vue => {
  Vue.component(PyCarouselItem.name, PyCarouselItem);
};

export default PyCarouselItem;
