import * as React from 'react'
import { ILead } from 'src/types'
import LeadCreate from '../containers/LeadCreate'
import { LeadShow } from './LeadShow'

export interface ILeadListProps {
  leads: ILead[]
  isLoading: boolean
}

export const LeadList = (props: ILeadListProps) => {

  const leads = props.leads.map((edge: ILead, index: number) => {
    return (
      <LeadShow key={index} {...edge.node}/>
    )
  })

  return (
    <div>
      <LeadCreate />
      {leads}
    </div>
  )
}