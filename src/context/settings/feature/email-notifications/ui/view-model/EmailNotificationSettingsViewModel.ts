import { SettingSwitchViewModel } from './SettingSwitchViewModel';
import { EmailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { SwitcherViewModel } from '@/core/view-model/SwitcherViewModel';
import { Dispatch } from 'react';
import { EmailNotificationSettingsEvent } from '../../store/EmailNotificationSettingsEvent';
import { SaveOrDiscardViewModel } from '@/context/settings/shared/save-or-discard/ui/view-model/SaveOrDiscardViewModel';
import _ from 'lodash';
import { ButtonViewModel } from '@/core/view-model/ButtonViewModel';
import { SkeletonViewModel } from '@/core/view-model/SkeletonViewModel';

export class EmailNotificationSettingsViewModel {
  settings: SettingSwitchViewModel[] | SkeletonViewModel[];
  saveOrDiscard: SaveOrDiscardViewModel | undefined;

  constructor(
    state: EmailNotificationSettingsState,
    dispatch: Dispatch<EmailNotificationSettingsEvent>
  ) {
    const { status, draftSettings, originalSettings } = state;

    switch (status) {
      case 'loading':
        this.settings = [
          new SkeletonViewModel({
            width: '100%',
            height: '76px',
          }),
          new SkeletonViewModel({
            width: '100%',
            height: '76px',
          }),
        ];

        break;
      case 'idle':
        this.settings = [
          new SettingSwitchViewModel({
            title: 'Marketing emails',
            description:
              'Receive emails about new products, features, and more.',
            switcher: new SwitcherViewModel({
              checked: draftSettings.isEnabledMarketingEmails,
              onCheckedChange: () =>
                dispatch({
                  type: 'ToggleMarketingEmailsEvent',
                }),
            }),
          }),
          new SettingSwitchViewModel({
            title: 'Security emails',
            description: 'Receive emails about your account security.',
            switcher: new SwitcherViewModel({
              checked: draftSettings.isEnabledSecurityEmails,
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
      : new SaveOrDiscardViewModel({
          save: new ButtonViewModel({
            label: 'Save',
            onClick: () =>
              dispatch({
                type: 'SaveEvent',
              }),
          }),
          discard: new ButtonViewModel({
            label: 'Discard',
            onClick: () =>
              dispatch({
                type: 'DiscardEvent',
              }),
          }),
        });
  }
}
