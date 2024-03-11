import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { settingPresentation } from '../Setting/SettingPresentation';
import { SectionViewState } from './SectionViewState';


export const sectionPresentation = (
  state: SettingsState,
  section: SettingsSction
): SectionViewState => {
  return new SectionViewState({
    key: section.key,
    heading: section.heading,
    list: section.settings.map((setting) =>
      settingPresentation(state, section, setting)
    ),
  });
};
