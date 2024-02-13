import { useEffect, useReducer } from 'react';
import { emailSettings } from '../../domain/entity/email-notifications/EmailSettings';
import { settingsReducer } from '../../domain/functional-core/SettingsReducer';
import { settingsState } from '../../domain/functional-core/SettingsState';
import { settings } from '../../domain/entity/Settings';
import { settingsPagePresentation } from '../pages/settingsPagePresentation';

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
            securityEmails: true,
          }),
        }),
      });
    }, 2000);
  }, []);

  const changeSetting = (section, setting, value) =>
    dispatch({
      type: 'ChangeSettingEvent',
      sectionKey: section,
      key: setting,
      value,
    });

  const saveSettings = () => {
    dispatch({
      type: 'SaveEvent',
    });

    setTimeout(() => {
      dispatch({ type: 'ReceiveSave' });
    }, 3000);
  };

  const discardSettings = () => dispatch({ type: 'DiscardEvent' });

  return {
    viewState: settingsPagePresentation(state),
    changeSetting,
    saveSettings,
    discardSettings,
  };
};
