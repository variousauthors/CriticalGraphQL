import { IAction, ActionType, ILeadCreate } from '../types'

const initialState: ILeadCreate = {
  url: ''
}

const leadCreate = (state = initialState, action: IAction): ILeadCreate => {
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