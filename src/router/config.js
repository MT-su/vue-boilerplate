const context = require.context('./routes', true, /\.js$/)
const keys = context.keys()
const routes = []

keys.forEach(key => {
  // 忽略 _ 或 $ 开头的文件
  if (!/\/[_$]/.test(key)) {
    const modules = context(key).default
    if (Array.isArray(modules)) {
      // 避免children的path误带上前置斜杠/
      modules.forEach(module => {
        if (Array.isArray(module.children)) {
          module.children.forEach(child => {
            if (child.path.startsWith('/')) {
              child.path = child.path.replace(/^\//, '')
            }
          })
        }
      })
      // 保存
      routes.push(...modules)
    }
  }
})
export default [
  {
    path: '/',
    name: '/',
    redirect: 'home'
  },
  ...routes,
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/common/404.vue')
  }
]
