import AnalysesResource from '../resources/analyses'

class AnalysesService {
  constructor(resource) {
    this._resource = resource
  }

  list() {
    return this._resource.get('/')
  }
}

export default new AnalysesService(AnalysesResource)
