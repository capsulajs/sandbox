// @flow

export type Socket = 'Websocket' | 'Rsocket' | 'SocketIO' | 'SockJS';
export type ConnectionMode = Socket | 'http' | 'microFrontend';