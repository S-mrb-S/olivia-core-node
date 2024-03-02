import { ReadFile } from './file';

interface Message {
  Tag: string;
  Messages: string[];
}

let messages: { [key: string]: Message[] } = {};

export function SerializeMessages(locale: string): Message[] {
  const currentMessages = JSON.parse(ReadFile(`res/locales/${locale}/messages.json`).toString());
  messages[locale] = currentMessages;
  return currentMessages;
}

export function GetMessages(locale: string): Message[] {
  return messages[locale] || [];
}

export function GetMessageByTag(tag: string, locale: string): Message {
  for (const message of messages[locale] || []) {
    if (tag !== message.Tag) {
      continue;
    }
    return message;
  }
  return {} as Message;
}

export function GetMessage(locale: string, tag: string): string {
  const message = GetMessageByTag(tag, locale);
  if (message.Messages.length === 1) {
    return message.Messages[0];
  }
  return message.Messages[Math.floor(Math.random() * message.Messages.length)];
}
