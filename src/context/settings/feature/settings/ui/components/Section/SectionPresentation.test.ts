import { settings } from '../../../domain/entity/Settings';
import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { emailSettings } from '../../../domain/entity/email-notifications/EmailSettings';
import { settingsState } from '../../../domain/functional-core/SettingsState';
import { SaveOrDiscardViewState } from '../SaveOrDiscard/SaveOrDiscardViewState';
import { sectionPresentation } from './sectionPresentation';

describe('Кнопки сохранения и сброса изменений', () => {
  test('Скрыты по умолчанию', () => {
    const viewState = sectionPresentation(
      settingsState(),
      SettingsSectionKey.EmailSettings
    );

    expect(viewState.actions).toBe(undefined);
  });

  test('Повяляются, если в черновик внесли изменения', () => {
    const viewState = sectionPresentation(
      settingsState({
        original: settings({
          emailSettings: emailSettings({
            marketingEmails: true,
          }),
        }),
        draft: settings({
          emailSettings: emailSettings({
            marketingEmails: false,
          }),
        }),
      }),
      SettingsSectionKey.EmailSettings
    );

    expect(viewState.actions).toBeInstanceOf(SaveOrDiscardViewState);
  });
});
