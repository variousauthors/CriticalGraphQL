import {
  LeadShow as Base,
  ILeadShowPropsFromState as IPropsFromState,
  ILeadShowPropsFromDispatch as IPropsFromDispatch,
  ILeadShowPropsFromParent as IPropsFromParent,
} from '../components/LeadShow'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IState } from '../types'

type BaseProps = IPropsFromParent & IPropsFromState & IPropsFromDispatch

const mapStateToDispatch = (dispatch: Dispatch<IState>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    startEditing: (id: number) => {
      // nop
    }
  }
}

const mergeProps = (propsFromState: IPropsFromParent, propsFromDispatch: IPropsFromDispatch, propsFromParent: IPropsFromParent): BaseProps => {
  return {
    startEditing: propsFromDispatch.startEditing,
    ...propsFromParent
  }
}

export default connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent, BaseProps>(
  null,
  mapStateToDispatch,
  mergeProps
)(Base)