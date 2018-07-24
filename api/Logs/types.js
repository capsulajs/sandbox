import {Observable} from "rxjs/index";
import { Event } from "../ConnectionFactory/types";

export interface ClearRequest {
  /** Optional - if specified, it will clear only logs tagged with this group id*/
  groupId?: number;
}
export interface LogsRequest {
  /** Observable of events to add to the logs*/
  logs: Observable<Event>;
}
export interface LogRequest {
  /** Single event to add to the logs */
  event: Event;
}
export interface SendRequest {}
export interface ComponentRequest {}
