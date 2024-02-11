import { settings } from '../../domain/entity/Settings';
import { emailSettings } from '../../domain/entity/email-notifications/EmailSettings';
import { settingsState } from '../../domain/functional-core/SettingsState';
import { SaveOrDiscardViewState } from '../components/SaveOrDiscard/SaveOrDiscardViewState';
import { settingsPagePresentation } from './settingsPagePresentation';

// describe('Презентейшн страницы настроек', () => {
//   test('Пользователь видит настройки email уведомлений', () => {
//     const viewState = settingsPagePresentation(
//       settingsState({
//         status: 'idle',
//       })
//     );

//     expect(viewState.sections[0]).toBeInstanceOf(SectionViewState);
//   });
// });

describe('Кнопки сохранения и сброса изменений', () => {
  test('Скрыты по умолчанию', () => {
    const viewState = settingsPagePresentation(settingsState());

    expect(viewState.actions).toBe(undefined);
  });

  test('Повяляются, если в черновик внесли изменения', () => {
    const viewState = settingsPagePresentation(
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
      })
    );

    expect(viewState.actions).toBeInstanceOf(SaveOrDiscardViewState);
  });
});
