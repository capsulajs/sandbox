
export interface SendRequest {}

export interface InputRequest {
  /** Content of the input */
  input: string
}

export interface ComponentRequest {}

export interface SendInput {
  /** Content of the input */
  input: string;
  /** Optional - Can be used to tag all events that derived from this request with a specific group id */
  groupId?: number;
}