import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IState } from '../types'

import {
  LeadShow as Base,
  ILeadShowProps as IBaseProps,
} from '../components/LeadShow'

export interface IPropsFromParent {
  id: number
  url: string
  title: string
  author: string
}

export interface IPropsFromState { }

export interface IPropsFromDispatch {
  startEditing: (id: number) => void
}

const mapStateToDispatch = (dispatch: Dispatch<IState>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    startEditing: (id: number) => {
      // nop
    }
  }
}

const mergeProps = (propsFromState: IPropsFromState, propsFromDispatch: IPropsFromDispatch, propsFromParent: IPropsFromParent): IBaseProps => {
  return {
    startEditing: propsFromDispatch.startEditing,
    ...propsFromParent
  }
}

export default connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent, IBaseProps>(
  null,
  mapStateToDispatch,
  mergeProps
)(Base)