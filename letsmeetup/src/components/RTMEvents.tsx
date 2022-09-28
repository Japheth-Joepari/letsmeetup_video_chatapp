  

import {messageChannelType, messageEventInterface} from './ChatContext';

const RTM_ERROR_TEMPLATE = 'RTMError:';

type eventsMapInterface = {
  [key in messageChannelType]: Record<string, any>;
};

type errorObjectInterface = {
  msg: string;
  cause: any;
};

type eventKeyType = keyof eventsMapInterface;

const eventsMap: eventsMapInterface = {
  [messageChannelType.Private]: new Map<string, any>(),
  [messageChannelType.Public]: new Map<string, any>(),
};

export interface rtmEventsInterface {
  on: (
    messageChannel: messageChannelType,
    evtName: string,
    callback: any,
  ) => void;
  emit: (
    messageChannel: messageChannelType,
    data: messageEventInterface | any | null,
    error?: errorObjectInterface | null | undefined,
  ) => void;
  off: (messageChannel: messageChannelType, evtName: string) => void;
  destroyAll: () => void;
}

const events: rtmEventsInterface = {
  on: (messageChannel: messageChannelType, evtName: string, callback: any) => {
    eventsMap[messageChannel].set(evtName, callback);
  },
  emit: (
    messageChannel: messageChannelType,
    data: messageEventInterface | any | null,
    error: errorObjectInterface | null | undefined,
  ) => {
    // Handle error, if error found return error in callback
    if (error) {
      let err = new Error(`${RTM_ERROR_TEMPLATE}: ${error.msg}`);
      err.stack += '\nCaused by: ' + error.cause;

      for (const [key] of eventsMap[messageChannel].entries()) {
        eventsMap[messageChannel].get(`${key}`)(null, err);
      }
      return;
    }
    // Handle success, return data in callback
    for (const [key] of eventsMap[messageChannel].entries()) {
      eventsMap[messageChannel].get(`${key}`)(data, null);
    }
  },
  off: (messageChannel: messageChannelType, evtName: string) => {
    eventsMap[messageChannel].delete(evtName);
  },
  destroyAll: () => {
    for (const key of Object.keys(eventsMap) as Array<eventKeyType>) {
      eventsMap[key].clear();
    }
  },
};

Object.freeze(events);

export default events;
