import React from 'react'
import ReactTable from 'react-table'

class AnalysesList extends React.Component {
  columns = [
    {
      Header: 'Address',
      accessor: 'address'
    },
    {
      Header: 'Cash Flow',
      accessor: 'cashFlow'
    },
    {
      Header: 'Cap Rate',
      accessor: 'capRate'
    },
    {
      Header: 'Rent Value',
      accessor: 'rentValue'
    },
    {
      Header: 'Cash Needed',
      accessor: 'cashNeeded'
    },
    {
      Header: 'ROI',
      accessor: 'ROI'
    }
  ]

  render() {
    return (
      <ReactTable
        data={this.props.analyses}
        columns={this.columns}
        showPagination={false}
        minRows={0}
      />
    )
  }
}

export default AnalysesList
