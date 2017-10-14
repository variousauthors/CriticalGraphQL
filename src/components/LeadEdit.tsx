import * as React from 'react'

export interface ILeadEditProps {
  id: number
  title: string
  url: string
  author: string

  isEditing: boolean
  startEditing: (id: number) => void
}

const style = {
  body: {
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: 'gainsboro',
    textAlign: 'left',
    marginTop: '10px'
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

export const LeadEdit = (props: ILeadEditProps) => {

  return (
    <div style={style.body}>
      EDIT
    </div>
  )
}
