import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { AllSettingsKey } from '../../settings/domain/entity/AllSettingsKey';
import { settingsState } from '../../settings/domain/functional-core/settingsState';
import { settingControlPresentation } from './settingControlPresentation';
import { InputViewState } from '@/core/view-state/InputViewState';

test('Булевые настройки управляются свитчером', () => {
  const viewState = settingControlPresentation(
    settingsState(),
    AllSettingsKey.MarketingEmails
  );

  expect(viewState).toBeInstanceOf(SwitcherViewState);
});

test('Строковые настройки управляются инпутом', () => {
  const viewState = settingControlPresentation(
    settingsState(),
    AllSettingsKey.YourEmail
  );

  expect(viewState).toBeInstanceOf(InputViewState);
});
