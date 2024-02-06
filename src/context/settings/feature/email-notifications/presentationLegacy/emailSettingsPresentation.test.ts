import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { emailSettings } from '../../settings/domain/entity/email-notifications/EmailSettings';
import { emailSettingsState } from '../domian/functional-core/EmailSettingsState';
import { emailSettingsPresentation } from './emailSettingsPresentation';
import { SettingViewState } from '../../settings/ui/components/Setting/SettingViewState';

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
        viewState.settings.list.map((setting) =>
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
        viewState.settings.list.map((setting) =>
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
        viewState.settings.list.forEach((setting) =>
          expect((setting as SettingViewState).control.disabled).toBeTruthy()
        );
      });
    });
  });
});
