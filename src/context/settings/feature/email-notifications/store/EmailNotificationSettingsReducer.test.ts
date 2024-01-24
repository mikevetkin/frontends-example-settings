import { emailNotificationSettings } from '../domian/entity/EmailNotificationSettings';
import { emailNotificationSettingsReducer } from './EmailNotificationSettingsReducer';
import { emailNotificationSettingsState } from './EmailNotificationSettingsState';

describe('EmailNotificationSettingsReducer (Способы использования настроек уведомлений)', () => {
  describe('ToggleMarketingEmailsEvent (Переключатель активности маркетинговых уведомлений)', () => {
    test('Включает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailNotificationSettings({
            isEnabledMarketingEmails: false,
          }),
        }),
        { type: 'ToggleMarketingEmailsEvent' }
      );

      expect(state.draftSettings.isEnabledMarketingEmails).toBe(true);
    });

    test('Отключает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          draftSettings: emailNotificationSettings({
            isEnabledMarketingEmails: true,
          }),
        }),
        { type: 'ToggleMarketingEmailsEvent' }
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
        { type: 'ToggleSecurityEmailsEvent' }
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
        { type: 'ToggleSecurityEmailsEvent' }
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
