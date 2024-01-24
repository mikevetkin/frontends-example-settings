import { useEffect, useReducer } from 'react';
import { emailNotificationSettingsState } from './EmailNotificationSettingsState';
import { emailNotificationSettingsReducer } from './EmailNotificationSettingsReducer';
import { EmailNotificationSettingsViewModel } from '../ui/view-model/EmailNotificationSettingsViewModel';
import { emailNotificationSettings } from '../domian/entity/EmailNotificationSettings';

export const useEmailNotificationSettings = () => {
  const [state, dispatch] = useReducer(
    emailNotificationSettingsReducer,
    emailNotificationSettingsState()
  );

  const viewModel = new EmailNotificationSettingsViewModel(state, dispatch);

  /**
   * Эмуляция загрузки данных
   */
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'ReceiveEmailSettingsEvent',
        data: emailNotificationSettings({
          isEnabledMarketingEmails: false,
          isEnabledSecurityEmails: true,
        }),
      });
    }, 2000);
  }, []);

  return {
    viewModel,
  };
};
