import * as React from 'react'
import { LeadDelete as BaseLeadDelete } from './LeadDelete'
import leadDeleteMutation from '../containers/LeadDeleteMutation'

const LeadDelete = leadDeleteMutation(BaseLeadDelete)

export type LeadEditChange = null
  | { title: string }
  | { author: string }
  | { url: string }

export interface ILeadEditProps {
  id: number
  title: string
  author: string
  url: string

  onSubmit: (id: number) => void
  onChange: (id: number, change: LeadEditChange) => void
  onCancel: (id: number) => void
}

const style = {
  body: {
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: 'gainsboro',
    textAlign: 'left',
    marginTop: '10px'
  },
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number, handler: (id: number) => void) => {
  e.preventDefault()
  handler(id)
}

export const LeadEdit = (props: ILeadEditProps) => {

  return (
    <div style={style.body}>
      EDIT
      <form id={`lead-edit-${props.id}`} onSubmit={(e) => handleSubmit(e, props.id, props.onSubmit)}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={props.title || ''}
            onChange={(e) => props.onChange(props.id, { title: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='title'>Author</label>
          <input
            type='text'
            name='author'
            value={props.author || ''}
            onChange={(e) => props.onChange(props.id, { author: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='title'>URL</label>
          <input
            type='text'
            name='url'
            value={props.url || ''}
            onChange={(e) => props.onChange(props.id, { url: e.target.value })}
          />
        </div>

        <div>
          <button type='submit'>Save</button>
          <button type='button' onClick={() => props.onCancel(props.id)}>Cancel</button>
          <LeadDelete id={props.id}/>
        </div>
      </form>
    </div>
  )
}
