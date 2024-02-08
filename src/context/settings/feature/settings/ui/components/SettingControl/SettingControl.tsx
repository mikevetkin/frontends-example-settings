import { InputViewState } from '@/core/view-state/InputViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsValue } from '../../../domain/entity/SettingsValue';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface SettingControlProps {
  viewState: SwitcherViewState | InputViewState;
  onChange: (value: SettingsValue) => void;
}

export const SettingControl: React.FC<SettingControlProps> = ({
  viewState,
  onChange,
}) => {
  switch (viewState.constructor) {
    case SwitcherViewState:
      return (
        <Switch
          checked={(viewState as SwitcherViewState).checked}
          onCheckedChange={onChange}
          disabled={viewState.disabled}
        />
      );
    case InputViewState:
      return (
        <Input
          className="w-40"
          value={(viewState as InputViewState).value}
          disabled={viewState.disabled}
          onInput={(event) => onChange(event.currentTarget.value)}
        />
      );
    default:
      console.log('asdfasdfasdfasdf :>> ');
  }
};
