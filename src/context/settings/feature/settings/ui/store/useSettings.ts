import { useEffect, useReducer } from 'react';
import { emailSettings } from '../../domain/entity/email-notifications/EmailSettings';
import { settingsReducer } from '../../domain/functional-core/SettingsReducer';
import { settingsState } from '../../domain/functional-core/SettingsState';
import { settings } from '../../domain/entity/Settings';
import { SettingsSectionKey } from '../../domain/entity/SettingsSectionKey';
import { SettingsKey } from '../../domain/entity/SettingsKey';
import { SettingsValue } from '../../domain/entity/SettingsValue';
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

  const changeSetting = (
    section: SettingsSectionKey,
    setting: SettingsKey,
    value: SettingsValue
  ) =>
    dispatch({
      type: 'ChangeSettingEvent',
      sectionKey: section,
      key: setting,
      value,
    });

  /**
   * Эмуляция отправки данных
   */
  const saveSettings = () => {
    dispatch({
      type: 'SaveEvent',
    });

    setTimeout(() => {
      dispatch({ type: 'ReceiveSave' });
    }, 1000);
  };

  const discardSettings = () => dispatch({ type: 'DiscardEvent' });

  return {
    viewState: settingsPagePresentation(state),
    changeSetting,
    saveSettings,
    discardSettings,
  };
};
