import { SettingKey } from "./setting/SettingKey";

export type Settings = Record<SettingKey, boolean>;

export const settings = (data: Partial<Settings> = {}): Settings => ({
    'fiscalization': false,
    'marketingEmails': false,
    'securityEmails': false,
    ...data,
});

export type SettingsValue = Settings[keyof Settings];