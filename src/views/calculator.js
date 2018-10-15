import React from 'react'

class Slider extends React.Component {
  state = {value: this.props.value}

  static defaultProps = {
    value: 0
  }

  handleChange = e => {
    this.setState({value: e.target.value})
  }

  render() {
    const {label} = this.props
    const {value} = this.state
    return (
      <div
        style={{
          display: 'grid',
          margin: '0.25rem 0 0.5rem 0',
          gridTemplate: `
            "label value" 1rem
            "input input" 1rem /
             1fr   auto
           `,
          maxWidth: '15rem'
        }}
      >
        <label style={{gridArea: 'label'}}>{label}</label>
        <span style={{gridArea: 'value', fontFamily: 'monospace'}}>
          ${Number(value).toLocaleString()}
        </span>
        <input
          type="range"
          min="0"
          max="1000000"
          defaultValue="0"
          valu={value}
          style={{
            gridArea: 'input'
          }}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

class CalculatorView extends React.Component {
  render() {
    return (
      <div>
        <h2>Cost</h2>
        <Slider label="Purchase" />
        <Slider label="Rehab" />

        <h2>Income</h2>
        <Slider label="Rent" />
        <Slider label="Other" />

        <h2>Expenses</h2>
        <Slider label="Taxes" />
        <Slider label="Insurance" />
        <Slider label="Vacancy" />
        <Slider label="Maintenance" />
        <Slider label="Management" />
        <Slider label="CapEx" />

        <h2>Financing</h2>
        <strong>TODO: add ability to add multiple loans</strong>
        <Slider label="Loan Amount" />
        <Slider label="Rate" />
        <Slider label="Term" />

        <h2>Partner</h2>
        <strong>TODO: add ability to add multiple partners</strong>
        <Slider label="Ownership" />
        <Slider label="Contribution" />
      </div>
    )
  }
}

export default CalculatorView
