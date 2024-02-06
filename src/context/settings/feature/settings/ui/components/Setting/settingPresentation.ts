import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { EmailSettingsKey } from '../../../domain/entity/email-notifications/EmailSettingsKey';
import { PersonalSettingsKey } from '../../../domain/entity/personal/PersonalSettingsKey';
import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { mapEmailSettingsDescription } from '../../../domain/mapper/email-notifications/mapEmailSettingsDescription';
import { mapEmailSettingsTitle } from '../../../domain/mapper/email-notifications/mapEmailSettingsTitle';
import { mapPersonalSettingsDescription } from '../../../domain/mapper/personal/mapPersonalSettingsDescription';
import { mapPersonalSettingsTitle } from '../../../domain/mapper/personal/mapPersonalSettingsTitle';
import { SettingViewState } from './SettingViewState';
import { settingControlPresentation } from './settingControlPresentation';

export const settingPresentation = (
  state: SettingsState,
  section: SettingsSectionKey,
  setting: EmailSettingsKey | PersonalSettingsKey
): SettingViewState => {
  const mapTitle: Record<SettingsSectionKey, string> = {
    [SettingsSectionKey.EmailSettings]:
      mapEmailSettingsTitle[setting as EmailSettingsKey],
    [SettingsSectionKey.PersonalSettings]:
      mapPersonalSettingsTitle[setting as PersonalSettingsKey],
  };

  const mapDescription: Record<SettingsSectionKey, string> = {
    [SettingsSectionKey.EmailSettings]:
      mapEmailSettingsDescription[setting as EmailSettingsKey],
    [SettingsSectionKey.PersonalSettings]:
      mapPersonalSettingsDescription[setting as PersonalSettingsKey],
  };

  return new SettingViewState({
    sectionKey: section,
    key: setting,
    title: mapTitle[section],
    description: mapDescription[section],
    control: settingControlPresentation(state, section, setting),
  });
};
