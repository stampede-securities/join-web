import rp from 'request-promise'
import config from './config'

class Client {
  constructor(token = null) {
    this.token = token
    this.defaultOptions = {
      headers: {
        'x-access-token': this.token,
      },
      json: true,
    }
  }
  get(stub, options = {}) {
    return rp({
      uri: config.apiUrl + stub,
      method: 'GET',
      ...this.defaultOptions,
      ...options,
    })
  }
  post(stub, body = {}, options = {}) {
    return rp({
      uri: config.apiUrl + stub,
      method: 'POST',
      body,
      ...this.defaultOptions,
      ...options,
    })
  }
  put(stub, body = {}, options = {}) {
    return rp({
      uri: config.apiUrl + stub,
      method: 'PUT',
      body,
      ...this.defaultOptions,
      ...options,
    })
  }
  delete(stub, body = {}, options = {}) {
    return rp({
      uri: config.apiUrl + stub,
      method: 'DELETE',
      body,
      ...this.defaultOptions,
      ...options,
    })
  }
}

const client = new Client(localStorage.token)
export default client
