import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { EmailSettingsState } from '../domian/functional-core/EmailSettingsState';
import { EmailSettingsViewState } from '../ui/views/EmailSettingsViewState';
import { SettingViewState } from '../../../shared/setting/ui/components/SettingViewState';
import { EmailSettingsKey } from '../domian/entity/EmailSettingsKey';
import { mapEmailSettingsTitle } from '../domian/mapper/mapEmailSettingsTitle';
import { mapEmailSettingsDescription } from '../domian/mapper/mapEmailSettingsDescription';
import { SectionViewState } from '../../../shared/section/ui/components/SectionViewState';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { saveOrDiscardPresenatation } from '@/context/settings/shared/save-or-discard/presentation/saveOrDiscardPresentation';
import { settingControlPresentation } from '@/context/settings/shared/setting/presentation/settingControlPresentation';

// FIXME: Вытащить тесты и засунуть куда нужно

export const emailSettingsPresentation = (
  state: EmailSettingsState
): EmailSettingsViewState => {
  return {
    settings: getSetting(state),
    saveOrDiscard: saveOrDiscardPresenatation(state),
  };
};

function getSetting(
  state: EmailSettingsState
): SectionViewState | SkeletonListViewState {
  const { status, originalSettings } = state;

  switch (status) {
    case 'loading':
      return new SkeletonListViewState({
        list: [new SkeletonViewState(), new SkeletonViewState()],
      });
    case 'idle':
    case 'pending':
      return new SectionViewState({
        heading: 'Email Notifications',
        list: (Object.keys(originalSettings) as EmailSettingsKey[]).map(
          (key) =>
            new SettingViewState({
              key: key,
              title: mapEmailSettingsTitle[key],
              description: mapEmailSettingsDescription[key],
              // FIXME: Ну и вот доказательства
              control: settingControlPresentation(state, key),
            })
        ),
      });
  }
}
