import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IState, INothing, ILeadEdit } from '../types'

import {
  LeadEdit as Base,
  ILeadEditProps as IBaseProps,
  LeadEditChange
} from '../components/LeadEdit'
import { ActionCreator } from '../actions'

interface IPropsFromParent {
  id: number
  url: string
  title: string
  author: string
}

interface IPropsFromDispatch {
  onSubmit: (id: number) => void
  onChange: (id: number, change: LeadEditChange) => void
  onCancel: (id: number) => void
}

interface IPropsFromState extends ILeadEdit { }

const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromState => {
  const edit = state.leadEdits[props.id]
  return edit
}

const mapDispatchToProps = (dispatch: Dispatch<IState>, props: IPropsFromParent): IPropsFromDispatch => {

  return {
    onCancel: (id: number) => {
      dispatch(ActionCreator.cancelLeadEdit(id))
    },
    onChange: (id: number, change: LeadEditChange) => {
      dispatch(ActionCreator.updateLeadEdit({ id, ...change }))
    },
    onSubmit: (id: number) => {
      dispatch(ActionCreator.commitLeadEdit(id))
    }
  }
}

const mergeProps = (propsFromState: IPropsFromState, propsFromDispatch: IPropsFromDispatch, propsFromParent: IPropsFromParent): IBaseProps => {

  return {
    onSubmit: propsFromDispatch.onSubmit,
    onCancel: propsFromDispatch.onCancel,
    onChange: propsFromDispatch.onChange,
    id: propsFromState.id || propsFromParent.id,
    author: propsFromState.author || propsFromParent.author,
    title: propsFromState.title || propsFromParent.title,
    url: propsFromState.url || propsFromParent.url,
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
)(Base)