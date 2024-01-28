import { useEffect, useReducer } from 'react';
import { emailSettingsState } from '../../domian/functional-core/EmailSettingsState';
import { emailSettingsReducer } from '../../domian/functional-core/EmailSettingsReducer';
import { emailSettings } from '../../domian/entity/EmailSettings';
import { emailSettingsPresentation } from '../../presentation/emailSettingsPresentation';

export const useEmailSettings = () => {
  const [state, dispatch] = useReducer(
    emailSettingsReducer,
    emailSettingsState()
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
    viewState: emailSettingsPresentation(state),
    dispatch,
  };
};
