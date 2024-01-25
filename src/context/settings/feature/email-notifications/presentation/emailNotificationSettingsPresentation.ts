import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { EmailNotificationSettingsState } from '../domian/functional-core/EmailNotificationSettingsState';
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
      settings = Object.keys(originalSettings).map(
        (key) =>
          new SettingSwitchViewState({
            key: key as EmailSettingsKey,
            title: mapEmailSettingsTitle[key as EmailSettingsKey],
            description: mapEmailSettingsDescription[key as EmailSettingsKey],
            switcher: new SwitcherViewState({
              checked: draftSettings[key as EmailSettingsKey],
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
          label: 'Save',
        }),
        discard: new ButtonViewState({
          label: 'Discard',
        }),
      });

  return {
    settings,
    saveOrDiscard,
  };
};
