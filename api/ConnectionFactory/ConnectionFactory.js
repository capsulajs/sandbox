// @flow
import { Observable } from 'rxjs';
import { SendRequest, ConnectRequest, DisconnectRequest, SendResponse, StatusRequest, LogsRequest, Event, Status } from "./types";

/**
 * APIClient service can be used to
 *    - open and close connections to one or several environments
 *    - send request over opened connection
 *    - receive complete log of request and response events
 *    - receive complete log of connection events
 */
export interface ConnectionFactory {
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
   * Provides all requests and responses events
   * @return An Observable sequence emitting an event for each request sent and response received, for all environments
   */
  listen(r: LogsRequest) : Observable<Event>;
}


