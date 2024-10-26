import { Colors } from 'types';
import { formatMessage } from './formatMessage';
import { Messages } from 'types/messages/messages';

export const coloredOutput = (typeMessage: Messages, color: Colors, port: number): string => {
  const textMessage = formatMessage(typeMessage, port);

  return `\x1b[${color}m${textMessage}\x1b[0m\n`;
};
