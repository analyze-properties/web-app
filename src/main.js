import React from 'react'
import ReactDOM from 'react-dom'

function mountApp() {
  const App = require('./components/app').default
  ReactDOM.render(<App />, document.getElementById('app'))
}

function main() {
  mountApp()
}

if (module.hot) {
  module.hot.accept(['./components/app'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
    mountApp()
  })
}

main()
