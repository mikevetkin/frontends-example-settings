import { SettingsSectionKey } from '../../domain/entity/SettingsSectionKey';
import { SettingsState } from '../../domain/functional-core/SettingsState';
import { sectionPresentation } from '../components/Section/SectionPresentation';
import { SettingsPageViewState } from './SettingsPageViewState';

export const settingsPagePresentation = (state: SettingsState) => {
  const { draft } = state;

  return new SettingsPageViewState({
    sections: (Object.keys(draft) as SettingsSectionKey[]).map((section) =>
      sectionPresentation(state, section)
    ),
  });
};
