import React from 'react'
import router, {routes} from '../router'

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {routes.map(route => (
            <li key={route.name} style={{display: 'inline-block'}}>
              <a
                style={{
                  display: 'inline-block',
                  padding: '1rem',
                  cursor: 'pointer',
                  ...(router.isActive(route.name) && {
                    color: 'cornflowerblue',
                    borderBottom: '2px solid cornflowerblue'
                  })
                }}
                onClick={() => router.navigate(route.name)}
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Nav
