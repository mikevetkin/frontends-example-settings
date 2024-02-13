import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { settings } from '../../domain/entity/Settings';
import { emailSettings } from '../../domain/entity/email-notifications/EmailSettings';
import { settingsState } from '../../domain/functional-core/SettingsState';
import { SaveOrDiscardViewState } from '../components/SaveOrDiscard/SaveOrDiscardViewState';
import { settingsPagePresentation } from './SettingsPagePresentation';
import { SectionViewState } from '../components/Section/SectionViewState';

describe('Разделы настроек', () => {
  describe('Email уведомления', () => {
    const viewState = settingsPagePresentation(
      settingsState({
        status: 'idle',
      })
    );

    const emailSettingsSection = viewState.sections[0] as SectionViewState;

    test('Пользователь видит заголовок', () => {
      expect(emailSettingsSection.heading).toBe('Email Notifications');
    });

    test('Названия настроек', () => {
      const titiles = emailSettingsSection.list.map((setting) => setting.title);

      expect(titiles).toEqual(['Marketing emails', 'Security emails']);
    });

    test('Описания настроек', () => {
      const descriptions = emailSettingsSection.list.map(
        (setting) => setting.description
      );

      expect(descriptions).toEqual([
        'Receive emails about new products, features, and more.',
        'Receive emails about your account security.',
      ]);
    });
  });

  describe('Если система в состоянии загрузки', () => {
    const viewState = settingsPagePresentation(
      settingsState({
        status: 'loading',
      })
    );
    test('Пользовать видит скелетон', () => {
      viewState.sections.forEach((section) =>
        expect(section).toBeInstanceOf(SkeletonListViewState)
      );
    });
  });

  describe('Если система в состоянии простоя', () => {
    const viewState = settingsPagePresentation(
      settingsState({
        status: 'idle',
      })
    );

    test('Пользователь видит разделы настроек', () => {
      viewState.sections.forEach((section) =>
        expect(section).toBeInstanceOf(SectionViewState)
      );
    });
  });
});

describe('Кнопки сохранения и сброса изменений', () => {
  test('Скрыты по умолчанию', () => {
    const viewState = settingsPagePresentation(settingsState());

    expect(viewState.actions).toBe(undefined);
  });

  test('Повяляются, если в черновик внесли изменения', () => {
    const viewState = settingsPagePresentation(
      settingsState({
        original: settings({
          emailSettings: emailSettings({
            marketingEmails: true,
          }),
        }),
        draft: settings({
          emailSettings: emailSettings({
            marketingEmails: false,
          }),
        }),
      })
    );

    expect(viewState.actions).toBeInstanceOf(SaveOrDiscardViewState);
  });
});
