import * as actions from '../actions/episodes'

const defaultState = {
  episodes: {},
  config: {

  }
}
const episodes = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_SHOW_EPISODES:
      let temp = {...(state.episodes)}
      temp[action.payload.id] = {isFetch: true}
      return {
        episodes: {...temp},
        config: {
          ...state.config,
          isFetch: true
        }
      }
    case actions.RECEIVE_SHOW_EPISODES:
      let temp2 = {...state.episodes}
      temp2[action.payload.id] = {...action.payload.episodes, isFetch: false}
      return {
        episodes: {...temp2},
        config: {
          ...state.config,
          isFetch: false
        }
      }
    case actions.ERROR_SHOW_EPISODES:
      let temp3 = {...state.episodes}
      temp3[action.payload.id] = {isFetch: false, isError: true}
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

export default episodes
