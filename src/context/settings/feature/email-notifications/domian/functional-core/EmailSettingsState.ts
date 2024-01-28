import { EmailSettings, emailSettings } from '../entity/EmailSettings';

export interface EmailSettingsState {
  status: 'loading' | 'idle' | 'pending';
  originalSettings: EmailSettings;
  draftSettings: EmailSettings;
}

export const emailSettingsState = (
  data: Partial<EmailSettingsState> = {}
): EmailSettingsState => ({
  status: 'loading',
  originalSettings: emailSettings(),
  draftSettings: emailSettings(),
  ...data,
});
