import _ from 'lodash-es'

const MOCK_ANALYSES = _.times(5, id => ({
  id,
  address: 'Fake Address',
  cashFlow: '$931',
  capRate: '31.039%',
  rentValue: '$42,800',
  cashNeeded: '$42,800',
  NOI: '$11,174',
  COC: '2.39',
  DSCR: '1',
  ROI: '61.949%'
}))

class AnalysesResource {
  async get(endpoint) {
    return MOCK_ANALYSES
  }
}

export default new AnalysesResource()
