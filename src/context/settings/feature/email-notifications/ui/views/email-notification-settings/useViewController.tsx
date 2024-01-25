import { useEmailNotificationSettings } from '../../../store/useEmailNotificationSettings';
import { EmailNotificationSettingsViewModel } from '../../view-model/EmailNotificationSettingsViewModel';

export const useViewController = () => {
  const { state, dispatch } = useEmailNotificationSettings();

  const viewModel = new EmailNotificationSettingsViewModel(state, dispatch);

  return {
    viewModel,
    dispatch,
  };
};
