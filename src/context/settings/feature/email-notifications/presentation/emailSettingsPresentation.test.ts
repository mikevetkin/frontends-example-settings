import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { emailSettings } from '../domian/entity/EmailSettings';
import { emailSettingsState } from '../domian/functional-core/EmailSettingsState';
import { emailSettingsPresentation } from './emailSettingsPresentation';
import { SettingViewState } from '../../../shared/setting/ui/components/SettingViewState';
import { SettingsSectionViewState } from '../ui/components/SettingsSectionViewState';
import { EmailSettingsKey } from '../domian/entity/EmailSettingsKey';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { InputViewState } from '@/core/view-state/InputViewState';

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

    describe('Настройки', () => {
      const viewState = emailSettingsPresentation(
        emailSettingsState({
          status: 'idle',
          originalSettings: emailSettings(),
          draftSettings: emailSettings(),
        })
      );

      describe('Маркетинговые письма', () => {
        test('Управляются свитчером', () => {
          const marketingViewState = (
            viewState.settings as SettingsSectionViewState
          ).list.find(
            (setting) => setting.key === EmailSettingsKey.MarketingEmails
          ) as SettingViewState;

          expect(marketingViewState.control).toBeInstanceOf(SwitcherViewState);
        });
      });

      describe('Письма безопасности', () => {
        test('Управляются свитчером', () => {
          const marketingViewState = (
            viewState.settings as SettingsSectionViewState
          ).list.find(
            (setting) => setting.key === EmailSettingsKey.SecurityEmails
          ) as SettingViewState;

          expect(marketingViewState.control).toBeInstanceOf(SwitcherViewState);
        });
      });

      describe('Основной email', () => {
        test('Управляется инпутом', () => {
          const marketingViewState = (
            viewState.settings as SettingsSectionViewState
          ).list.find(
            (setting) => setting.key === EmailSettingsKey.YourEmail
          ) as SettingViewState;

          expect(marketingViewState.control).toBeInstanceOf(InputViewState);
        });
      });
    });
  });
});
