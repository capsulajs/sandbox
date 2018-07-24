type Socket = 'Websocket' | 'Rsocket' | 'SocketIO' | 'SockJS';
type ConnectionMode = Socket | 'http' | 'microFrontend';

export interface ConnectRequest {
  /** Connection mode (Socket, HTTP, MicroFrontend) */
  mode: ConnectionMode;
  /** ID of the environment for which the connection will be opened */
  environmentId: number
  /** Only in case of Socket - URL of the socket */
  url?: string; // only needed in case of socket
}

export interface DisconnectRequest {
  /** ID of the environment for which the connection should be closed*/
  environmentId: number;
}

export interface SendResponse {}

export interface StatusRequest {}

export interface LogsRequest {}


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

export type SendRequest = SendRequestSocket | SendRequestMicroFrontend | SendRequestHTTP;

interface Request {
  /** Connection mode (Socket, HTTP, MicroFrontend) */
  type: ConnectionMode;
  /** Body of the request to send */
  request: string;
  /** ID of the environment for which the request will be sent */
  environmentId: number
  /** Optional - Can be used to tag all events that derived from this request with a specific group id */
  groupId?: number; // optional, if user want to group the request and responses of this request
}

interface SendRequestSocket extends Request{
  /** Connection mode (Socket) */
  type: Socket;
}

interface SendRequestMicroFrontend extends Request {
  /** Connection mode (MicroFrontend) */
  type: 'microFrontend';
  /** MicroFrontend service on which the request will be applied */
  microFrontend: ScalecubeService;
  /** Method that will be called on the microFrontend service */
  methodName: string;
}

interface SendRequestHTTP extends Request {
  /** Connection mode (HTTP) */
  type: 'http';
  /** URL of the service to call for this request */
  url: string;
}
