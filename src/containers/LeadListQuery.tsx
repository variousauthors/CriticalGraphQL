import { gql, graphql, OptionProps } from 'react-apollo'
import { ILeadListProps as IBaseProps } from '../components/LeadList'
import { ILead, INothing } from 'src/types'

const query = gql`
  query allLeads {
    allLeads(orderBy: PRIMARY_KEY_DESC) {
      edges {
        node {
          id
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

const mapGraphQLToProps = (props: OptionProps<INothing, IResult>): IBaseProps => {
  const isLoading = props.data ? props.data.loading : true

  return {
    isLoading,
    leads: props.data && props.data.allLeads ? props.data.allLeads.edges : [],
  }
}

const operationOptions = {
  props: mapGraphQLToProps
}

/** inner exposes the wrapped component's full interface... perfect for passing into HOCs */
export const inner = graphql<IResult, IBaseProps, IBaseProps>(query, operationOptions)

/** outer is for wrapping a component that is assumed to satisfy IPropsFromParent */
export const outer = graphql<IResult, INothing, IBaseProps>(query, operationOptions)

export default graphql<IResult, INothing, IBaseProps>(query, operationOptions)