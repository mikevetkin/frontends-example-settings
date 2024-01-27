import { Switch } from '@/components/ui/switch';
import { SettingSwitchViewState } from './SettingSwitchViewState';

export interface SettingSwitchProps {
  viewState: SettingSwitchViewState;
  onCheckedChange: () => void;
}

export const SettingSwitch: React.FC<SettingSwitchProps> = ({
  viewState,
  onCheckedChange,
}) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <div className="space-y-0.5">
        <div className="text-left">{viewState.title}</div>
        <div>{viewState.description}</div>
      </div>
      <Switch
        checked={viewState.switcher.checked}
        onCheckedChange={onCheckedChange}
        disabled={viewState.switcher.disabled}
      />
    </div>
  );
};
