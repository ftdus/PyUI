{{__components_imports__}}

const components = [{{__components__}}];
const install = function(Vue) {
  const vue = Vue;
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });

    {{__components_globals__}}

  // istanbul ignore if
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
};

export default {
  version: '{{__version__}}',
  install,
  {{__components_export__}}
};
