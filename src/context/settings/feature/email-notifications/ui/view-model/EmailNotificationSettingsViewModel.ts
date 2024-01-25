import { SettingSwitchViewState } from '../components/SettingSwitchViewState';
import { EmailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SaveOrDiscardViewState } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscardViewState';
import _ from 'lodash';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { EmailSettingsKey } from '../../domian/entity/EmailSettingsKey';

// export class EmailNotificationSettingsViewState {
//   settings: SettingSwitchViewState[] | SkeletonViewState[];
//   saveOrDiscard: SaveOrDiscardViewState | undefined;
// }

// export const EmailNotificationSettingsPresentation (state: EmailNotificationSettingsState): EmailNotificationSettingsViewState => {

// }

export class EmailNotificationSettingsViewModel {
  settings: SettingSwitchViewState[] | SkeletonViewState[];
  saveOrDiscard: SaveOrDiscardViewState | undefined;

  constructor(state: EmailNotificationSettingsState) {
    const { status, draftSettings, originalSettings } = state;

    switch (status) {
      case 'loading':
        this.settings = [new SkeletonViewState(), new SkeletonViewState()];

        break;
      case 'idle':
        this.settings = [
          new SettingSwitchViewState({
            key: EmailSettingsKey.MarketingEmails,
            title: 'Marketing emails',
            description:
              'Receive emails about new products, features, and more.',
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

    this.saveOrDiscard = _.isEqual(draftSettings, originalSettings)
      ? undefined
      : new SaveOrDiscardViewState({
          save: new ButtonViewState({
            label: 'Save',
          }),
          discard: new ButtonViewState({
            label: 'Discard',
          }),
        });
  }
}
