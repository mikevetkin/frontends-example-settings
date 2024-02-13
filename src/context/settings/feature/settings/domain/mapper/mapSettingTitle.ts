import { SettingsSectionKey } from '../entity/SettingsSectionKey';
import { mapEmailSettingsTitle } from './email-notifications/mapEmailSettingsTitle';
import { mapPersonalSettingsTitle } from './personal/mapPersonalSettingsTitle';

export const mapSettingTitle: Record<
  SettingsSectionKey,
  Record<string, string>
> = {
  [SettingsSectionKey.EmailSettings]: mapEmailSettingsTitle,
  [SettingsSectionKey.PersonalSettings]: mapPersonalSettingsTitle,
};
