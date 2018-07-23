// @flow
import { Observable } from 'rxjs';
import SendRequest from './SendRequest';
import { ConnectionMode } from "./types";

/**
 * APIClient service can be used to
 *    - open and close connections to one or several environments
 *    - send request over opened connection
 *    - receive complete log of request and response events
 *    - receive complete log of connection events
 */
interface APIClient {
  /**
   * Open a connection for a given environment using the specified mode
   * @return void
   */
  connect(r: ConnectRequest) : void;
  /**
   * Close a connection for a given connection ID
   * @return void
   */
  disconnect(r: DisconnectRequest) : void;
  /**
   * Send a request to a given environment
   * @return A Promise that is resolved if the request has correctly been sent
   */
  send(r: SendRequest) : Promise<SendResponse>;
  /**
   * Provides update regarding the connection statuses
   * @return An Observable sequence emitting all changes in connections status
   */
  status(r: StatusRequest): Observable<Status>;
  /**
   * Provides log of all requests and responses
   * @return An Observable sequence emitting an event for each request sent and response received, for all environments
   */
  logs(r: LogsRequest) : Observable<Event>;
}

interface ConnectRequest {
  /** Connection mode (Socket, HTTP, MicroFrontend) */
  mode: ConnectionMode;
  /** ID of the environment for which the connection will be opened */
  environmentId: number
  /** Only in case of Socket - URL of the socket */
  url?: string; // only needed in case of socket
}

interface DisconnectRequest {
  /** ID of the environment for which the connection should be closed*/
  environmentId: number;
}

interface SendResponse {}

interface StatusRequest {}

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

interface LogsRequest {}

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

export default APIClient;