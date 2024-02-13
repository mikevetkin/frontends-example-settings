import { SettingsSectionKey } from '../entity/SettingsSectionKey';
import { mapEmailSettingsTitle } from './email-notifications/mapEmailSettingsTitle';

export const mapSettingTitle: Record<
  SettingsSectionKey,
  Record<string, string>
> = {
  [SettingsSectionKey.EmailSettings]: mapEmailSettingsTitle,
};
