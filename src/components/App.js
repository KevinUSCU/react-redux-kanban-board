import React, { Component } from 'react';
import TodoList from '../containers/TodoList'
import DoingList from '../containers/Doing'
import Done from '../containers/Done'

class App extends Component {
  render() {
    return (
      <div>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>
              React Redux Kanban Board <span role="img" aria-label="surfer">🏄🏼</span>
            </h1>
            <p>
              More practice for react and redux, you can read more about kanban <a href='https://en.wikipedia.org/wiki/Kanban_(development)'>here</a>
            </p>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h2>To Do</h2>
              <TodoList />
            </div>
            <div className='col-md-4'>
              <h2>Doing</h2>
              <DoingList />
            </div>
            <div className='col-md-4'>
              <h2>Done</h2>
              <Done />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
