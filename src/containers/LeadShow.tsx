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

export interface IPropsFromState {
  isEditing: boolean
}

export interface IPropsFromDispatch {
  startEditing: (id: number) => void
}

const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromState => {
  return {
    isEditing: false
  }
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
    isEditing: propsFromState.isEditing,
    startEditing: propsFromDispatch.startEditing,
    ...propsFromParent
  }
}

export default connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent, IBaseProps>(
  mapStateToProps,
  mapStateToDispatch,
  mergeProps
)(Base)