import { SaveOrDiscardViewModel } from '@/context/settings/shared/save-or-discard/ui/view-model/SaveOrDiscardViewModel';
import { emailNotificationSettings } from '../../domian/entity/EmailNotificationSettings';
import { emailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { EmailNotificationSettingsViewModel } from './EmailNotificationSettingsViewModel';
import { SettingSwitchViewModel } from './SettingSwitchViewModel';
import { SkeletonViewModel } from '@/core/view-model/SkeletonViewModel';

describe('EmailNotificationSettingsViewModel (Модель представления настроек уведомлений по почте)', () => {
  describe('Если данные загружаются', () => {
    const viewModel = new EmailNotificationSettingsViewModel(
      emailNotificationSettingsState({
        status: 'loading',
        originalSettings: emailNotificationSettings(),
        draftSettings: emailNotificationSettings(),
      }),
      () => null
    );

    test('Пользователь видит скелетон', () => {
      viewModel.settings.map((setting) =>
        expect(setting).toBeInstanceOf(SkeletonViewModel)
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
      }),
      () => null
    );

    test.skip('Пользователь видит список настроек', () => {
      viewModel.settings.map((setting) =>
        expect(setting).toBeInstanceOf(SettingSwitchViewModel)
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
        }),
        () => null
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
        }),
        () => null
      );

      expect(viewModel.saveOrDiscard).toBeInstanceOf(SaveOrDiscardViewModel);
    });
  });
});
