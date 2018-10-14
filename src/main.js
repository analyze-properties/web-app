import React from 'react'
import ReactDOM from 'react-dom'
import router from './router'

function mountApp() {
  const App = require('./components/app').default
  ReactDOM.render(<App router={router} />, document.getElementById('app'))
}

function main() {
  router.start()
  mountApp()
}

if (module.hot) {
  module.hot.accept(['./components/app'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
    mountApp()
  })
}

main()
