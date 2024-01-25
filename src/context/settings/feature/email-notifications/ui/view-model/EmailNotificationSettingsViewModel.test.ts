import { SaveOrDiscardViewState } from '@/context/settings/feature/email-notifications/ui/view-model/SaveOrDiscardViewState';
import { emailNotificationSettings } from '../../domian/entity/EmailNotificationSettings';
import { emailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { EmailNotificationSettingsViewModel } from './EmailNotificationSettingsViewModel';
import { SettingSwitchViewState } from './SettingSwitchViewState';
import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';

describe('EmailNotificationSettingsViewModel (Модель представления настроек уведомлений по почте)', () => {
  describe('Если данные загружаются', () => {
    const viewModel = new EmailNotificationSettingsViewModel(
      emailNotificationSettingsState({
        status: 'loading',
        originalSettings: emailNotificationSettings(),
        draftSettings: emailNotificationSettings(),
      })
    );

    test('Пользователь видит скелетон', () => {
      viewModel.settings.map((setting) =>
        expect(setting).toBeInstanceOf(SkeletonViewState)
      );
    });

    test('Кнопки сохранения и отмены скрыты', () => {
      expect(viewModel.saveOrDiscard).toBeUndefined();
    });
  });

  describe('Если данные загружены', () => {
    const viewModel = new EmailNotificationSettingsViewModel(
      emailNotificationSettingsState({
        status: 'idle',
        originalSettings: emailNotificationSettings(),
        draftSettings: emailNotificationSettings(),
      })
    );

    test('Пользователь видит список настроек', () => {
      viewModel.settings.map((setting) =>
        expect(setting).toBeInstanceOf(SettingSwitchViewState)
      );
    });
  });

  describe.skip('Если данные отправляются', () => {
    test('Управление настройками заблокировано', () => {});

    test('На кнопке "Сохранить" индикатор загрузки', () => {});
  });

  describe('Кнопки сохранения и отмены', () => {
    test('Если пользователь не вносил изменения, кнопки скрыты', () => {
      const viewModel = new EmailNotificationSettingsViewModel(
        emailNotificationSettingsState({
          originalSettings: emailNotificationSettings(),
          draftSettings: emailNotificationSettings(),
        })
      );

      expect(viewModel.saveOrDiscard).toBeUndefined();
    });

    test('При внесении пользователем изменений кнопки показываются', () => {
      const viewModel = new EmailNotificationSettingsViewModel(
        emailNotificationSettingsState({
          originalSettings: emailNotificationSettings({
            isEnabledMarketingEmails: true,
          }),
          draftSettings: emailNotificationSettings({
            isEnabledMarketingEmails: false,
          }),
        })
      );

      expect(viewModel.saveOrDiscard).toBeInstanceOf(SaveOrDiscardViewState);
    });
  });
});
