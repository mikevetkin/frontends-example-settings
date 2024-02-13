import { EmailSettings } from './email-notifications/EmailSettings';

export type SettingsValue = EmailSettings[keyof EmailSettings];
