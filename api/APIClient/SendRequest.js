// @flow
import { ConnectionMode, Socket } from "../types";

type SendRequest = SendRequestSocket | SendRequestMicroFrontend | SendRequestHTTP;

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

export default SendRequest;

