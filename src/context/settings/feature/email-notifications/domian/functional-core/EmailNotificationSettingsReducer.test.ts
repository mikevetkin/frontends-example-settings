import { emailSettings } from '../entity/EmailSettings';
import { EmailSettingsKey } from '../entity/EmailSettingsKey';
import { emailNotificationSettingsReducer } from './EmailNotificationSettingsReducer';
import { emailNotificationSettingsState } from './EmailNotificationSettingsState';

describe('EmailNotificationSettingsReducer (Способы использования настроек уведомлений)', () => {
  describe('ToggleEmailSettingsEvent (Переключатель настроек)', () => {
    test('Включает маркетинговые уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailSettings({
            marketingEmails: false,
          }),
        }),
        {
          type: 'ToggleEmailSettingsEvent',
          key: EmailSettingsKey.MarketingEmails,
        }
      );

      expect(state.draftSettings.marketingEmails).toBe(true);
    });

    test('Отключает маркетинговые уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailSettings({
            marketingEmails: true,
          }),
        }),
        {
          type: 'ToggleEmailSettingsEvent',
          key: EmailSettingsKey.MarketingEmails,
        }
      );

      expect(state.draftSettings.marketingEmails).toBe(false);
    });

    test('Включает уведомления безопасности', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailSettings({
            securityEmails: false,
          }),
        }),
        {
          type: 'ToggleEmailSettingsEvent',
          key: EmailSettingsKey.SecurityEmails,
        }
      );

      expect(state.draftSettings.securityEmails).toBe(true);
    });

    test('Отключает уведомления безопасности', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailSettings({
            securityEmails: false,
          }),
        }),
        {
          type: 'ToggleEmailSettingsEvent',
          key: EmailSettingsKey.SecurityEmails,
        }
      );

      expect(state.draftSettings.securityEmails).toBe(true);
    });
  });

  describe('DiscardEvent (Сброс изменений в настройках)', () => {
    const state = emailNotificationSettingsReducer(
      emailNotificationSettingsState({
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
    const state = emailNotificationSettingsReducer(
      emailNotificationSettingsState({
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
