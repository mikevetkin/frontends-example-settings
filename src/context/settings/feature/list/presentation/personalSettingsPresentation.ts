import { saveOrDiscardPresenatation } from '@/context/settings/shared/save-or-discard/presentation/saveOrDiscardPresentation';
import { PersonalSettingsState } from '../domain/functional-core/PersonalSettingsState';

export const personalSettingsPresentation = (
  state: PersonalSettingsState
): EmailSettingsViewState => {
  return {
    settings: getSetting(state),
    saveOrDiscard: saveOrDiscardPresenatation(state),
  };
};

function getSetting(
  state: PersonalSettingsState
): SettingsSectionViewState | SkeletonListViewState {
  const { status, originalSettings } = state;

  switch (status) {
    case 'loading':
      return new SkeletonListViewState({
        list: [new SkeletonViewState(), new SkeletonViewState()],
      });
    case 'idle':
    case 'pending':
      return new SettingsSectionViewState({
        list: (Object.keys(originalSettings) as EmailSettingsKey[]).map(
          (key) =>
            new SettingViewState({
              key: key,
              title: mapEmailSettingsTitle[key],
              description: mapEmailSettingsDescription[key],
              control: mapControl(state, key),
            })
        ),
      });
  }
}
