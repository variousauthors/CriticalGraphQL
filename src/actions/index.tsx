
import { ActionType, IAction } from '../types'

const changeLeadCreateURL = (url: string): IAction => {
  return {
    type: ActionType.CHANGE_LEAD_CREATE_URL,
    data: {
      url
    }
  }
}

export const ActionCreator = {
  changeLeadCreateURL
}