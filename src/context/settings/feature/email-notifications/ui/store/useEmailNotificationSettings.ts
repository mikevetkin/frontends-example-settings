import { useEffect, useReducer } from 'react';
import { emailNotificationSettingsState } from '../../domian/functional-core/EmailNotificationSettingsState';
import { emailNotificationSettingsReducer } from '../../domian/functional-core/EmailNotificationSettingsReducer';
import { emailSettings } from '../../domian/entity/EmailSettings';
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
        data: emailSettings({
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
