import { EmailSettingsKey } from '../../../domian/entity/EmailSettingsKey';
import { useEmailNotificationSettings } from '../../../store/useEmailNotificationSettings';
import { EmailNotificationSettingsViewModel } from '../../view-model/EmailNotificationSettingsViewModel';

export const useViewController = () => {
  const { state, dispatch } = useEmailNotificationSettings();

  const viewModel = new EmailNotificationSettingsViewModel(state);

  const onCheckedChange = (key: EmailSettingsKey) =>
    dispatch({
      type: 'ToggleEmailSettingsEvent',
      key,
    });

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
