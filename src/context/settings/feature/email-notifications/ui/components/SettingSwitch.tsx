import { Switch } from '@/components/ui/switch';
import { SettingSwitchViewModel } from '../view-model/SettingSwitchViewModel';

export interface SettingSwitchProps {
  viewModel: SettingSwitchViewModel;
}

export const SettingSwitch: React.FC<SettingSwitchProps> = ({ viewModel }) => {
  return (
    <div className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <div className="space-y-0.5">
        <div className="text-left">{viewModel.title}</div>
        <div>{viewModel.description}</div>
      </div>
      <Switch
        checked={viewModel.switcher.checked}
        onCheckedChange={viewModel.switcher.onCheckedChange}
      />
    </div>
  );
};
