import {
  EmailSettings,
  emailSettings,
} from './email-notifications/EmailSettings';
import { SettingsSectionKey } from './SettingsSectionKey';

export interface Settings {
  [SettingsSectionKey.EmailSettings]: EmailSettings;
}

export const settings = (data: Partial<Settings> = {}): Settings => ({
  emailSettings: emailSettings(),
  ...data,
});
