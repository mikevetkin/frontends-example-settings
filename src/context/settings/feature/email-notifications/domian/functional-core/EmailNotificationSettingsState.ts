import {
  EmailNotificationSettings,
  emailNotificationSettings,
} from '../entity/EmailNotificationSettings';

export interface EmailNotificationSettingsState {
  status: 'loading' | 'idle' | 'pending';
  originalSettings: EmailNotificationSettings;
  draftSettings: EmailNotificationSettings;
}

export const emailNotificationSettingsState = (
  data: Partial<EmailNotificationSettingsState> = {}
): EmailNotificationSettingsState => ({
  status: 'loading',
  originalSettings: emailNotificationSettings(),
  draftSettings: emailNotificationSettings(),
  ...data,
});
