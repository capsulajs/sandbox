// @flow

import SendRequest from "./APIClient/SendRequest";

export type Socket = 'Websocket' | 'Rsocket' | 'SocketIO' | 'SockJS';
export type ConnectionMode = Socket | 'http' | 'microFrontend';


export interface ConnectRequest {
  /** Connection mode (Socket, HTTP, MicroFrontend) */
  mode: ConnectionMode;
  /** ID of the environment for which the connection will be opened */
  environmentId: number
  /** Only in case of Socket - URL of the socket */
  url?: string; // only needed in case of socket
}

export interface Event {
  /** Type of the event */
  type: 'request' | 'response';
  /** If a groupId was specified in the original request, it will be part of all types of events derived from it */
  groupId?: number;
  /** Time of the event */
  timestamp: number;
  /** Original request, provided for all types of events */
  request: SendRequest | ConnectRequest;
  /** Only in case of response event */
  response?: string;
}

export interface SendInput {
  /** Content of the input */
  input: string;
  /** Optional - Can be used to tag all events that derived from this request with a specific group id */
  groupId?: number;
}

export interface Status {
  /** ID of the environment for which the connection was opened or closed */
  environmentId: number;
  /** Status of the connection */
  status: 'connected' | 'disconnected';
  /** Time of the connection or disconnection event */
  timestamp: number;
  /** Connection mode (Socket, HTTP, MicroFrontend) */
  mode: ConnectionMode;
  /** Only in case of Socket - URL of the socket */
  url?: string;
}