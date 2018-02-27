import Vue from 'vue'
import LoadingVue from './loading.vue'
let LoadingConstrutor = Vue.extend(LoadingVue)
// 唯一实例
let instance

const Loading = function (options) {
  if (instance) {
    return instance.vm
  }
  options = options || {}
  options.visible = true
  instance = new LoadingConstrutor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

Loading.close = function(userOnClose) {
  const theTnstanceVm = Loading()
  theTnstanceVm.visible = false
  instance = null
}

export default Loading
