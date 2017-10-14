export enum ActionType {
  CHANGE_LEAD_CREATE_URL = 'CHANGE_LEAD_CREATE_URL',
  START_LEAD_EDIT = 'START_LEAD_EDIT',
  COMMIT_LEAD_EDIT = 'COMMIT_LEAD_EDIT',
  CANCEL_LEAD_EDIT = 'CANCEL_LEAD_EDIT',
  UPDATE_LEAD_EDIT = 'UPDATE_LEAD_EDIT',
}

export interface INothing {}

export interface IAction {
  type: ActionType
  data: any
}

export interface ILeadCreate {
  url: string
}

export interface ILeadFields {
  id: number
  url: string
  title: string
  author: string
}

export interface ILead {
  node: ILeadFields // maybe these fields should just be the top level?
}

export interface ILeadEdits {
  [id: string]: ILeadEdit // TODO experiment with string or number
}

export interface ILeadEdit {
  id: number
  url?: string
  title?: string
  author?: string
}

export interface IState {
  leadCreate: ILeadCreate
  leadEdits: ILeadEdits
}
