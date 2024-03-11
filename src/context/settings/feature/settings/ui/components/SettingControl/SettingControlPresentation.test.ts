import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { settingControlPresentation } from './SettingControlPresentation';
import { settingsState } from '../../../domain/functional-core/SettingsState';
import { settings } from '../../../domain/entity/Settings';

test('Пользователь видит и переключает черновик настройки', () => {
  const viewState = settingControlPresentation(
    settingsState({
      draft: settings({
        marketingEmails: true,
      }),
    }),
    'marketingEmails'
  );

  expect(viewState.value).toBe(true);
});

test('Булевые настройки управляются свитчером', () => {
  const viewState = settingControlPresentation(
    settingsState(),
    'marketingEmails'
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
    'marketingEmails'
  );

  test('Контролы блокируются', () => {
    expect(viewState.disabled).toBe(true);
  });
});
