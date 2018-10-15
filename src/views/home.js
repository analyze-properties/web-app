import React from 'react'
import AnalysesService from '../services/analyses'
import AnalysesList from '../components/analyses-list'

class HomeView extends React.Component {
  // TODO: should hold state outside of components
  state = {
    analyses: [],
    isLoading: true
  }

  componentDidMount() {
    this.loadAnalyses()
  }

  async loadAnalyses() {
    const analyses = await AnalysesService.list()
    this.setState({analyses, isLoading: false})
  }

  render() {
    const {analyses} = this.state
    return (
      <React.Fragment>
        <main className="viewport__main text-center">
          <AnalysesList analyses={analyses} />
        </main>
        <aside className="viewport__rail" />
      </React.Fragment>
    )
  }
}

export default HomeView
