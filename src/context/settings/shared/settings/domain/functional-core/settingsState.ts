import { AllSettings, allSettings } from '../entity/AllSettings';

export interface SettingsState {
  // Наверное лучше сделать композицией, чем реализацией интерфейса
  status: 'loading' | 'idle' | 'pending';
  originalSettings: AllSettings;
  draftSettings: AllSettings;
}

export const settingsState = (
  data: Partial<SettingsState> = {}
): SettingsState => ({
  status: 'loading',
  originalSettings: allSettings(),
  draftSettings: allSettings(),
  ...data,
});
