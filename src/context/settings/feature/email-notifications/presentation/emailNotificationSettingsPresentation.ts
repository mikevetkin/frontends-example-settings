import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { EmailNotificationSettingsState } from '../domian/functional-core/EmailNotificationSettingsState';
import { EmailNotificationSettingsViewState } from '../ui/views/EmailNotificationSettingsViewState';
import { SettingSwitchViewState } from '../ui/components/SettingSwitchViewState';
import { EmailSettingsKey } from '../domian/entity/EmailSettingsKey';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import _ from 'lodash';

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
      settings = [
        new SettingSwitchViewState({
          key: EmailSettingsKey.MarketingEmails,
          title: 'Marketing emails',
          description: 'Receive emails about new products, features, and more.',
          switcher: new SwitcherViewState({
            checked: draftSettings[EmailSettingsKey.MarketingEmails],
          }),
        }),
        new SettingSwitchViewState({
          key: EmailSettingsKey.SecurityEmails,
          title: 'Security emails',
          description: 'Receive emails about your account security.',
          switcher: new SwitcherViewState({
            checked: draftSettings[EmailSettingsKey.SecurityEmails],
          }),
        }),
      ];
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
