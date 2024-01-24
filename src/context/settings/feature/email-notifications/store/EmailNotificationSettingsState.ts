import {
  EmailNotificationSettings,
  emailNotificationSettings,
} from '../domian/entity/EmailNotificationSettings';

export interface EmailNotificationSettingsState {
  status: 'loading' | 'idle';
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
