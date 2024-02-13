import { InputViewState } from '@/core/view-state/InputViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { SettingsSectionKey } from '@/context/settings/feature/settings/domain/entity/SettingsSectionKey';
import { SettingsKey } from '../../../domain/entity/SettingsKey';

export function settingControlPresentation(
  state: SettingsState,
  sectionKey: SettingsSectionKey,
  key: SettingsKey
): SwitcherViewState | InputViewState {
  const { status, draft } = state;

  const value = draft[sectionKey][key];

  switch (typeof value) {
    case 'boolean':
      return new SwitcherViewState({
        value,
        disabled: status === 'pending',
      });
    case 'string':
      return new InputViewState({
        value,
        disabled: status === 'pending',
      });
  }
}
