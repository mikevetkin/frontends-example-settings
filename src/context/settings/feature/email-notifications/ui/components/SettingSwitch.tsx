import { Switch } from '@/components/ui/switch';
import { SettingSwitchViewState } from '../view-model/SettingSwitchViewState';
import { EmailNotificationSettingsEvent } from '../../store/EmailNotificationSettingsEvent';
import { Dispatch } from 'react';

export interface SettingSwitchProps {
  viewModel: SettingSwitchViewState;
  dispatch: Dispatch<EmailNotificationSettingsEvent>;
}

export const SettingSwitch: React.FC<SettingSwitchProps> = ({
  viewModel,
  dispatch,
}) => {
  return (
    <div className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <div className="space-y-0.5">
        <div className="text-left">{viewModel.title}</div>
        <div>{viewModel.description}</div>
      </div>
      <Switch
        checked={viewModel.switcher.checked}
        onCheckedChange={() => dispatch(viewModel.switcher.event)}
      />
    </div>
  );
};
