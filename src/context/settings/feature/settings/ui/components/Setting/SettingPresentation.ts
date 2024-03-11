import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { SettingViewState } from './SettingViewState';
import { settingControlPresentation } from '../SettingControl/SettingControlPresentation';
import { Setting } from '../../../domain/entity/setting/Setting';

export const settingPresentation = (
  state: SettingsState,
  setting: Setting
): SettingViewState => {
  return new SettingViewState({
    key: setting.key,
    title: setting.name,
    description: setting.description,
    control: settingControlPresentation(state, setting.key),
  });
};
