import { SettingsSectionKey } from '../../domain/entity/SettingsSectionKey';
import { SettingsState } from '../../domain/functional-core/SettingsState';
import { SettingsPageViewState } from './SettingsPageViewState';
import { saveectionPresentation } from '../components/Section/sectionPresentation';

export const settingsPagePresentation = (state: SettingsState) => {
  const { draft } = state;

  return new SettingsPageViewState({
    sections: (Object.keys(draft) as SettingsSectionKey[]).map((section) =>
      saveectionPresentation(state, section)
    ),
  });
};
