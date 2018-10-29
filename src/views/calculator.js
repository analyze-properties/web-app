import React from 'react'

const RANGE_PROPS = {
  purchase: {min: 0, max: 1000000, step: 1000}
}

class Slider extends React.Component {
  state = {
    textValue: this.props.value,
    numberValue: this.props.value
  }

  static defaultProps = {value: '0'}

  setValue = value => {
    const string = `${value}`
    this.setState({
      textValue: string
        .trim()
        .replace(/[^$\d,.]/g, '') // allow numbers, dollar sign, comma, decimal
        .replace(/^0/, ''), // remove leading zeros
      numberValue: Number(string.replace(/[^\d.]/g, '')) || 0
    })
  }

  handleChange = e => {
    this.setValue(e.target.value)
  }

  handleKeyDown = e => {
    const {showInput} = this.state

    switch (e.key) {
      case 'Enter':
        if (showInput) this.hideInput()
        else this.showInput()
        return

      case 'Escape':
        this.hideInput()
        return

      case 'Backspace':
        // allow clearing the value with backspace on the slider
        if (!showInput) this.setValue(0)
        return
    }

    // allow overriding the value by typing numbers or $ directly onto the slider
    if (!showInput && /[\d$]/.test(e.key)) {
      e.preventDefault()
      this.setValue(e.key)
      this.showInput()
    }
  }

  hideInput = () => {
    const {numberValue} = this.state

    this.setState(
      {
        showInput: false,
        // when the input closes, parse the value back into a sane number string
        textValue: numberValue.toLocaleString()
      },
      () => {
        if (!this.rangeRef) return

        this.rangeRef.focus()
      }
    )
  }

  showInput = () => {
    this.setState({showInput: true}, () => {
      if (!this.inputRef) return

      this.inputRef.focus()
    })
  }

  render() {
    const {label} = this.props
    const {showInput, textValue, numberValue} = this.state

    return (
      <div
        style={{
          display: 'grid',
          margin: '0.25rem 0 0.5rem 0',
          gridTemplate: `
            "label value" 1.2em
            "range range" auto /
             1fr   auto
           `,
          maxWidth: '15rem'
        }}
      >
        <label style={{gridArea: 'label'}}>{label}</label>
        {showInput ? (
          <input
            ref={c => (this.inputRef = c)}
            value={textValue}
            onChange={this.handleChange}
            onBlur={this.hideInput}
            onKeyDown={this.handleKeyDown}
            style={{
              gridArea: 'value',
              display: 'inline',
              padding: '0.25em 0.75em',
              // margin: '-0.25em -0.75em',
              boxSizing: 'content-box',
              width: `${Math.max(textValue.length)}ch`,
              textAlign: 'right',
              fontFamily: 'monospace',
              lineHeight: 1,
              background: 'none',
              boxShadow: '0 0 0 1px cornflowerblue',
              borderRadius: '0.2em',
              border: 'none',
              outline: 'none'
            }}
          />
        ) : (
          <span
            style={{gridArea: 'value', fontFamily: 'monospace'}}
            onClick={this.showInput}
          >
            ${numberValue.toLocaleString()}
          </span>
        )}
        <input
          ref={c => (this.rangeRef = c)}
          type="range"
          min="0"
          max="1000000"
          value={numberValue}
          style={{gridArea: 'range'}}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          {...RANGE_PROPS[label.toLowerCase()]}
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
