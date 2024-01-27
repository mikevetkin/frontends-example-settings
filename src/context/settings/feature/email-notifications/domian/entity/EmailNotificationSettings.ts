import { EmailSettingsKey } from './EmailSettingsKey';
// Ребята из сириуса сделали в этом месте неплохо. Нужно взять их типы
// Скорее всего там что-то типа { key: string, type: boolean }
// На основе которого делается контролы либо булевые, либо строковые
export type EmailNotificationSettings = Record<EmailSettingsKey, boolean>;

export const emailNotificationSettings = (
  data: Partial<EmailNotificationSettings> = {}
): EmailNotificationSettings => ({
  marketingEmails: false,
  securityEmails: false,
  ...data,
});
