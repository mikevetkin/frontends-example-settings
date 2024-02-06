import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { EmailSettingsKey } from '../../../domain/entity/email-notifications/EmailSettingsKey';
import { PersonalSettingsKey } from '../../../domain/entity/personal/PersonalSettingsKey';
import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { mapSettingsSectionHeading } from '../../../domain/mapper/mapSettingsSectionHeading';
import { settingPresentation } from '../Setting/settingPresentation';
import { SectionViewState } from './SectionViewState';

export const saveectionPresentation = (
  state: SettingsState,
  section: SettingsSectionKey
): SectionViewState => {
  return new SectionViewState({
    heading: mapSettingsSectionHeading[section],
    list: (
      Object.keys(state.draft[section]) as
        | EmailSettingsKey[]
        | PersonalSettingsKey[]
    ).map((setting) => settingPresentation(state, section, setting)),
  });
};
