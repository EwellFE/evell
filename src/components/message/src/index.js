import Vue from 'vue'
import MessageVue from './message.vue'
let MessageConstrutor = Vue.extend(MessageVue)

let instance

const Message = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  instance = new MessageConstrutor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

export default Message
