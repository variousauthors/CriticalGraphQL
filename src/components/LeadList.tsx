import * as React from 'react'
import { ILead } from 'src/types'
import { LeadCreate } from './LeadCreate'

export interface ILeadListProps {
  leads: ILead[]
  isLoading: boolean
}

interface ILeadProps {
  url: string
}

const Lead = (props: ILeadProps) => {
  return (
    <div>{props.url}</div>
  )
}

export const LeadList = (props: ILeadListProps) => {
  const leads = props.leads.map((edge: ILead, index: number) => {
    return <Lead key={index} {...edge.node} />
  })

  return (
    <div>
      {leads}
      <LeadCreate onChange={(value: string) => console.log(value)} />
    </div>
  )
}