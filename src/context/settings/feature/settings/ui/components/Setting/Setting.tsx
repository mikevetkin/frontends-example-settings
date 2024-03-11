import { SettingViewState } from './SettingViewState';
import { SettingControl } from '../SettingControl/SettingControl';
import { SettingsValue } from '../../../domain/entity/Settings';

export interface SettingProps {
  viewState: SettingViewState;
  onChange: (value: SettingsValue) => void;
}

export const Setting: React.FC<SettingProps> = ({ viewState, onChange }) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <div className="space-y-0.5">
        <div className="text-left">{viewState.title}</div>
        <div className="text-left">{viewState.description}</div>
      </div>
      <SettingControl viewState={viewState.control} onChange={onChange} />
    </div>
  );
};
