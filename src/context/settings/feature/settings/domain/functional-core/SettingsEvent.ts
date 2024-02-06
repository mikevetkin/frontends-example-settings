import { EmailSettingsKey } from '../entity/email-notifications/EmailSettingsKey';
import { PersonalSettingsKey } from '../entity/personal/PersonalSettingsKey';
import { Settings } from '../entity/Settings';
import { SettingsSectionKey } from '../entity/SettingsSectionKey';

export interface ChangeSettingEvent {
  type: 'ChangeSettingEvent';
  sectionKey: SettingsSectionKey;
  key: EmailSettingsKey | PersonalSettingsKey;
  value: boolean | string; // FIXME: Вынести в общее
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

export type SettingsEvent =
  | ChangeSettingEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveSettingsEvent;
