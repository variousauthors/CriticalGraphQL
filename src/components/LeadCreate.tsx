import * as React from 'react'

interface ILeadCreateProps {
  onChange: (e: string) => void
}

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

export const LeadCreate = (props: ILeadCreateProps) => {

  return (
    <div>
      <Input
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}/>
    </div>
  )
}