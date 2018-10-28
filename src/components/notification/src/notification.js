import Vue from 'vue';
import NotificationComp from './notification.vue';

const NotificationConstructor = Vue.extend(NotificationComp);

let instance;
const instances = [];
let seed = 1;

const Notification = function(optionsParam) {
  if (Vue.prototype.$isServer) return null;
  const options = optionsParam || {};
  const userOnClose = options.onClose;
  const id = `notification_${(seed += 1)}`;
  const position = options.position || 'top-right';

  options.onClose = function() {
    Notification.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options,
  });

  // if (isVNode(options.message)) {
  //   instance.$slots.default = [options.message];
  //   options.message = 'REPLACED_BY_VNODE';
  // }
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  // instance.dom.style.zIndex = PopupManager.nextZIndex();

  let verticalOffset = options.offset || 0;
  instances.filter(item => item.position === position).forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  instance.verticalOffset = verticalOffset;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Notification[type] = optionsParam => {
    let options = {};
    if (typeof optionsParam === 'string') {
      //  || isVNode(options)
      options = {
        message: optionsParam,
      };
    } else {
      options = optionsParam;
    }
    options.type = type;
    return Notification(options);
  };
});

Notification.close = function(id, userOnClose) {
  let index = -1;
  const len = instances.length;
  const instanceInner = instances.filter((instanceItem, i) => {
    if (instanceItem.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];
  if (!instanceInner) return;

  if (typeof userOnClose === 'function') {
    userOnClose(instanceInner);
  }
  instances.splice(index, 1);

  if (len <= 1) return;
  const { position } = instanceInner;
  const removedHeight = instanceInner.dom.offsetHeight;
  for (let i = index; i < len - 1; i += 1) {
    if (instances[i].position === position) {
      instances[i].dom.style[instanceInner.verticalProperty] = `${parseInt(
        instances[i].dom.style[instanceInner.verticalProperty],
        10,
      ) -
        removedHeight -
        16}px`;
    }
  }
};

Notification.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i -= 1) {
    instances[i].close();
  }
};

export default Notification;
