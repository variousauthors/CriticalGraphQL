import { ActionType } from '../types'

import * as LeadEditActions from '../reducers/leadEdit'
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

export const ActionCreator = {
  changeLeadCreateURL,
  startLeadEdit
}