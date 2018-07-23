// @flow
import { Observable } from 'rxjs';

/**
 * SendForm service can be used to display a form that will send requests to API.
 * The form exposes a method to change its input from outside.
 */
interface SendForm {
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

interface SendInput {
  /** Content of the input */
  input: string;
  /** Optional - Can be used to tag all events that derived from this request with a specific group id */
  groupId?: number;
}

interface InputRequest {
  /** Content of the input */
  input: string
}

interface RenderRequest {}

export default SendForm;