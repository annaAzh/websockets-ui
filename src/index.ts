import { coloredOutput } from './utils';
import { httpServer } from './servers/httpServer';
import { createWsServer } from './servers/wsServers';
import dotenv from 'dotenv';
import { Colors, Messages } from './types';

dotenv.config();

const HTTP_PORT = Number(process.env.HTTP_PORT) || 8181;
const WS_PORT = Number(process.env.WS_PORT) || 3000;

httpServer.listen(HTTP_PORT, () => {
  coloredOutput(Messages.HTTP_CONNECTION, Colors.GREEN, HTTP_PORT);
});

createWsServer(WS_PORT);
