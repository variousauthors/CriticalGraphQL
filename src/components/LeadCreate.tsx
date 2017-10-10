import * as React from 'react'

export interface ILeadCreatePropsFromState {
  url: string
}

export interface ILeadCreatePropsFromDispatch {
  onURLChange: (e: string) => void
}

export interface ILeadCreatePropsFromGraphQL {
  onSubmit: (e: string) => void
}

export const LeadCreate = (props: ILeadCreatePropsFromState & ILeadCreatePropsFromDispatch & ILeadCreatePropsFromGraphQL) => {

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.onSubmit(props.url)
        }}
      >
        <input
          value={props.url}
          type='text'
          onChange={(e) => props.onURLChange(e.target.value)}
        />
        <button type='submit'>+</button>
      </form>
    </div>
  )
}