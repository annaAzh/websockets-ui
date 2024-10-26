import { Messages } from '../types';

export const formatMessage = (message: Messages, port: number): string => {
  switch (message) {
    case Messages.CLOSE:
      return `WebSocket client disconnected on the ${port} port!`;
    case Messages.ERROR:
      return `WebSocket client error on the ${port} port!`;
    case Messages.CONNECTION:
      return `WebSocket client connected on the ${port} port!`;
    case Messages.LISTENING:
      return `WebSocket server started on the ${port} port!`;
    case Messages.HTTP_CONNECTION:
      return `Static http server started on the ${port} port!`;
  }
};
