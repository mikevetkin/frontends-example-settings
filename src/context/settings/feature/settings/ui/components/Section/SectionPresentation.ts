import { Section } from '../../../domain/entity/section/Section';
import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { settingPresentation } from '../Setting/SettingPresentation';
import { SectionViewState } from './SectionViewState';


export const sectionPresentation = (
  state: SettingsState,
  section: Section
): SectionViewState => {
  return new SectionViewState({
    key: section.key,
    heading: section.heading,
    list: section.settings.map((setting) =>
      settingPresentation(state, setting)
    ),
  });
};
