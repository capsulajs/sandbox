// @flow
import { Observable } from 'rxjs';
import { ClearRequest, LogsRequest, LogRequest, SendRequest, ComponentRequest } from "./types";
import { SendInput } from "../SendForm/types";

/**
 * Logs service can be used to display a logs of events
 */
export interface Logs {
  /**
   * Method to clear all or part of the log history
   * @return void
   */
  clear: (r: ClearRequest) => void;
  /**
   * Allow to provide an observable of events that will be added to the log
   * @return void
   */
  logs: (r: LogsRequest) => void;
  /**
   * Method to add a single specific event to the log
   * @return void
   */
  log: (r: LogRequest) => void;
  /**
   * Provides all requests sent from the logs (mainly for resend feature)
   * @return An Observable sequence emitting all needed information every time a send request is submitted from the logs
   */
  send: (r: SendRequest) => Observable<SendInput>;
  /**
   * The method return a promise to the UI component
   * @return Component
   */
  component: (r: ComponentRequest) => Promise<Component>;
}
