import {
  ILeadCreateProps as IBaseProps
} from '../components/LeadCreate'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IState, INothing } from '../types'
import { ActionCreator } from '../actions'

interface IPropsFromState {
  url: string
}

interface IPropsFromDispatch {
  onURLChange: (url: string) => void
}

interface IPropsFromParent {
  onSubmit: (url: string) => void
}

const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromState => {
  return {
    url: state.leadCreate.url
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    onURLChange: (url: string) => {
      dispatch(ActionCreator.changeLeadCreateURL(url))
    }
  }
}

const mergeProps = (propsFromState: IPropsFromState, propsFromDispatch: IPropsFromDispatch, propsFromParent: IPropsFromParent): IBaseProps => {
  return {
    url: propsFromState.url,
    onURLChange: propsFromDispatch.onURLChange,
    onSubmit: propsFromParent.onSubmit,
  }
}

/** inner exposes the wrapped component's full interface... perfect for passing into HOCs */
export const inner = connect<IPropsFromState, IPropsFromDispatch, IBaseProps, IBaseProps>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)

/** outer is for wrapping a component that is assumed to satisfy IPropsFromParent */
export const outer = connect<IPropsFromState, IPropsFromDispatch, INothing, IBaseProps>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)

export default connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent, IBaseProps>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)