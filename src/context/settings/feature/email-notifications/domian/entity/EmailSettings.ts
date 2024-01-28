import { EmailSettingsKey } from './EmailSettingsKey';
// Ребята из сириуса сделали в этом месте неплохо. Нужно взять их типы
// Скорее всего там что-то типа { key: string, type: boolean }
// На основе которого делается контролы либо булевые, либо строковые
export type EmailSettings = Record<EmailSettingsKey, boolean>;

export const emailSettings = (
  data: Partial<EmailSettings> = {}
): EmailSettings => ({
  marketingEmails: false,
  securityEmails: false,
  newFeatureEmails: false,
  ...data,
});
