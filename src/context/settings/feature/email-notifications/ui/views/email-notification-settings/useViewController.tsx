import { useEmailNotificationSettings } from '../../../store/useEmailNotificationSettings';
import { EmailNotificationSettingsViewModel } from '../../view-model/EmailNotificationSettingsViewModel';
import { EmailSettingsKey } from '../../view-model/SettingSwitchViewState';

export const useViewController = () => {
  const { state, dispatch } = useEmailNotificationSettings();

  const viewModel = new EmailNotificationSettingsViewModel(state);

  const onCheckedChange = (key: EmailSettingsKey) => {
    switch (key) {
      case 'marketing-emails':
        dispatch({
          type: 'ToggleMarketingEmailsEvent',
        });
        break;
      case 'security-emails':
        dispatch({ type: 'ToggleSecurityEmailsEvent' });
    }
  };

  const onClickSave = () =>
    dispatch({
      type: 'SaveEvent',
    });

  const onClickDiscard = () => dispatch({ type: 'DiscardEvent' });

  return {
    viewModel,
    dispatch,
    onCheckedChange,
    onClickSave,
    onClickDiscard,
  };
};
