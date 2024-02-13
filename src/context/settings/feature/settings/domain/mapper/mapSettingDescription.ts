import { SettingsSectionKey } from '../entity/SettingsSectionKey';
import { mapEmailSettingsDescription } from './email-notifications/mapEmailSettingsDescription';

export const mapSettingDescription: Record<
  SettingsSectionKey,
  Record<string, string>
> = {
  [SettingsSectionKey.EmailSettings]: mapEmailSettingsDescription,
};
