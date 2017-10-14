import * as React from 'react'
import './App.css'
import { LeadList as Base } from './LeadList'
import graphql from '../containers/LeadListQuery'

const LeadList = graphql(Base)

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