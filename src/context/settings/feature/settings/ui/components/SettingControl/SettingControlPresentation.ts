import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { SettingKey } from '../../../domain/entity/setting/SettingKey';

export function settingControlPresentation(
  state: SettingsState,
  key: SettingKey
) {
  const { status, draft } = state;

  return new SwitcherViewState({
    value: draft[key],
    disabled: status === 'pending',
  })
}
