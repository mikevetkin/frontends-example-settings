import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { settingControlPresentation } from './SettingControlPresentation';
import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { settingsState } from '../../../domain/functional-core/SettingsState';
import { EmailSettingsKey } from '@/context/settings/feature/settings/domain/entity/email-notifications/EmailSettingsKey';
import { settings } from '../../../domain/entity/Settings';
import { emailSettings } from '../../../domain/entity/email-notifications/EmailSettings';

test('Пользователь видит и переключает черновик настройки', () => {
  const viewState = settingControlPresentation(
    settingsState({
      draft: settings({
        emailSettings: emailSettings({
          marketingEmails: true,
        }),
      }),
    }),
    SettingsSectionKey.EmailSettings,
    EmailSettingsKey.MarketingEmails
  );

  expect(viewState.value).toBe(true);
});

test('Булевые настройки управляются свитчером', () => {
  const viewState = settingControlPresentation(
    settingsState(),
    SettingsSectionKey.EmailSettings,
    EmailSettingsKey.MarketingEmails
  );

  expect(viewState).toBeInstanceOf(SwitcherViewState);
});

test.skip('Строковые настройки управляются инпутом', () => {
  // const viewState = settingControlPresentation(
  //   settingsState(),
  //   SettingsSectionKey.EmailSettings,
  //   EmailSettingsKey.YourEmail
  // );
  // expect(viewState).toBeInstanceOf(InputViewState);
});

describe('Если система отправляет данные', () => {
  const viewState = settingControlPresentation(
    settingsState({
      status: 'pending',
    }),
    SettingsSectionKey.EmailSettings,
    EmailSettingsKey.MarketingEmails
  );

  test('Контролы блокируются', () => {
    expect(viewState.disabled).toBe(true);
  });
});
