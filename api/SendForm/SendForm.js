// @flow
import { Observable } from 'rxjs';
import { SendInput } from "../types";

/**
 * SendForm service can be used to display a form that will send requests to API.
 * The form exposes a method to change its input from outside.
 */
export interface SendForm {
  /**
   * Provides all requests sent from the form
   * @return An Observable sequence emitting all needed information every time the form is submitted
   */
  send: (r: SendRequest) => Observable<SendInput>;
  /**
   * The method allow to change the value of the form input
   * @return void
   */
  input: (r: InputRequest) => void;
  /**
   * The method return a promise to the component to render
   * @return Component
   */
  render: (r: RenderRequest) => Promise<Component>;
}

interface SendRequest {}

interface InputRequest {
  /** Content of the input */
  input: string
}

interface RenderRequest {}
