import Vue from 'vue';
import message from './message.vue';
const MessageConstructor = Vue.extend(message);

const Message = function(options = {}) {
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  let me = new MessageConstructor({
    data: options,
  });
  me.vm = me.$mount();
  me.vm.visible = true;
  document.body.appendChild(me.vm.$el);
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;
    return Message(options);
  };
});

export default Message;
