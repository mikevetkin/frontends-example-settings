import { EmailSettings, emailSettings } from '../entity/EmailSettings';

export interface EmailNotificationSettingsState {
  status: 'loading' | 'idle' | 'pending';
  originalSettings: EmailSettings;
  draftSettings: EmailSettings;
}

export const emailNotificationSettingsState = (
  data: Partial<EmailNotificationSettingsState> = {}
): EmailNotificationSettingsState => ({
  status: 'loading',
  originalSettings: emailSettings(),
  draftSettings: emailSettings(),
  ...data,
});
