import { ActionType, ILeadEdit } from '../types'

import * as LeadEditActions from '../reducers/leadEdits'
import * as LeadCreateActions from '../reducers/leadCreate'

const changeLeadCreateURL = (url: string): LeadCreateActions.IChangeLeadCreateUrl => {
  return {
    type: ActionType.CHANGE_LEAD_CREATE_URL,
    data: {
      url
    }
  }
}

const startLeadEdit = (id: number): LeadEditActions.IStartLeadEdit => {
  return {
    type: ActionType.START_LEAD_EDIT,
    data: {
      id
    }
  }
}

const updateLeadEdit = (edit: ILeadEdit): LeadEditActions.IUpdateLeadEdit => {
  return {
    type: ActionType.UPDATE_LEAD_EDIT,
    data: {
      ...edit
    }
  }
}

const cancelLeadEdit = (id: number): LeadEditActions.ICancelLeadEdit => {
  return {
    type: ActionType.CANCEL_LEAD_EDIT,
    data: {
      id
    }
  }
}

const commitLeadEdit = (id: number): LeadEditActions.ICommitLeadEdit => {
  return {
    type: ActionType.COMMIT_LEAD_EDIT,
    data: {
      id
    }
  }
}

export const ActionCreator = {
  changeLeadCreateURL,
  startLeadEdit,
  updateLeadEdit,
  cancelLeadEdit,
  commitLeadEdit,
}