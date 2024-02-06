import { emailSettings } from '@/context/settings/feature/settings/domain/entity/email-notifications/EmailSettings';
import { SaveOrDiscardViewState } from './SaveOrDiscardViewState';
import { settingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { saveOrDiscardPresenatation } from './saveOrDiscardPresentation';

describe('Кнопки сохранения и отмены', () => {
  test('Если пользователь не вносил изменения, кнопки скрыты', () => {
    const viewState = saveOrDiscardPresenatation(settingsState());

    expect(viewState).toBeUndefined();
  });

  test.skip('При внесении пользователем изменений кнопки показываются', () => {
    const viewState = saveOrDiscardPresenatation(
      emailSettingsState({
        status: 'idle',
        originalSettings: emailSettings({
          marketingEmails: true,
        }),
        draftSettings: emailSettings({
          marketingEmails: false,
        }),
      })
    );

    expect(viewState).toBeInstanceOf(SaveOrDiscardViewState);
  });

  describe.skip('Если данные отправляются', () => {
    const viewState = saveOrDiscardPresenatation(
      emailSettingsState({
        status: 'pending',
        originalSettings: emailSettings(),
        draftSettings: emailSettings({
          securityEmails: true,
        }),
      })
    );

    test('На кнопке "Сохранить" индикатор загрузки', () => {
      expect(viewState?.save.icon).toBe('pending');
    });

    test('Кнопки заблокированы', () => {
      expect(viewState?.save.disabled).toBe(true);
      expect(viewState?.discard.disabled).toBe(true);
    });
  });
});
