
const context = require.context('@/api', true, /\.js$/)
const keys = (context.keys()).filter(i => { return i !== './index.js' })
console.log(keys, 1)
const services = {}
keys.forEach(key => {
  if (!/\/[_$]/.test(key)) {
    const service = context(key).default
    if (!service) {
      console.warn('Service', key, 'is not in editing')
      return
    }
    const name = (service.name || '').trim()
    name && (services[name] = service)
    delete service.name
  }
})
console.log(services, 2)

const api = {
  install (Vue, options = {}) {
    Vue.prototype.$api = services
  }
}

export default api
