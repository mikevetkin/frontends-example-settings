import { Settings } from '../entity/Settings';
import { SettingsKey } from '../entity/SettingsKey';
import { SettingsSectionKey } from '../entity/SettingsSectionKey';
import { SettingsValue } from '../entity/SettingsValue';

export interface ChangeSettingEvent {
  type: 'ChangeSettingEvent';
  sectionKey: SettingsSectionKey;
  key: SettingsKey;
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

export interface ReceiveSave {
  type: 'ReceiveSave';
}

export type SettingsEvent =
  | ChangeSettingEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveSettingsEvent
  | ReceiveSave;
