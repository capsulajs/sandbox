// @flow
import { Observable } from 'rxjs';
import SendRequest from '../types/SendRequest';
import { ConnectRequest, Event, Status } from "../types/types";

/**
 * APIClient service can be used to
 *    - open and close connections to one or several environments
 *    - send request over opened connection
 *    - receive complete log of request and response events
 *    - receive complete log of connection events
 */
export interface APIClient {
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

interface DisconnectRequest {
  /** ID of the environment for which the connection should be closed*/
  environmentId: number;
}

interface SendResponse {}

interface StatusRequest {}

interface LogsRequest {}
