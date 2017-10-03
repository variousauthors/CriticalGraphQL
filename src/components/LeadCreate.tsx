import * as React from 'react'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

class Input extends React.Component<IInputProps> {
  handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      value: e.target.value
    })

    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

  render () {
    return (
      <span>
        <input
          {...this.props}
          onChange={(e) => this.handleChange(e)}
        />
      </span>
    )
  }
}

export interface ILeadCreateProps {
  onSubmit: (e: string) => void
}

export const LeadCreate = (props: ILeadCreateProps) => {

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.onSubmit('example.com')
        }}
      >
        <Input type='text' />
        <button type='submit'>+</button>
      </form>
    </div>
  )
}