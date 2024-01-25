import { useEffect, useReducer } from 'react';
import { emailNotificationSettingsState } from '../../domian/functional-core/EmailNotificationSettingsState';
import { emailNotificationSettingsReducer } from '../../domian/functional-core/EmailNotificationSettingsReducer';
import { emailNotificationSettings } from '../../domian/entity/EmailNotificationSettings';
import { emailNotificationSettingsPresentation } from '../../presentation/emailNotificationSettingsPresentation';

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
