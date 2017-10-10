import * as React from 'react'

export interface ILeadProps {
  url: string
  title: string
  author: string
}

const style = {
  body: {
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: 'gainsboro',
    textAlign: 'left'
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

interface IVotePropsFromDispatch {
  onClick: (vote: boolean) => void // user votes
}

interface IVotePropsFromGraphQL {
  hasVoted: boolean // user has voted for this lead
}

const Vote = (props: IVotePropsFromDispatch & IVotePropsFromGraphQL) => {

  return (
    <div>
      <div>This is a vote: display the total checks/crosses per user after a user votes</div>
      {props.hasVoted ? (
        <div>
          <span>✔: 47&nbsp;</span>
          <span>✕: 19</span>
        </div>
      ) : (
        <div>
          <button>✔</button>
          <button>✕</button>
        </div>
      )}
    </div>
  )
}

export const Lead = (props: ILeadProps) => {

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
      <Vote onClick={() => null} hasVoted={false} />
    </div>
  )
}
