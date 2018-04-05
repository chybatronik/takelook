import 'cross-fetch/polyfill'

const URL = 'http://api.tvmaze.com/shows'

export const REQUEST_SHOWS = 'REQUEST_SHOWS'
export const RECEIVE_SHOWS = 'RECEIVE_SHOWS'
export const ERROR_SHOWS = 'ERROR_SHOWS'

export const requestShows = () => ({
  type: REQUEST_SHOWS,
  payload: {
  }
})

export const receiveShows = (shows) => ({
  type: RECEIVE_SHOWS,
  payload: {
    shows
  }
})

export const errorShows = (error) => ({
  type: ERROR_SHOWS,
  payload: {
    error
  }
})

export const getShows = (page = 0) => async (dispatch) => {
  dispatch(requestShows())
  const uri = URL + `?page=${page}`

  try {
    const response = await fetch(uri)
    if (response.status >= 400) {
      throw new Error('Bad response from server')
    }
    const data = await response.json()
    dispatch(receiveShows(data))
  } catch (err) {
    dispatch(errorShows(err.message))
  }
}

export const getOneShow = (id = 0) => async (dispatch) => {
  dispatch(requestShows())
  const uri = URL + `/${id}`

  try {
    const response = await fetch(uri)
    if (response.status >= 400) {
      throw new Error('Bad response from server')
    }
    const data = await response.json()
    dispatch(receiveShows([data]))
  } catch (err) {
    dispatch(errorShows(err.message))
  }
}
