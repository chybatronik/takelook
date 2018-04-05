import 'cross-fetch/polyfill'

const URL = 'https://api.tvmaze.com/shows'

const URLSearch = 'https://api.tvmaze.com/search/shows'

export const REQUEST_SHOWS = 'REQUEST_SHOWS'
export const RECEIVE_SHOWS = 'RECEIVE_SHOWS'
export const ERROR_SHOWS = 'ERROR_SHOWS'
export const RECEIVE_SEARCH_SHOWS = 'RECEIVE_SEARCH_SHOWS'

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

export const receiveSearchShows = (shows) => ({
  type: RECEIVE_SEARCH_SHOWS,
  payload: {
    shows
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

export const getSearchShows = (query = 0) => async (dispatch) => {
  dispatch(requestShows())
  const uri = URLSearch + `?q=${query}`

  try {
    const response = await fetch(uri)
    if (response.status >= 400) {
      throw new Error('Bad response from server')
    }
    const data = await response.json()
    console.log("dataVVdata:::", data)
    const ver_data = data.map((item) => {
      return item.show
    })
    console.log("ver_data:::", ver_data)
    dispatch(receiveSearchShows(ver_data))
  } catch (err) {
    dispatch(errorShows(err.message))
  }
}
