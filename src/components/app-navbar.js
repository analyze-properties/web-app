import React from 'react'

class AppNavbar extends React.Component {
  handleSearch = e => {
    e.preventDefault()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Analyze Properties
          </a>
          <form
            className="form-inline ml-auto my-2 my-lg-0"
            onSubmit={this.handleSearch}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    )
  }
}

export default AppNavbar
