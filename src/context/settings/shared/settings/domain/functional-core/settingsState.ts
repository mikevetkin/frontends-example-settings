import { AllSettings, allSettings } from '../entity/AllSettings';

// FIXME: Мне кажется надо делать абстрактную настройку Ключ значение и передавать их типы через дженерик

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
