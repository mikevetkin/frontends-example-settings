import { InputViewState } from '@/core/view-state/InputViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '../../settings/domain/functional-core/settingsState';
import { AllSettingsKey } from '../../settings/domain/entity/AllSettingsKey';

export function settingControlPresentation(
  state: SettingsState,
  key: AllSettingsKey
): SwitcherViewState | InputViewState {
  const { status, draftSettings } = state;
  const value = draftSettings[key];

  switch (typeof value) {
    case 'boolean':
      return new SwitcherViewState({
        checked: draftSettings[key] as boolean,
        disabled: status === 'pending',
      });
    case 'string':
      return new InputViewState({
        value: draftSettings[key] as string,
        disabled: status === 'pending',
      });
  }
}
