import { InputViewState } from '@/core/view-state/InputViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { EmailSettingsKey } from '@/context/settings/feature/email-notifications/domian/entity/EmailSettingsKey';
import { PersonalSettingsKey } from '@/context/settings/feature/personal/domain/entity/PersonalSettingsKey';
import { SettingsSectionKey } from '@/context/settings/feature/settings/domain/entity/SettingsSectionKey';

export function settingControlPresentation(
  state: SettingsState,
  sectionKey: SettingsSectionKey,
  key: EmailSettingsKey | PersonalSettingsKey
): SwitcherViewState | InputViewState {
  const { status, draft } = state;
  const value = draft[sectionKey][key];

  switch (typeof value) {
    case 'boolean':
      return new SwitcherViewState({
        checked: draft[sectionKey][key] as boolean,
        disabled: status === 'pending',
      });
    case 'string':
      return new InputViewState({
        value: draft[sectionKey][key] as string,
        disabled: status === 'pending',
      });
  }
}
