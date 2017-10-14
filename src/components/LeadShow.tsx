import * as React from 'react'
import { LeadVote } from './LeadVote'

export interface ILeadShowPropsFromParent {
  id: number
  url: string
  title: string
  author: string
}

export interface ILeadShowPropsFromState { }

export interface ILeadShowPropsFromDispatch {
  startEditing: (id: number) => void
}

const style = {
  body: {
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: 'gainsboro',
    textAlign: 'left',
    marginTop: '10px'
  },
  header: {
    marginBottom: '10px'
  },
  header__title: {
    fontWeight: 'bold' as 'bold'
  },
  detail: {
    fontStyle: 'italic' as 'italic'
  }
}

export const LeadShow = (props: ILeadShowPropsFromParent & ILeadShowPropsFromDispatch) => {

  return (
    <div style={style.body}>
      <div style={style.header}>
        <div style={style.header__title}>{props.title}</div>
        <div style={style.detail}>show similar names</div>
      </div>
      <div>{props.author} (<span style={style.detail}>show potential matches</span>)</div>
      <div>
        <a href={props.url} target='_blank'>Link</a>
      </div>
      <button onClick={() => props.startEditing(props.id)}>Edit</button>
      <LeadVote onClick={() => null} hasVoted={false} />
    </div>
  )
}
