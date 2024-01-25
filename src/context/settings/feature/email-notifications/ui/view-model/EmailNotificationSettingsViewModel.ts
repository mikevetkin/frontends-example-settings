import { SettingSwitchViewState } from './SettingSwitchViewState';
import { EmailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { Dispatch } from 'react';
import { EmailNotificationSettingsEvent } from '../../store/EmailNotificationSettingsEvent';
import { SaveOrDiscardViewState } from '@/context/settings/feature/email-notifications/ui/view-model/SaveOrDiscardViewState';
import _ from 'lodash';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';

export class EmailNotificationSettingsViewModel {
  settings: SettingSwitchViewState[] | SkeletonViewState[];
  saveOrDiscard: SaveOrDiscardViewState | undefined;

  constructor(
    state: EmailNotificationSettingsState,
    dispatch: Dispatch<EmailNotificationSettingsEvent>
  ) {
    const { status, draftSettings, originalSettings } = state;

    switch (status) {
      case 'loading':
        this.settings = [new SkeletonViewState(), new SkeletonViewState()];

        break;
      case 'idle':
        this.settings = [
          new SettingSwitchViewState({
            title: 'Marketing emails',
            description:
              'Receive emails about new products, features, and more.',
            switcher: new SwitcherViewState({
              checked: draftSettings.isEnabledMarketingEmails,
              event: {
                type: 'ToggleMarketingEmailsEvent',
              },
              onCheckedChange: () =>
                dispatch({
                  type: 'ToggleMarketingEmailsEvent',
                }),
            }),
          }),
          new SettingSwitchViewState({
            title: 'Security emails',
            description: 'Receive emails about your account security.',
            switcher: new SwitcherViewState({
              checked: draftSettings.isEnabledSecurityEmails,
              event: {
                type: 'ToggleSecurityEmailsEvent',
              },
              onCheckedChange: () =>
                dispatch({
                  type: 'ToggleSecurityEmailsEvent',
                }),
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
            onClick: () =>
              dispatch({
                type: 'SaveEvent',
              }),
          }),
          discard: new ButtonViewState({
            label: 'Discard',
            onClick: () =>
              dispatch({
                type: 'DiscardEvent',
              }),
          }),
        });
  }
}
