import PropertiesResource from '../resources/properties'

class PropertiesService {
  constructor(resource) {
    this._resource = resource
  }

  list() {
    return this.resource.get('/')
  }
}

export default new PropertiesService(PropertiesResource)
