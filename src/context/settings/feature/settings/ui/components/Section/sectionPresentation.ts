import { SettingsKey } from '../../../domain/entity/SettingsKey';
import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { mapSettingsSectionHeading } from '../../../domain/mapper/mapSettingsSectionHeading';
import { settingPresentation } from '../Setting/settingPresentation';
import { SectionViewState } from './SectionViewState';

export const sectionPresentation = (
  state: SettingsState,
  section: SettingsSectionKey
): SectionViewState => {
  return new SectionViewState({
    heading: mapSettingsSectionHeading[section],
    list: (Object.keys(state.draft[section]) as SettingsKey[]).map((setting) =>
      settingPresentation(state, section, setting)
    ),
  });
};
