import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  
  const callAction = (action) => {
    store.dispatch({
      type: action
    })
  }

  return (
    <div>
      <button onClick={() => callAction('GOOD')}>good</button> 
      <button onClick={() => callAction('OK')}>ok</button> 
      <button onClick={() => callAction('BAD')}>bad</button>
      <button onClick={() => callAction('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
