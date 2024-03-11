import { emailSettings } from '../entity/email-notifications/EmailSettings';
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
            key: 'marketingEmails',
            value: true,
          }
        );

        expect(
          state.draft.marketingEmails
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
            key: 'marketingEmails',
            value: false,
          }
        );

        expect(
          state.draft.marketingEmails
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
            key: 'securityEmails',
            value: true,
          }
        );

        expect(
          state.draft.securityEmails
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
            key: 'securityEmails',
            value: false,
          }
        );

        expect(
          state.draft.securityEmails
        ).toBe(false);
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
      expect(state.draft.securityEmails).toBe(
        false
      );
    });
  });

  describe('ReceiveSave (Сохранение текущих настроек)', () => {
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
      { type: 'ReceiveSaveEvent' }
    );

    test('Записывает настройки черновика как оригинальные', () => {
      expect(
        state.original.securityEmails
      ).toBe(true);
    });
  });

  describe('SaveEvent', () => {
    const state = settingsReducer(settingsState(), { type: 'SaveEvent' });

    test('Переводит систему в состояние отправки данных', () => {
      expect(state.status).toBe('pending');
    });
  });

  describe('ReceiveSettingsEvent (Получение настроек email уведомлений)', () => {
    const state = settingsReducer(settingsState(), {
      type: 'ReceiveSettingsEvent',
      data: settings(),
    });

    test('Переводит систему в состояние простоя', () => {
      expect(state.status).toBe('idle');
    });
  });
});
