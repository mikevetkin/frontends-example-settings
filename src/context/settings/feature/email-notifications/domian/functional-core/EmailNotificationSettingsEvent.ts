import { EmailSettings } from '../entity/EmailSettings';
import { EmailSettingsKey } from '../entity/EmailSettingsKey';

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
  data: EmailSettings;
}

export type EmailNotificationSettingsEvent =
  | ToggleEmailSettingsEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveEmailSettingsEvent;
