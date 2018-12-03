import PyAvatar from './src/avatar.vue';

PyAvatar.install = function(Vue) {
  Vue.component(PyAvatar.name, PyAvatar);
};

export default PyAvatar;
