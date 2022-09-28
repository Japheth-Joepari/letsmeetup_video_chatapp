  
import RtmEngine, {RtmAttribute} from 'agora-react-native-rtm';
import {createContext} from 'react';
import {rtmEventsInterface} from './RTMEvents';

export interface channelMessage {
  isLocal: boolean;
  msg: string;
  ts: string;
  uid: string;
}

export interface messageStoreInterface {
  ts: string;
  uid: string;
  msg: string;
}

export interface messageEventInterface extends messageStoreInterface {
  type: messageActionType;
  source: messageSourceType;
}

export enum messageSourceType {
  Core = 'core',
}

export enum messageChannelType {
  Private = 'private',
  Public = 'public',
}

export enum messageActionType {
  Control = '0',
  Normal = '1',
}

export enum attrRequestTypes {
  none = 'NONE',
}

interface chatContext {
  messageStore: messageStoreInterface | any;
  privateMessageStore: any;
  sendMessage: (msg: string) => void;
  sendMessageToUid: (msg: string, uid: number) => void;
  sendControlMessage: (msg: string) => void;
  sendControlMessageToUid: (msg: string, uid: number) => void;
  addOrUpdateLocalUserAttributes: (attributes: RtmAttribute[]) => void;
  broadcastUserAttributes: (
    attributes: RtmAttribute[],
    ctrlMsg: controlMessageEnum,
  ) => void;
  engine: RtmEngine;
  localUid: string;
  userList: any;
  onlineUsersCount: number;
  events: rtmEventsInterface;
}

export enum controlMessageEnum {
  muteVideo = '1',
  muteAudio = '2',
  muteSingleVideo = '3',
  muteSingleAudio = '4',
  kickUser = '5',
  cloudRecordingActive = '6',
  cloudRecordingUnactive = '7',
  clientRoleChanged = 'CLIENT_ROLE_CHANGED',
  // TODO move to livestream provider
}

const ChatContext = createContext(null as unknown as chatContext);

export default ChatContext;
