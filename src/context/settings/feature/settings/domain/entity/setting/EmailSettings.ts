import { Setting } from "./Setting";

const MarketingEmails: Setting = {
    key: 'marketingEmails',
    name: 'Marketing emails',
    description: 'Receive emails about new products, features, and more.',
} as const;

const SecurityEmails: Setting = {
    key: 'securityEmails',
    name: 'Security emails',
    description: 'Receive emails about your account security.',
} as const;

export const EmailSettingsList = [MarketingEmails, SecurityEmails];
