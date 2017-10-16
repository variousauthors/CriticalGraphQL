import { gql, graphql, OptionProps } from 'react-apollo'

import {
  ILeadEditProps as IBaseProps
} from '../components/LeadEdit'
import { INothing } from 'src/types'
import { LeadEditChange } from 'src/components/LeadEdit'

const mutation = gql`
  mutation updateLead($id: Int!, $url: String, $author: String, $title: String) {
    updateLeadById(input: {
      id: $id
      leadPatch: {
        id: $id
        url: $url
        author: $author
        title: $title
      }
    }) {
      clientMutationId
    }
  }
`

interface IResult {
}

interface IPropsFromParent {
  id: number
  title: string
  author: string
  url: string

  onChange: (id: number, change: LeadEditChange) => void
  onCancel: (id: number) => void
  onSubmit?: (id: number) => void
}

const mapMutationToProps = (props: OptionProps<IPropsFromParent, IResult>): IBaseProps => {
  return {
    ...props.ownProps,
    onSubmit: (id: number) => {
      if (props.ownProps.onSubmit) {
        props.ownProps.onSubmit(id)
      }

      return props.mutate ? props.mutate({ variables: {
        id: props.ownProps.id,
        author: props.ownProps.author,
        title: props.ownProps.title,
        url: props.ownProps.url
      }}) : null
    },
  }
}

const operationOptions = {
  props: mapMutationToProps,
  options: {
    refetchQueries: [
      'allLeads'
    ]
  }
}

/** inner exposes the wrapped component's full interface... perfect for passing into HOCs */
export const inner = graphql<IResult, IBaseProps, IBaseProps>(mutation, operationOptions)

/** outer is for wrapping a component that is assumed to satisfy IPropsFromParent */
export const outer = graphql<IResult, INothing, IBaseProps>(mutation, operationOptions)

export default graphql<IResult, IPropsFromParent, IBaseProps>(mutation, operationOptions)