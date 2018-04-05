import 'cross-fetch/polyfill'

const URL = 'http://api.tvmaze.com/shows'

export const REQUEST_SHOW_EPISODES = 'REQUEST_SHOW_EPISODES'
export const RECEIVE_SHOW_EPISODES = 'RECEIVE_SHOW_EPISODES'
export const ERROR_SHOW_EPISODES = 'ERROR_SHOW_EPISODES'

export const requestShowEpisodes = (id) => ({
  type: REQUEST_SHOW_EPISODES,
  payload: {
    id
  }
})

export const receiveShowEpisodes = (id, episodes) => ({
  type: RECEIVE_SHOW_EPISODES,
  payload: {
    id,
    episodes
  }
})

export const errorShowEpisodes = (id, error) => ({
  type: ERROR_SHOW_EPISODES,
  payload: {
    id,
    error
  }
})

export const getShowEpisodes = (id = 0) => async (dispatch) => {
  dispatch(requestShowEpisodes(id))
  const uri = URL + `/${id}/episodes`

  try {
    const response = await fetch(uri)
    if (response.status >= 400) {
      throw new Error('Bad response from server')
    }
    const data = await response.json()
    dispatch(receiveShowEpisodes(id, data))
  } catch (err) {
    dispatch(errorShowEpisodes(id, err.message))
  }
}
