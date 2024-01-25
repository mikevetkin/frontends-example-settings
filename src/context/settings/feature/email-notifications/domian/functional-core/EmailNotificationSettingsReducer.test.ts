import { emailNotificationSettings } from '../entity/EmailNotificationSettings';
import { emailNotificationSettingsReducer } from './EmailNotificationSettingsReducer';
import { emailNotificationSettingsState } from './EmailNotificationSettingsState';

describe('EmailNotificationSettingsReducer (Способы использования настроек уведомлений)', () => {
  describe('ToggleEmailSettingsEvent (Переключатель настроек)', () => {
    test('Включает маркетинговые уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailNotificationSettings({
            settings: {
              'marketing-emails': false,
            },
          }),
        }),
        { type: 'ToggleEmailSettingsEvent', key: 'marketing-emails' }
      );

      expect(state.draftSettings.isEnabledMarketingEmails).toBe(true);
    });

    test('Отключает маркетинговые уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailNotificationSettings({
            isEnabledMarketingEmails: true,
          }),
        }),
        { type: 'ToggleEmailSettingsEvent', key: 'marketing-emails' }
      );

      expect(state.draftSettings.isEnabledMarketingEmails).toBe(false);
    });
  });

  describe('ToggleSecurityEmailsEvent (Переключатель активности уведомлений безопасности)', () => {
    test('Включает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailNotificationSettings({
            isEnabledSecurityEmails: false,
          }),
        }),
        { type: 'ToggleEmailSettingsEvent', key: 'security-emails' }
      );

      expect(state.draftSettings.isEnabledSecurityEmails).toBe(true);
    });

    test('Отключает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailNotificationSettings({
            isEnabledSecurityEmails: true,
          }),
        }),
        { type: 'ToggleEmailSettingsEvent', key: 'security-emails' }
      );

      expect(state.draftSettings.isEnabledSecurityEmails).toBe(false);
    });
  });

  describe('DiscardEvent (Сброс изменений в настройках)', () => {
    const state = emailNotificationSettingsReducer(
      emailNotificationSettingsState({
        draftSettings: emailNotificationSettings({
          isEnabledSecurityEmails: true,
        }),
        originalSettings: emailNotificationSettings({
          isEnabledSecurityEmails: false,
        }),
      }),
      { type: 'DiscardEvent' }
    );

    test('Сбрасывает настройки черновика до оригинальных', () => {
      expect(state.draftSettings.isEnabledSecurityEmails).toBe(false);
    });
  });

  describe('SaveEvent (Сохранение текущих настроек)', () => {
    const state = emailNotificationSettingsReducer(
      emailNotificationSettingsState({
        draftSettings: emailNotificationSettings({
          isEnabledSecurityEmails: true,
        }),
        originalSettings: emailNotificationSettings({
          isEnabledSecurityEmails: false,
        }),
      }),
      { type: 'SaveEvent' }
    );

    test('Записывает настройки черновика как оригинальные', () => {
      expect(state.originalSettings.isEnabledSecurityEmails).toBe(true);
    });
  });

  describe.skip('ReceiveEmailSettingsEvent (Получение настроек email уведомлений)', () => {});
});
