import { IAction, ActionType, ILeadCreate } from '../types'

interface ILeadCreateAction extends IAction {
  data: ILeadCreate
}

export interface IChangeLeadCreateUrl extends ILeadCreateAction { }

type LeadCreateAction = IChangeLeadCreateUrl

const initialState: ILeadCreate = {
  url: ''
}

const leadCreate = (state = initialState, action: LeadCreateAction): ILeadCreate => {
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

export default leadCreate