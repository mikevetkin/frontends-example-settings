import { SettingsSectionKey } from '../entity/SettingsSectionKey';
import { mapEmailSettingsDescription } from './email-notifications/mapEmailSettingsDescription';
import { mapPersonalSettingsDescription } from './personal/mapPersonalSettingsDescription';

export const mapSettingDescription: Record<
  SettingsSectionKey,
  Record<string, string>
> = {
  [SettingsSectionKey.EmailSettings]: mapEmailSettingsDescription,
  [SettingsSectionKey.PersonalSettings]: mapPersonalSettingsDescription,
};
