import { SettingViewState } from '@/context/settings/shared/setting/ui/components/SettingViewState';
import { SettingsSectionViewState } from '../../email-notifications/ui/components/SettingsSectionViewState';
import { SettingsSectionKey } from '../domain/entity/SettingsSectionKey';
import { SettingsState } from '../domain/functional-core/SettingsState';
import { mapSettingsSectionHeading } from '../domain/mapper/mapSettingsSectionHeading';
import { SettingsPageViewState } from '../ui/pages/SettingsPageViewState';
import { settingControlPresentation } from '@/context/settings/shared/setting/presentation/settingControlPresentation';
import { mapEmailSettingsTitle } from '../../email-notifications/domian/mapper/mapEmailSettingsTitle';
import { mapPersonalSettingsTitle } from '../../personal/domain/mapper/mapPersonalSettingsTitle';
import { EmailSettingsKey } from '../../email-notifications/domian/entity/EmailSettingsKey';
import { PersonalSettingsKey } from '../../personal/domain/entity/PersonalSettingsKey';
import { mapEmailSettingsDescription } from '../../email-notifications/domian/mapper/mapEmailSettingsDescription';
import { mapPersonalSettingsDescription } from '../../personal/domain/mapper/mapPersonalSettingsDescription';

export const settingsPagePresentation = (state: SettingsState) => {
  const { draft } = state;

  return new SettingsPageViewState({
    sections: (Object.keys(draft) as SettingsSectionKey[]).map((section) =>
      settingsSectionPresentation(state, section)
    ),
  });
};

export const settingsSectionPresentation = (
  state: SettingsState,
  section: SettingsSectionKey
): SettingsSectionViewState => {
  return new SettingsSectionViewState({
    heading: mapSettingsSectionHeading[section],
    list: (
      Object.keys(state.draft[section]) as
        | EmailSettingsKey[]
        | PersonalSettingsKey[]
    ).map((setting) => settingPresentation(state, section, setting)),
  });
};

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
