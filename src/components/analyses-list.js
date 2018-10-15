import _ from 'lodash-es'
import React from 'react'

class AnalysesList extends React.Component {
  render() {
    const {analyses} = this.props
    return (
      <div>
        <div className="d-flex justify-content-between">
          <strong>Cash Flow</strong>
          <strong>Cap Rate</strong>
          <strong>Rent Value</strong>
          <strong>Cash Needed</strong>
          <strong>NOI</strong>
          <strong>COC</strong>
          <strong>DSCR</strong>
          <strong>ROI</strong>
        </div>
        <hr />
        <ul className="list-unstyled">
          {_.map(analyses, property => (
            <li className="d-flex justify-content-between" key={property.id}>
              <span>{property.cashFlow}</span>
              <span>{property.capRate}</span>
              <span>{property.rentValue}</span>
              <span>{property.cashNeeded}</span>
              <span>{property.NOI}</span>
              <span>{property.COC}</span>
              <span>{property.DSCR}</span>
              <span>{property.ROI}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AnalysesList
