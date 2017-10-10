import { gql, graphql, OptionProps } from 'react-apollo'
import { LeadList as Base, ILeadListProps as IBaseProps } from '../components/LeadList'
import { ILead } from 'src/types'

const query = gql`
  query allLeads {
    allLeads(orderBy: PRIMARY_KEY_DESC) {
      edges {
        node {
          url
          title
          author
        }
      }
    }
  }
`

interface IResult {
  allLeads: {
    edges: ILead[]
  }
}

interface IPropsFromParent {}
interface IPropsFromState {}
//interface IPropsFromDispatch {}

const mapGraphQLToProps = (props: OptionProps<IPropsFromParent & IPropsFromState, IResult>): IBaseProps => {
  const isLoading = props.data ? props.data.loading : true

  return {
    isLoading,
    leads: props.data && props.data.allLeads ? props.data.allLeads.edges : [],
  }
}

export default graphql<IResult, IPropsFromParent & IPropsFromState, IBaseProps>(query, {
  props: mapGraphQLToProps
})(Base)