import { saveOrDiscardPresenatation } from './saveOrDiscardPresentation';
import { emailSettings } from '@/context/settings/feature/email-notifications/domian/entity/EmailSettings';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';
import { settingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';

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
