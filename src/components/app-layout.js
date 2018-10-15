import React from 'react'
import AppNavbar from './app-navbar'

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div className="viewport container mt-3">{this.props.children}</div>
      </div>
    )
  }
}

export default AppLayout
