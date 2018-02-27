import Message from './components/message'
import Loading from './components/loading'
import LoadMore from './components/loadMore'

const components = [
  Message,
  Loading,
  LoadMore
]

const install = function(Vue, options) {
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$loading = Loading;
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

let EwellVue = {
  version: '1.0.0',
  install,
  Message,
  Loading,
  LoadMore
}

export default EwellVue
