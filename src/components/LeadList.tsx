import * as React from 'react'
import { ILead } from 'src/types'
import { LeadCreate as Base } from './LeadCreate'
import { outer as connect } from '../containers/LeadCreate'
import { inner as graphql } from '../containers/LeadCreateMutation'
import LeadShow from '../containers/LeadShow'

export interface ILeadListProps {
  leads: ILead[]
  isLoading: boolean
}

const LeadCreate = connect(graphql(Base))

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