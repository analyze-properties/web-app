import React from 'react'
import {RouteProvider, Route} from 'react-router5'
import HomeView from '../views/home'
import LoginView from '../views/login'
import NotFoundView from '../views/not-found'

class App extends React.Component {
  renderCurrentRoute({route}) {
    switch (route.name) {
      case 'home':
        return <HomeView />
      case 'login':
        return <LoginView />
      default:
        return <NotFoundView />
    }
  }

  render() {
    return (
      <RouteProvider router={this.props.router}>
        <Route>{this.renderCurrentRoute}</Route>
      </RouteProvider>
    )
  }
}

export default App
