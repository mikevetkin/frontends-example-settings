import { Settings, SettingsValue } from '../entity/Settings';
import { SettingKey } from '../entity/setting/SettingKey';

export interface ChangeSettingEvent {
  type: 'ChangeSettingEvent';
  key: SettingKey;
  value: SettingsValue;
}

export interface SaveEvent {
  type: 'SaveEvent';
}

export interface DiscardEvent {
  type: 'DiscardEvent';
}

export interface ReceiveSettingsEvent {
  type: 'ReceiveSettingsEvent';
  data: Settings;
}

export interface ReceiveSaveEvent {
  type: 'ReceiveSaveEvent';
}

/**
 * Какие события могут происходить в системе
 */
export type SettingsEvent =
  | ChangeSettingEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveSettingsEvent
  | ReceiveSaveEvent;
