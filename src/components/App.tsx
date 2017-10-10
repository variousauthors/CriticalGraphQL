import * as React from 'react'
import './App.css'
import LeadList from '../containers/LeadList'

export default function App() {
  const style = {
    margin: '10px'
  }

  return (
    <div style={style} className='App'>
      <LeadList />
    </div>
  )
}