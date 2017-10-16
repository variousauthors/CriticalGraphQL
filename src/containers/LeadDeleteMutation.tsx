import { gql, graphql, OptionProps } from 'react-apollo'

import {
  ILeadDeleteProps as IBaseProps
} from '../components/LeadDelete'

import { INothing } from 'src/types'

const mutation = gql`
  mutation deleteLead($id: Int!) {
    deleteLeadById(input: {
      id: $id
    }) {
      clientMutationId
    }
  }
`

interface IResult {
}

interface IPropsFromParent {
  id: number
}

const mapMutationToProps = (props: OptionProps<IPropsFromParent, IResult>): IBaseProps => {

  return {
    id: props.ownProps.id,
    deleteLead: (id: number) => {
      return props.mutate ? props.mutate({ variables: {
        id,
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