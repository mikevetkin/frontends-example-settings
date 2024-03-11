import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { SettingKey } from '../../../domain/entity/setting/SettingKey';

export function settingControlPresentation(
  state: SettingsState,
  key: SettingKey
) {
  const { status, draft } = state;

  const value = draft[key];

  switch (typeof value) {
    case 'boolean':
      return new SwitcherViewState({
        value,
        disabled: status === 'pending',
      });
    // case 'string':
    //   return new InputViewState({
    //     value,
    //     disabled: status === 'pending',
    //   });
  }
}
