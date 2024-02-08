import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { InputViewState } from '@/core/view-state/InputViewState';
import { settingControlPresentation } from './SettingControlPresentation';
import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { settingsState } from '../../../domain/functional-core/SettingsState';
import { EmailSettingsKey } from '@/context/settings/feature/settings/domain/entity/email-notifications/EmailSettingsKey';

test('Булевые настройки управляются свитчером', () => {
  const viewState = settingControlPresentation(
    settingsState(),
    SettingsSectionKey.EmailSettings,
    EmailSettingsKey.MarketingEmails
  );

  expect(viewState).toBeInstanceOf(SwitcherViewState);
});

test('Строковые настройки управляются инпутом', () => {
  const viewState = settingControlPresentation(
    settingsState(),
    SettingsSectionKey.EmailSettings,
    EmailSettingsKey.YourEmail
  );

  expect(viewState).toBeInstanceOf(InputViewState);
});
