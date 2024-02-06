import {
  EmailSettings,
  emailSettings,
} from '../../../email-notifications/domian/entity/EmailSettings';
import {
  PersonalSettings,
  personalSettings,
} from '../../../personal/domain/entity/PersonalSettings';
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
