import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { emailNotificationSettings } from '../domian/entity/EmailNotificationSettings';
import { emailNotificationSettingsState } from '../domian/functional-core/EmailNotificationSettingsState';
import { emailNotificationSettingsPresentation } from './emailNotificationSettingsPresentation';
import { SettingSwitchViewState } from '../ui/components/SettingSwitchViewState';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';

describe('emailNotificationSettingsPresentation (Презентейшн настроек уведомлений по почте)', () => {
  describe('Если данные загружаются', () => {
    const viewState = emailNotificationSettingsPresentation(
      emailNotificationSettingsState({
        status: 'loading',
        originalSettings: emailNotificationSettings(),
        draftSettings: emailNotificationSettings(),
      })
    );

    test('Пользователь видит скелетон', () => {
      viewState.settings.map((setting) =>
        expect(setting).toBeInstanceOf(SkeletonViewState)
      );
    });

    test('Кнопки сохранения и отмены скрыты', () => {
      expect(viewState.saveOrDiscard).toBeUndefined();
    });
  });

  describe('Если данные загружены', () => {
    const viewState = emailNotificationSettingsPresentation(
      emailNotificationSettingsState({
        status: 'idle',
        originalSettings: emailNotificationSettings(),
        draftSettings: emailNotificationSettings(),
      })
    );

    test('Пользователь видит список настроек', () => {
      viewState.settings.map((setting) =>
        expect(setting).toBeInstanceOf(SettingSwitchViewState)
      );
    });
  });

  describe('Если данные отправляются', () => {
    const viewState = emailNotificationSettingsPresentation(
      emailNotificationSettingsState({
        status: 'pending',
        originalSettings: emailNotificationSettings(),
        draftSettings: emailNotificationSettings(),
      })
    );

    test('Управление настройками заблокировано', () => {
      viewState.settings.forEach((setting) =>
        expect(
          (setting as SettingSwitchViewState).switcher.disabled
        ).toBeTruthy()
      );
    });

    test('На кнопке "Сохранить" индикатор загрузки', () => {});
  });

  describe('Кнопки сохранения и отмены', () => {
    test('Если пользователь не вносил изменения, кнопки скрыты', () => {
      const viewState = emailNotificationSettingsPresentation(
        emailNotificationSettingsState({
          originalSettings: emailNotificationSettings(),
          draftSettings: emailNotificationSettings(),
        })
      );

      expect(viewState.saveOrDiscard).toBeUndefined();
    });

    test('При внесении пользователем изменений кнопки показываются', () => {
      const viewState = emailNotificationSettingsPresentation(
        emailNotificationSettingsState({
          originalSettings: emailNotificationSettings({
            marketingEmails: true,
          }),
          draftSettings: emailNotificationSettings({
            marketingEmails: false,
          }),
        })
      );

      expect(viewState.saveOrDiscard).toBeInstanceOf(SaveOrDiscardViewState);
    });
  });
});
