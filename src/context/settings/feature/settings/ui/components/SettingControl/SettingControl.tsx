import { InputViewState } from '@/core/view-state/InputViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { Switch } from '@/components/ui/switch';
import { SettingsValue } from '../../../domain/entity/Settings';

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
          checked={(viewState as SwitcherViewState).value}
          onCheckedChange={onChange}
          disabled={viewState.disabled}
        />
      );
    // case InputViewState:
    //   return (
    //     <Input
    //       className="w-40"
    //       value={(viewState as InputViewState).value}
    //       disabled={viewState.disabled}
    //       onInput={(event) => onChange(event.currentTarget.value)}
    //     />
    //   );
    // default:
    //   console.log('asdfasdfasdfasdf :>> ');
  }
};
