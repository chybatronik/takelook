import * as actions from '../actions/shows'

const defaultState = {
  shows: {},
  config: {
    isFetch: false,
    isError: false,
    page: 0
  }
}
const shows = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_SHOWS:
      return {
        ...state,
        config: {
          ...state.config,
          isFetch: true
        }
      }
    case actions.RECEIVE_SHOWS:
      const shows = action.payload.shows.reduce((result, item) => {
        result[item.id] = item
        return result
      }, { ...state.shows })
      return {
        shows,
        config: {
          ...state.config,
          page: state.config.page + 1,
          isFetch: false
        }
      }
    case actions.RECEIVE_SEARCH_SHOWS:
      const shows2 = action.payload.shows.reduce((result, item) => {
        result[item.id] = item
        return result
      }, {})
      return {
        shows: {...shows2},
        config: {
          ...state.config,
          page: 0,
          isFetch: false
        }
      }
    case actions.ERROR_SHOWS:
      return {
        ...state,
        config: {
          ...state.config,
          isFetch: false,
          isError: true,
          error: action.payload.error
        }
      }

    default:
      return state
  }
}

export default shows
