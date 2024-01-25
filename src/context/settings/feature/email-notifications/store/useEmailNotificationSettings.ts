import { useEffect, useReducer } from 'react';
import { emailNotificationSettingsState } from './EmailNotificationSettingsState';
import { emailNotificationSettingsReducer } from './EmailNotificationSettingsReducer';
import { emailNotificationSettings } from '../domian/entity/EmailNotificationSettings';
import { emailNotificationSettingsPresentation } from '../ui/views/EmailNotificationSettingsPresentation';

export const useEmailNotificationSettings = () => {
  const [state, dispatch] = useReducer(
    emailNotificationSettingsReducer,
    emailNotificationSettingsState()
  );

  /**
   * Эмуляция загрузки данных
   */
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'ReceiveEmailSettingsEvent',
        data: emailNotificationSettings({
          marketingEmails: false,
          securityEmails: true,
        }),
      });
    }, 2000);
  }, []);

  return {
    viewState: emailNotificationSettingsPresentation(state),
    dispatch,
  };
};
