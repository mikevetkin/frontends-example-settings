import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { EmailNotificationSettingsState } from '../domian/functional-core/EmailSettingsState';
import { EmailNotificationSettingsViewState } from '../ui/views/EmailNotificationSettingsViewState';
import { SettingSwitchViewState } from '../ui/components/SettingSwitchViewState';
import { EmailSettingsKey } from '../domian/entity/EmailSettingsKey';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import _ from 'lodash';
import { mapEmailSettingsTitle } from '../domian/mapper/mapEmailSettingsTitle';
import { mapEmailSettingsDescription } from '../domian/mapper/mapEmailSettingsDescription';

export const emailNotificationSettingsPresentation = (
  state: EmailNotificationSettingsState
): EmailNotificationSettingsViewState => {
  const { status, draftSettings, originalSettings } = state;

  let settings;

  switch (status) {
    case 'loading':
      settings = [new SkeletonViewState(), new SkeletonViewState()];
      break;
    case 'idle':
    case 'pending':
      settings = (Object.keys(originalSettings) as EmailSettingsKey[]).map(
        (key) =>
          new SettingSwitchViewState({
            key: key,
            title: mapEmailSettingsTitle[key],
            description: mapEmailSettingsDescription[key],
            switcher: new SwitcherViewState({
              checked: draftSettings[key],
              disabled: status === 'pending',
            }),
          })
      );
      break;
  }

  const saveOrDiscard = _.isEqual(draftSettings, originalSettings)
    ? undefined
    : new SaveOrDiscardViewState({
        save: new ButtonViewState({
          icon: status === 'pending' ? 'pending' : undefined,
          label: status === 'pending' ? 'Pending' : 'Save',
          disabled: status === 'pending',
        }),
        discard: new ButtonViewState({
          label: 'Discard',
          disabled: status === 'pending',
        }),
      });

  return {
    settings,
    saveOrDiscard,
  };
};
