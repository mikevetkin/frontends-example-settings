import { EmailSettings } from './email-notifications/EmailSettings';
import { PersonalSettings } from './personal/PersonalSettings';

export type SettingsValue =
  | EmailSettings[keyof EmailSettings]
  | PersonalSettings[keyof PersonalSettings];
