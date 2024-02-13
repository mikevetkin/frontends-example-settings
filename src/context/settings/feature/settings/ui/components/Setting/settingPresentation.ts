import { SettingsKey } from '../../../domain/entity/SettingsKey';
import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { SettingViewState } from './SettingViewState';
import { settingControlPresentation } from '../SettingControl/SettingControlPresentation';
import { mapSettingTitle } from '../../../domain/mapper/mapSettingTitle';
import { mapSettingDescription } from '../../../domain/mapper/mapSettingDescription';

export const settingPresentation = (
  state: SettingsState,
  section: SettingsSectionKey,
  setting: SettingsKey
): SettingViewState => {
  return new SettingViewState({
    key: setting,
    title: mapSettingTitle[section][setting],
    description: mapSettingDescription[section][setting],
    control: settingControlPresentation(state, section, setting),
  });
};
