//a container is a component that has access to redux (?)

import React from 'react'
import { connect } from 'react-redux'
import { trash } from '../actions'

function DoingList ({ items, trash }) {
  return (
    <ul className="list-group">
      { items.map((el, index) => <li className="list-group-item list-group-item-success" key={ index } onClick={() => trash(el)}>{ el.task }</li>) }
    </ul>
  )
}

function mapStateToProps(state) {
  return { items: state.done }
}

export default connect(mapStateToProps, {trash})(DoingList)