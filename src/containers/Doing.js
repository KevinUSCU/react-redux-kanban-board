//a container is a component that has access to redux (?)

import React from 'react'
import { connect } from 'react-redux'
import { makeDone } from '../actions'

function DoingList ({ items, makeDone }) {
  return (
    <ul className="list-group">
      { items.map((el, index) => <li className="list-group-item list-group-item-warning" key={ index } onClick={() => makeDone(el)}>{ el.task }</li>) }
    </ul>
  )
}

function mapStateToProps(state) {
  return { items: state.doing }
}

export default connect(mapStateToProps, {makeDone})(DoingList)