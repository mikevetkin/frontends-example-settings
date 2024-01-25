import { EmailNotificationSettings } from '../domian/entity/EmailNotificationSettings';
import { EmailSettingsKey } from '../domian/entity/EmailSettingsKey';

export interface ToggleEmailSettingsEvent {
  type: 'ToggleEmailSettingsEvent';
  key: EmailSettingsKey;
}

export interface SaveEvent {
  type: 'SaveEvent';
}

export interface DiscardEvent {
  type: 'DiscardEvent';
}

export interface ReceiveEmailSettingsEvent {
  type: 'ReceiveEmailSettingsEvent';
  data: EmailNotificationSettings;
}

export type EmailNotificationSettingsEvent =
  | ToggleEmailSettingsEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveEmailSettingsEvent;
