import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'

const routes = [
  {name: 'home', path: '/'},
  {name: 'login', path: '/login'},
  {name: 'profile', path: '/profile'}
]

const router = createRouter(routes).usePlugin(browserPlugin())

export default router
