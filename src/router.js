import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'

export const routes = [
  {name: 'home', path: '/'},
  {name: 'login', path: '/login'},
  {name: 'profile', path: '/profile'},
  {name: 'calculator', path: '/calculator'}
]

const router = createRouter(routes).usePlugin(browserPlugin())

export default router
