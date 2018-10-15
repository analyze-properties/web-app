import React from 'react'

class PropertiesList extends React.Component {
  render() {
    const {properties} = this.props
    return (
      <ul>
        {properties.map(property => (
          <li key={property.id} />
        ))}
      </ul>
    )
  }
}

export default PropertiesList
