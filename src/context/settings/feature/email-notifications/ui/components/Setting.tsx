import { Switch } from '@/components/ui/switch';
import { SettingViewState } from './SettingViewState';

export interface SettingProps {
  viewState: SettingViewState;
  onCheckedChange: () => void;
}

export const Setting: React.FC<SettingProps> = ({
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
        checked={viewState.control.checked}
        onCheckedChange={onCheckedChange}
        disabled={viewState.control.disabled}
      />
    </div>
  );
};
