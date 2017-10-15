import { IAction, ActionType, ILeadEdits, ILeadEdit } from '../types'

interface ILeadEditAction extends IAction {
  data: ILeadEdit
}

export interface IStartLeadEdit extends ILeadEditAction { }
export interface ICommitLeadEdit extends ILeadEditAction { }
export interface ICancelLeadEdit extends ILeadEditAction { }
export interface IUpdateLeadEdit extends ILeadEditAction { }

type LeadEditAction =
  IStartLeadEdit
  | ICommitLeadEdit
  | ICancelLeadEdit
  | IUpdateLeadEdit

const initialLeadEdits: ILeadEdits = { }
const initialState: ILeadEdit = {
  id: -1
}

const leadEdit = (state = initialState, action: LeadEditAction): ILeadEdit => {
  switch (action.type) {
    case ActionType.START_LEAD_EDIT: {

      return {
        ...state,
        ...action.data
      }
    }
    case ActionType.UPDATE_LEAD_EDIT: {
      if (state.id !== action.data.id) {
        return state
      }

      return {
        ...state,
        ...action.data
      }
    }
    default: {
      return state
    }
  }
}

const leadEdits = (state = initialLeadEdits, action: LeadEditAction): ILeadEdits => {
  switch (action.type) {
    case ActionType.START_LEAD_EDIT: {
      if (state[action.data.id]) {
        return state
      }

      return {
        ...state,
        [action.data.id]: leadEdit(undefined, action)
      }
    }

    case ActionType.COMMIT_LEAD_EDIT:
    case ActionType.CANCEL_LEAD_EDIT: {
      if (!state[action.data.id]) {
        return state
      }

      const newState = {
        ...state
      }

      delete newState[action.data.id]

      return newState
    }

    case ActionType.UPDATE_LEAD_EDIT: {
      if (!state[action.data.id]) {
        return state
      }

      const edit = state[action.data.id]

      return {
        ...state,
        [action.data.id]: leadEdit(edit, action)
      }
    }
    default: {
      return state
    }
  }
}

export default leadEdits