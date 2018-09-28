import PyTabPane from '../tabs/src/tab-pane.vue';

const TabPane = {
  install(Vue) {
    Vue.component('PyTabPane', PyTabPane);
  },
};

export default TabPane;
