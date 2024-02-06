import { EmailSettingsKey } from '../../../email-notifications/domian/entity/EmailSettingsKey';
import { Settings } from '../entity/Settings';
import { SettingsSectionKey } from '../entity/SettingsSectionKey';

export interface ChangeSettingEvent {
  type: 'ChangeSettingEvent';
  sectionKey: SettingsSectionKey;
  key: EmailSettingsKey;
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
