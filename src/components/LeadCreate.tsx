import * as React from 'react'

export interface ILeadCreateProps {
  url: string

  onURLChange: (url: string) => void
  onSubmit: (url: string) => void
}

export const LeadCreate = (props: ILeadCreateProps) => {

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