import { emailSettings } from '../../../email-notifications/domian/entity/EmailSettings';
import { EmailSettingsKey } from '../../../email-notifications/domian/entity/EmailSettingsKey';
import { settings } from '../entity/Settings';
import { SettingsSectionKey } from '../entity/SettingsSectionKey';
import { settingsReducer } from './SettingsReducer';
import { settingsState } from './SettingsState';

describe('События в настройках', () => {
  describe('ChangeSettingEvent (Изменение настроек)', () => {
    describe('EmailNotifications (Раздел с email-уведомлениями)', () => {
      test('Включает маркетинговые уведомления', () => {
        const state = settingsReducer(
          settingsState({
            draft: settings({
              [SettingsSectionKey.EmailSettings]: emailSettings({
                securityEmails: false,
              }),
            }),
          }),
          {
            type: 'ChangeSettingEvent',
            sectionKey: SettingsSectionKey.EmailSettings,
            key: EmailSettingsKey.MarketingEmails,
            value: true,
          }
        );

        expect(
          state.draft[SettingsSectionKey.EmailSettings].marketingEmails
        ).toBe(true);
      });

      test('Отключает маркетинговые уведомления', () => {
        const state = settingsReducer(
          settingsState({
            draft: settings({
              [SettingsSectionKey.EmailSettings]: emailSettings({
                securityEmails: true,
              }),
            }),
          }),
          {
            type: 'ChangeSettingEvent',
            sectionKey: SettingsSectionKey.EmailSettings,
            key: EmailSettingsKey.MarketingEmails,
            value: false,
          }
        );

        expect(
          state.draft[SettingsSectionKey.EmailSettings].marketingEmails
        ).toBe(false);
      });

      test('Включает уведомления безопасности', () => {
        const state = settingsReducer(
          settingsState({
            draft: settings({
              [SettingsSectionKey.EmailSettings]: emailSettings({
                securityEmails: false,
              }),
            }),
          }),
          {
            type: 'ChangeSettingEvent',
            sectionKey: SettingsSectionKey.EmailSettings,
            key: EmailSettingsKey.SecurityEmails,
            value: true,
          }
        );

        expect(
          state.draft[SettingsSectionKey.EmailSettings].securityEmails
        ).toBe(true);
      });

      test('Отключает уведомления безопасности', () => {
        const state = settingsReducer(
          settingsState({
            draft: settings({
              [SettingsSectionKey.EmailSettings]: emailSettings({
                securityEmails: true,
              }),
            }),
          }),
          {
            type: 'ChangeSettingEvent',
            sectionKey: SettingsSectionKey.EmailSettings,
            key: EmailSettingsKey.SecurityEmails,
            value: false,
          }
        );

        expect(
          state.draft[SettingsSectionKey.EmailSettings].securityEmails
        ).toBe(false);
      });

      test('Выставляет email для получения уведомлений', () => {
        const state = settingsReducer(
          settingsState({
            draft: settings({
              [SettingsSectionKey.EmailSettings]: emailSettings({
                yourEmail: '',
              }),
            }),
          }),
          {
            type: 'ChangeSettingEvent',
            sectionKey: SettingsSectionKey.EmailSettings,
            key: EmailSettingsKey.YourEmail,
            value: 'test@email.com',
          }
        );

        expect(state.draft[SettingsSectionKey.EmailSettings].yourEmail).toBe(
          'test@email.com'
        );
      });
    });
  });

  describe('DiscardEvent (Сброс изменений в настройках)', () => {
    const state = settingsReducer(
      settingsState({
        original: settings({
          [SettingsSectionKey.EmailSettings]: emailSettings({
            securityEmails: false,
          }),
        }),
        draft: settings({
          [SettingsSectionKey.EmailSettings]: emailSettings({
            securityEmails: true,
          }),
        }),
      }),
      { type: 'DiscardEvent' }
    );

    test('Сбрасывает настройки черновика до оригинальных', () => {
      expect(state.draft[SettingsSectionKey.EmailSettings].securityEmails).toBe(
        false
      );
    });
  });

  describe('SaveEvent (Сохранение текущих настроек)', () => {
    const state = settingsReducer(
      settingsState({
        original: settings({
          [SettingsSectionKey.EmailSettings]: emailSettings({
            securityEmails: false,
          }),
        }),
        draft: settings({
          [SettingsSectionKey.EmailSettings]: emailSettings({
            securityEmails: true,
          }),
        }),
      }),
      { type: 'SaveEvent' }
    );

    test('Записывает настройки черновика как оригинальные', () => {
      expect(
        state.original[SettingsSectionKey.EmailSettings].securityEmails
      ).toBe(true);
    });
  });

  describe.skip('ReceiveEmailSettingsEvent (Получение настроек email уведомлений)', () => {});
});
