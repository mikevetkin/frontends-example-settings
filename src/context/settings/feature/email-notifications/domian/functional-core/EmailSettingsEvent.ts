import { EmailSettings } from '../entity/EmailSettings';
import { EmailSettingsKey } from '../entity/EmailSettingsKey';

export interface ChangeEmailSettingEvent {
  type: 'ChangeEmailSettingEvent';
  key: EmailSettingsKey;
  value: boolean | string;
}

export interface SaveEvent {
  type: 'SaveEvent';
}

export interface DiscardEvent {
  type: 'DiscardEvent';
}

export interface ReceiveEmailSettingsEvent {
  type: 'ReceiveEmailSettingsEvent';
  data: EmailSettings;
}

export type EmailSettingsEvent =
  | ChangeEmailSettingEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveEmailSettingsEvent;
