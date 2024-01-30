import { emailSettings } from '../entity/EmailSettings';
import { EmailSettingsKey } from '../entity/EmailSettingsKey';
import { emailSettingsReducer } from './EmailSettingsReducer';
import { emailSettingsState } from './EmailSettingsState';

describe('Способы использования настроек уведомлений', () => {
  describe('ChangeEmailSettingEvent (Изменение настроек)', () => {
    test('Включает маркетинговые уведомления', () => {
      const state = emailSettingsReducer(
        emailSettingsState({
          draftSettings: emailSettings({
            marketingEmails: false,
          }),
        }),
        {
          type: 'ChangeEmailSettingEvent',
          key: EmailSettingsKey.MarketingEmails,
          value: true,
        }
      );

      expect(state.draftSettings.marketingEmails).toBe(true);
    });

    test('Отключает маркетинговые уведомления', () => {
      const state = emailSettingsReducer(
        emailSettingsState({
          draftSettings: emailSettings({
            marketingEmails: true,
          }),
        }),
        {
          type: 'ChangeEmailSettingEvent',
          key: EmailSettingsKey.MarketingEmails,
          value: false,
        }
      );

      expect(state.draftSettings.marketingEmails).toBe(false);
    });

    test('Включает уведомления безопасности', () => {
      const state = emailSettingsReducer(
        emailSettingsState({
          draftSettings: emailSettings({
            securityEmails: false,
          }),
        }),
        {
          type: 'ChangeEmailSettingEvent',
          key: EmailSettingsKey.SecurityEmails,
          value: true,
        }
      );

      expect(state.draftSettings.securityEmails).toBe(true);
    });

    test('Отключает уведомления безопасности', () => {
      const state = emailSettingsReducer(
        emailSettingsState({
          draftSettings: emailSettings({
            securityEmails: true,
          }),
        }),
        {
          type: 'ChangeEmailSettingEvent',
          key: EmailSettingsKey.SecurityEmails,
          value: false,
        }
      );

      expect(state.draftSettings.securityEmails).toBe(false);
    });

    test('Выставляет email для получения уведомлений', () => {
      const state = emailSettingsReducer(
        emailSettingsState({
          draftSettings: emailSettings({
            yourEmail: '',
          }),
        }),
        {
          type: 'ChangeEmailSettingEvent',
          key: EmailSettingsKey.YourEmail,
          value: 'test@email.com',
        }
      );

      expect(state.draftSettings.yourEmail).toBe('test@email.com');
    });
  });

  describe('DiscardEvent (Сброс изменений в настройках)', () => {
    const state = emailSettingsReducer(
      emailSettingsState({
        draftSettings: emailSettings({
          securityEmails: true,
        }),
        originalSettings: emailSettings({
          securityEmails: false,
        }),
      }),
      { type: 'DiscardEvent' }
    );

    test('Сбрасывает настройки черновика до оригинальных', () => {
      expect(state.draftSettings.securityEmails).toBe(false);
    });
  });

  describe('SaveEvent (Сохранение текущих настроек)', () => {
    const state = emailSettingsReducer(
      emailSettingsState({
        draftSettings: emailSettings({
          securityEmails: true,
        }),
        originalSettings: emailSettings({
          securityEmails: false,
        }),
      }),
      { type: 'SaveEvent' }
    );

    test('Записывает настройки черновика как оригинальные', () => {
      expect(state.originalSettings.securityEmails).toBe(true);
    });
  });

  describe.skip('ReceiveEmailSettingsEvent (Получение настроек email уведомлений)', () => {});
});
