//a container is a component that has access to redux (?)

import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { startDoing } from '../actions'

function TodoList ({ items, startDoing }) {
  return (
    <ul className="list-group">
      { items.map((el, index) => (
        <li className="list-group-item list-group-item-info" key={ index }>{ el.task }
          <a className="badge badge-pill badge-dark" onClick={() => startDoing(el)}>></a>
        </li>
      ))}
    </ul>
  )
}

function mapStateToProps(state) {
  return { items: state.todo }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ startDoing }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

// ORRRRRRR....

export default connect(mapStateToProps, {startDoing})(TodoList)