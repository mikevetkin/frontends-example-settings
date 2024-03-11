import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { SettingViewState } from './SettingViewState';
import { settingControlPresentation } from '../SettingControl/SettingControlPresentation';
import { SettingItem } from '../../../domain/entity/Settings';

export const settingPresentation = (
  state: SettingsState,
  setting: SettingItem
): SettingViewState => {
  return new SettingViewState({
    key: setting,
    title: setting.name,
    description: setting.description,
    control: settingControlPresentation(state),
  });
};
