import { InputViewState } from '@/core/view-state/InputViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { EmailSettingsKey } from '@/context/settings/feature/email-notifications/domian/entity/EmailSettingsKey';
import { PersonalSettingsKey } from '@/context/settings/feature/personal/domain/entity/PersonalSettingsKey';

export function settingControlPresentation(
  state: SettingsState,
  key: EmailSettingsKey | PersonalSettingsKey
): SwitcherViewState | InputViewState {
  const { status, draft } = state;
  const value = draft[key];

  switch (typeof value) {
    case 'boolean':
      return new SwitcherViewState({
        checked: draft[key] as boolean,
        disabled: status === 'pending',
      });
    case 'string':
      return new InputViewState({
        value: draft[key] as string,
        disabled: status === 'pending',
      });
  }
}
