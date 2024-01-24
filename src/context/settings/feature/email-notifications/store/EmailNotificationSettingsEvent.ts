import { EmailNotificationSettings } from '../domian/entity/EmailNotificationSettings';

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
  | ToggleSecurityEmailsEvent
  | ToggleMarketingEmailsEvent
  | SaveEvent
  | DiscardEvent
  | ReceiveEmailSettingsEvent;
