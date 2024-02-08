import {
  EmailSettings,
  emailSettings,
} from './email-notifications/EmailSettings';
import {
  PersonalSettings,
  personalSettings,
} from './personal/PersonalSettings';
import { SettingsSectionKey } from './SettingsSectionKey';

export interface Settings {
  [SettingsSectionKey.EmailSettings]: EmailSettings;
  [SettingsSectionKey.PersonalSettings]: PersonalSettings;
}

export const settings = (data: Partial<Settings> = {}): Settings => ({
  emailSettings: emailSettings(),
  personalSettings: personalSettings(),
  ...data,
});
