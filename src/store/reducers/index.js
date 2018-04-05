import { combineReducers } from 'redux'
import shows from './shows'
import episodes from './episodes'

const rootReducer = combineReducers({
  shows,
  episodes
})

export default rootReducer
