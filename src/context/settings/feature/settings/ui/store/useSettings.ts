import { useEffect, useReducer } from 'react';
import { settingsReducer } from '../../domain/functional-core/SettingsReducer';
import { settingsState } from '../../domain/functional-core/SettingsState';
import { SettingsValue, settings } from '../../domain/entity/Settings';
import { settingsPagePresentation } from '../pages/SettingsPagePresentation';
import { SettingKey } from '../../domain/entity/setting/SettingKey';

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
          securityEmails: true,
        }),
      });
    }, 2000);
  }, []);

  const changeSetting = (
    key: SettingKey,
    value: SettingsValue
  ) =>
    dispatch({
      type: 'ChangeSettingEvent',
      key,
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
      dispatch({ type: 'ReceiveSaveEvent' });
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
