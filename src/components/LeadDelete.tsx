import * as React from 'react'

export interface ILeadDeleteProps {
  id: number
  deleteLead: (id: number) => void
}

export const LeadDelete = (props: ILeadDeleteProps) => {

  return (
    <button
      type='button'
      onClick={(e) => {
        e.preventDefault()
        props.deleteLead(props.id)
      }}
    >
      Delete
      </button>
  )
}