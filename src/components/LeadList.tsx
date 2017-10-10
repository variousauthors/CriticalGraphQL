import * as React from 'react'
import { ILead } from 'src/types'
import LeadCreate from '../containers/LeadCreate'

export interface ILeadListProps {
  leads: ILead[]
  isLoading: boolean
}

export const LeadList = (props: ILeadListProps) => {
  const leads = props.leads.map((edge: ILead, index: number) => {
    return (
      <div key={index}>
        <a href={edge.node.url} target='_blank'>{edge.node.url}</a>
      </div>
    )
  })

  return (
    <div>
      <LeadCreate />
      {leads}
    </div>
  )
}