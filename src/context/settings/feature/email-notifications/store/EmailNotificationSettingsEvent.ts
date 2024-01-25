import { EmailNotificationSettings } from '../domian/entity/EmailNotificationSettings';
import { EmailSettingsKey } from '../domian/entity/EmailSettingsKey';

export interface ToggleEmailSettingsEvent {
  type: 'ToggleEmailSettingsEvent';
  key: EmailSettingsKey;
}

export interface ToggleMarketingEmailsEvent {
  type: 'ToggleMarketingEmailsEvent';
}

export interface ToggleSecurityEmailsEvent {
  type: 'ToggleSecurityEmailsEvent';
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
  | ToggleSecurityEmailsEvent
  | ToggleMarketingEmailsEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveEmailSettingsEvent;
