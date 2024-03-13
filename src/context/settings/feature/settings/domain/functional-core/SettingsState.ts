import { Settings, settings } from "../entity/Settings";

/**
 * В каких состояниях может находится система
 */
export interface SettingsState {
  status: 'loading' | 'idle' | 'pending';
  original: Settings;
  draft: Settings;
}

export const settingsState = (
  data: Partial<SettingsState> = {}
): SettingsState => ({
  status: 'loading',
  original: settings(),
  draft: settings(),
  ...data,
});
