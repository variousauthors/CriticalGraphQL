export enum ActionType {
  CHANGE_LEAD_CREATE_URL = 'CHANGE_LEAD_CREATE_URL'
}

export interface IAction {
  type: ActionType,
  data: any
}

export interface ILeadCreate {
  url: string
}

export interface IState {
  leadCreate: ILeadCreate
}

export interface ILead {
  node: {
    url: string
    title: string
    author: string
  }
}