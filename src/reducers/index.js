import { combineReducers } from 'redux'
import { START_DOING, MAKE_DONE, TRASH } from '../actions'

const INITIAL_STATE = [
  { task: 'defeat Jedi' },
  { task: 'practice Force-Crush' },
  { task: 'detatch mynocks' },
  { task: 'clean TIE-Interceptor' }
]

function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_DOING:
      return state.map(e => ({ ...e })) //creates a new copy of the objects inside the array
                  .filter(e => e.task !== action.payload.task)
    default:
      return state
  }
}

function doing(state = [], action) {
  switch (action.type) {
    case START_DOING:
      return [ ...state.map(e => ({...e})), action.payload]
    case MAKE_DONE:
      return state.map(e => ({ ...e })) //creates a new copy of the objects inside the array
                  .filter(e => e.task !== action.payload.task)
    default:
      return state
  }
}

function done(state = [], action) {
  switch (action.type) {
    case MAKE_DONE:
      return [ ...state.map(e => ({...e})), action.payload]
    case TRASH:
      return state.map(e => ({ ...e })) //creates a new copy of the objects inside the array
                  .filter(e => e.task !== action.payload.task)
    default:
      return state
  }
}

export default combineReducers({
  todo,
  doing,
  done
})