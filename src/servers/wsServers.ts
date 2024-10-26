import { Colors, Messages } from '../types';
import { coloredOutput } from '../utils';
import { WebSocketServer, WebSocket } from 'ws';

export const createWsServer = (port: number): void => {
  const wsServer = new WebSocketServer({ port });

  wsServer.on('listening', () => {
    coloredOutput(Messages.LISTENING, Colors.GREEN, port);
  });

  wsServer.on('connection', (ws: WebSocket) => {
    coloredOutput(Messages.CONNECTION, Colors.GREEN, port);

    ws.on('message', (message: string) => {
      console.log(JSON.parse(message));
    });

    ws.on('close', () => {
      coloredOutput(Messages.CLOSE, Colors.RED, port);
    });

    ws.on('error', (error: Error) => {
      console.log(error);
    });
  });
};
