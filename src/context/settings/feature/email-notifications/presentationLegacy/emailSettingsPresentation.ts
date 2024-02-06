import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { EmailSettingsState } from '../domian/functional-core/EmailSettingsState';
import { EmailSettingsViewState } from '../ui/views/EmailSettingsViewState';
import { SettingViewState } from '../../settings/ui/components/Setting/SettingViewState';
import { EmailSettingsKey } from '../../settings/domain/entity/email-notifications/EmailSettingsKey';
import { mapEmailSettingsTitle } from '../../settings/domain/mapper/email-notifications/mapEmailSettingsTitle';
import { mapEmailSettingsDescription } from '../../settings/domain/mapper/email-notifications/mapEmailSettingsDescription';
import { SectionViewState } from '../../settings/ui/components/Section/SectionViewState';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { saveOrDiscardPresenatation } from '@/context/settings/feature/settings/ui/components/SaveOrDiscard/saveOrDiscardPresentation';
import { settingControlPresentation } from '@/context/settings/feature/settings/ui/components/Setting/settingControlPresentation';

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
