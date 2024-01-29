import { Switch } from '@/components/ui/switch';
import { SettingViewState } from './SettingViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { InputViewState } from '@/core/view-state/InputViewState';
import { Input } from '@/components/ui/input';

export interface SettingProps {
  viewState: SettingViewState;
  onChange: () => void;
}

export const Setting: React.FC<SettingProps> = ({ viewState, onChange }) => {
  const renderControl = () => {
    switch (viewState.control.constructor) {
      case SwitcherViewState:
        return (
          <Switch
            checked={(viewState.control as SwitcherViewState).checked}
            onCheckedChange={onChange}
            disabled={viewState.control.disabled}
          />
        );
      case InputViewState:
        return (
          <Input
            className="w-40"
            value={(viewState.control as InputViewState).value}
            disabled={viewState.control.disabled}
            onInput={onChange}
          />
        );
    }
  };

  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <div className="space-y-0.5">
        <div className="text-left">{viewState.title}</div>
        <div>{viewState.description}</div>
      </div>
      {renderControl()}
    </div>
  );
};
