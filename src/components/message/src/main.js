import Vue from 'vue';
import message from './message.vue';

const MessageConstructor = Vue.extend(message);

const messages = [];
let mark = 1;

const Message = function(option = {}) {
  let options = option;
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  mark += 1;
  const userOnClose = options.onClose;
  const id = `message_${mark}`;
  const me = new MessageConstructor({
    data: options,
  });
  me.id = id;
  options.onClose = function() {
    Message.close(id, userOnClose);
  };
  me.vm = me.$mount();
  me.vm.visible = true;
  document.body.appendChild(me.vm.$el);
  messages.push(me.vm);
  return me.vm;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = option => {
    let options = option;
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.close = function(id, userOnClose) {
  const index = messages.findIndex(el => el.id === id);
  if (index !== -1) {
    if (typeof userOnClose === 'function') {
      userOnClose(messages[index]);
    }
    messages.splice(index, 1);
  }
};

export default Message;
