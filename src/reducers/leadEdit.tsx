import { IAction, ActionType, ILeadEdits, ILeadEdit } from '../types'

const initialLeadEdits: ILeadEdits = { }

const leadEdit = (state: ILeadEdit, action: IAction): ILeadEdit => {
  switch (action.type) {
    case ActionType.CHANGE_LEAD_CREATE_URL: {

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

const leadEdits = (state = initialLeadEdits, action: IAction): ILeadEdits => {
  switch (action.type) {
    case ActionType.START_LEAD_EDIT: {
      // check that we are not already editing this id
      // create a leadEdit with the id
      // insert into the leadEdist

      return {
        ...state,
      }
    }
    case ActionType.COMMIT_LEAD_EDIT:
    case ActionType.CANCEL_LEAD_EDIT: {
      // remove the in-progress lead

      return {
        ...state,
      }
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