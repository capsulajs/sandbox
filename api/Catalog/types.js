
export interface AddRequest {
  environmentId: number
}
export interface RemoveRequest {
  environmentId: number
}

export interface SelectedRequest {}

export interface ComponentRequest {}

export interface API {
  environmentId: number;
  methodId: number;
}