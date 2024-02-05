import { saveOrDiscardPresenatation } from './saveOrDiscardPresentation';
import { emailSettingsState } from '@/context/settings/feature/email-notifications/domian/functional-core/EmailSettingsState';
import { emailSettings } from '@/context/settings/feature/email-notifications/domian/entity/EmailSettings';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';

describe('Кнопки сохранения и отмены', () => {
  test('Если пользователь не вносил изменения, кнопки скрыты', () => {
    const viewState = saveOrDiscardPresenatation(
      emailSettingsState({
        originalSettings: emailSettings(),
        draftSettings: emailSettings(),
      })
    );

    expect(viewState).toBeUndefined();
  });

  test('При внесении пользователем изменений кнопки показываются', () => {
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

  describe('Если данные отправляются', () => {
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
