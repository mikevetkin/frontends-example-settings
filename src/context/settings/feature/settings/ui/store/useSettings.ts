import { useEffect, useReducer } from 'react';
import { emailSettings } from '../../../email-notifications/domian/entity/EmailSettings';
import { settingsReducer } from '../../domain/functional-core/SettingsReducer';
import { settingsState } from '../../domain/functional-core/SettingsState';
import { settings } from '../../domain/entity/Settings';
import { settingsPagePresentation } from '../../presentation/settingsPagePresentation';

export const useSettings = () => {
  const [state, dispatch] = useReducer(settingsReducer, settingsState());

  /**
   * Эмуляция загрузки данных
   */
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'ReceiveSettingsEvent',
        data: settings({
          emailSettings: emailSettings({
            marketingEmails: false,
            securityEmails: true,
          }),
        }),
      });
    }, 2000);
  }, []);

  return {
    viewState: settingsPagePresentation(state),
    dispatch,
  };
};
