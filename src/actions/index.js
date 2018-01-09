export const START_DOING = 'START_DOING'
export const MAKE_DONE = 'MAKE_DONE'
export const TRASH = 'TRASH'

export function startDoing(item) {
  return {
    type: START_DOING,
    payload: item
  }
}

export function makeDone(item) {
  return {
    type: MAKE_DONE,
    payload: item
  }
}

export function trash(item) {
  return {
    type: TRASH,
    payload: item
  }
}