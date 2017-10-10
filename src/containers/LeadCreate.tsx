import { gql, graphql, OptionProps } from 'react-apollo'
import {
  LeadCreate as Base,
  ILeadCreatePropsFromState as IPropsFromState,
  ILeadCreatePropsFromDispatch as IPropsFromDispatch,
  ILeadCreatePropsFromGraphQL as IPropsFromGraphQL,
} from '../components/LeadCreate'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IState } from '../types'
import { ActionCreator } from '../actions'

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

type BaseProps = IPropsFromState & IPropsFromDispatch & IPropsFromGraphQL

const mapMutationToProps = (props: OptionProps<IPropsFromParent & IPropsFromState & IPropsFromDispatch, IResult>): BaseProps => {

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

const mapStateToGraphQL = (state: IState, props: IPropsFromParent): IPropsFromState => {
  return {
    url: state.leadCreate.url
  }
}

const mapStateToDispatch = (dispatch: Dispatch<IState>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    onURLChange: (url: string) => {
      dispatch(ActionCreator.changeLeadCreateURL(url))
    }
  }
}

export default graphql<IResult, IPropsFromParent, BaseProps>(mutation, {
  props: mapMutationToProps
})(connect<IPropsFromState, IPropsFromDispatch, BaseProps>(
  mapStateToGraphQL,
  mapStateToDispatch
)(Base))