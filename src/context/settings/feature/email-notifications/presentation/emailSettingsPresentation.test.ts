import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { emailSettings } from '../domian/entity/EmailSettings';
import { emailSettingsState } from '../domian/functional-core/EmailSettingsState';
import { emailSettingsPresentation } from './emailSettingsPresentation';
import { SettingViewState } from '../ui/components/SettingViewState';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';

describe('emailNotificationSettingsPresentation (Презентейшн настроек уведомлений по почте)', () => {
  describe('Настройки', () => {
    describe('Если данные загружаются', () => {
      const viewState = emailSettingsPresentation(
        emailSettingsState({
          status: 'loading',
          originalSettings: emailSettings(),
          draftSettings: emailSettings(),
        })
      );

      test('Пользователь видит скелетон', () => {
        viewState.settings.map((setting) =>
          expect(setting).toBeInstanceOf(SkeletonViewState)
        );
      });
    });

    describe('Если данные загружены', () => {
      const viewState = emailSettingsPresentation(
        emailSettingsState({
          status: 'idle',
          originalSettings: emailSettings(),
          draftSettings: emailSettings(),
        })
      );

      test('Пользователь видит список настроек', () => {
        viewState.settings.map((setting) =>
          expect(setting).toBeInstanceOf(SettingViewState)
        );
      });
    });

    describe('Если данные отправляются', () => {
      const viewState = emailSettingsPresentation(
        emailSettingsState({
          status: 'pending',
          originalSettings: emailSettings(),
          draftSettings: emailSettings(),
        })
      );

      test('Управление настройками заблокировано', () => {
        viewState.settings.forEach((setting) =>
          expect((setting as SettingViewState).control.disabled).toBeTruthy()
        );
      });
    });
  });

  describe('Кнопки сохранения и отмены', () => {
    test('Если пользователь не вносил изменения, кнопки скрыты', () => {
      const viewState = emailSettingsPresentation(
        emailSettingsState({
          originalSettings: emailSettings(),
          draftSettings: emailSettings(),
        })
      );

      expect(viewState.saveOrDiscard).toBeUndefined();
    });

    test('При внесении пользователем изменений кнопки показываются', () => {
      const viewState = emailSettingsPresentation(
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

      expect(viewState.saveOrDiscard).toBeInstanceOf(SaveOrDiscardViewState);
    });

    describe('Если данные отправляются', () => {
      const viewState = emailSettingsPresentation(
        emailSettingsState({
          status: 'pending',
          originalSettings: emailSettings(),
          draftSettings: emailSettings({
            securityEmails: true,
          }),
        })
      );

      test('На кнопке "Сохранить" индикатор загрузки', () => {
        expect(viewState.saveOrDiscard?.save.icon).toBe('pending');
      });

      test('Кнопки заблокированы', () => {
        expect(viewState.saveOrDiscard?.save.disabled).toBe(true);
        expect(viewState.saveOrDiscard?.discard.disabled).toBe(true);
      });
    });
  });
});
