import * as React from 'react'

interface ILeadIVotePropsFromDispatch {
  onClick: (vote: boolean) => void // user votes
}

interface ILeadIVotePropsFromGraphQL {
  hasVoted: boolean // user has voted for this lead
}

export const LeadVote = (props: ILeadIVotePropsFromDispatch & ILeadIVotePropsFromGraphQL) => {

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
