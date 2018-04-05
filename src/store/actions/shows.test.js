/**
 * @jest-environment node
 */
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import * as myactions from './shows'
import expect from 'expect'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async actions index shows', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should execute fetch data', () => {
    fetchMock.get('*', { body: ['do something'] })
    const store = mockStore({})

    store.dispatch(myactions.getShows())
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(myactions.requestShows())
        expect(actions[1]).toEqual(myactions.receiveShows(['do something']))
      })
  })

  it('should execute error', () => {
    fetchMock.get('*', { body: ['do something'], status: 403 })
    const store = mockStore({})

    store.dispatch(myactions.getShows())
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(myactions.requestShows())
        expect(actions[1]).toEqual(myactions.errorShows('Bad response from server'))
      })
  })
})
