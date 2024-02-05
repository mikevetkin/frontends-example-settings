import {
  PersonalSettings,
  personalSettings,
} from '../../../personal/domain/entity/PersonalSettings';

export interface PersonalSettingsState {
  status: 'loading' | 'idle' | 'pending';
  originalSettings: PersonalSettings;
  draftSettings: PersonalSettings;
}

export const personalSettingsState = (
  data: Partial<PersonalSettingsState> = {}
): PersonalSettingsState => ({
  status: 'loading',
  originalSettings: personalSettings(),
  draftSettings: personalSettings(),
  ...data,
});
