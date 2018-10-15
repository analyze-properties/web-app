import React from 'react'
import {RouteProvider, Route} from 'react-router5'
import HomeView from '../views/home'
import LoginView from '../views/login'
import ProfileView from '../views/profile'
import CalculatorView from '../views/calculator'
import NotFoundView from '../views/not-found'
import AppLayout from './app-layout'

class App extends React.Component {
  renderCurrentRoute({route}) {
    switch (route.name) {
      case 'home':
        return <HomeView />
      case 'login':
        return <LoginView />
      case 'profile':
        return <ProfileView />
      case 'calculator':
        return <CalculatorView />
      default:
        return <NotFoundView />
    }
  }

  render() {
    return (
      <div>
        <RouteProvider router={this.props.router}>
          <AppLayout>
          <Route>{this.renderCurrentRoute}</Route>
        </AppLayout>
        </RouteProvider>
      </div>
    )
  }
}

export default App
