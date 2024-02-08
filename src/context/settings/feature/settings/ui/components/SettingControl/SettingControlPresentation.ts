import { InputViewState } from '@/core/view-state/InputViewState';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { EmailSettingsKey } from '@/context/settings/feature/settings/domain/entity/email-notifications/EmailSettingsKey';
import { PersonalSettingsKey } from '@/context/settings/feature/settings/domain/entity/personal/PersonalSettingsKey';
import { SettingsSectionKey } from '@/context/settings/feature/settings/domain/entity/SettingsSectionKey';
import { SettingsKey } from '../../../domain/entity/SettingsKey';
import { SettingsValue } from '../../../domain/entity/SettingsValue';

export function settingControlPresentation(
  state: SettingsState,
  sectionKey: SettingsSectionKey,
  key: SettingsKey
): SwitcherViewState | InputViewState {
  const { status, draft } = state;

  const mapValue: Record<SettingsSectionKey, SettingsValue> = {
    [SettingsSectionKey.EmailSettings]:
      draft.emailSettings[key as EmailSettingsKey],
    [SettingsSectionKey.PersonalSettings]:
      draft.personalSettings[key as PersonalSettingsKey],
  };

  const value = mapValue[sectionKey];

  switch (typeof value) {
    case 'boolean':
      return new SwitcherViewState({
        checked: value,
        disabled: status === 'pending',
      });
    case 'string':
      return new InputViewState({
        value: value,
        disabled: status === 'pending',
      });
  }
}
