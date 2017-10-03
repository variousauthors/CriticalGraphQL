import { gql, graphql, OptionProps } from 'react-apollo'
import { LeadCreate as Base, ILeadCreateProps as IBaseProps } from '../components/LeadCreate'

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

interface IPropsFromParent {}
interface IPropsFromState {}
//interface IPropsFromDispatch {}

const mapMutationToProps = (props: OptionProps<IPropsFromParent & IPropsFromState, IResult>): IBaseProps => {
  return {
    onSubmit: (url: string) => {
      props.mutate ? props.mutate({ variables: {
        url,
      }}) : null
    }
  }
}

export default graphql<IResult, IPropsFromParent & IPropsFromState, IBaseProps>(mutation, {
  props: mapMutationToProps
})(Base)