import { gql, graphql, OptionProps } from 'react-apollo'

import {
  ILeadCreateProps as IBaseProps
} from '../components/LeadCreate'
import { INothing } from 'src/types'

const mutation = gql`
  mutation createLead($url: String!) {
    createLead(input: {
      lead: {
        url: $url
      }
    }) {
      clientMutationId
    }
  }
`

interface IResult {
}

interface IPropsFromParent {
  url: string,
  onURLChange: (url: string) => void
}

const mapMutationToProps = (props: OptionProps<IPropsFromParent, IResult>): IBaseProps => {

  return {
    url: props.ownProps.url,
    onURLChange: props.ownProps.onURLChange,
    onSubmit: (url: string) => {
      return props.mutate ? props.mutate({ variables: {
        url,
      }}) : null
    }
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