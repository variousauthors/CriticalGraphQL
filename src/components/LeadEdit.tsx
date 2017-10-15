import * as React from 'react'

type ILeadEditChange = null
  | { title: string }
  | { author: string }
  | { url: string }

export interface ILeadEditProps {
  id: number
  title: string
  author: string
  url: string

  onSubmit: () => void
  onChange: (change: ILeadEditChange) => void
  onCancel: () => void
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

export const LeadEdit = (props: ILeadEditProps) => {

  return (
    <div style={style.body}>
      EDIT
      <form id={`lead-edit-${props.id}`} onSubmit={(e) => props.onSubmit()}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={props.title}
            onChange={(e) => props.onChange({ title: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='author'
            value={props.author}
            onChange={(e) => props.onChange({ author: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='url'
            value={props.url}
            onChange={(e) => props.onChange({ url: e.target.value })}
          />
        </div>
      </form>
    </div>
  )
}
