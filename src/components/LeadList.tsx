import * as React from 'react'
import { ILead } from 'src/types'
import LeadCreate from '../containers/LeadCreate'
import { Lead } from './Lead'

export interface ILeadListProps {
  leads: ILead[]
  isLoading: boolean
}

export const LeadList = (props: ILeadListProps) => {

  const leads = props.leads.map((edge: ILead, index: number) => {
    return (
      <Lead key={index} {...edge.node}/>
    )
  })

  return (
    <div>
      <LeadCreate />
      {leads}
    </div>
  )
}