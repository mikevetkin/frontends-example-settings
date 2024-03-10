export const MarketingEmails = {
    key: 'marketingEmails',
    name: 'Marketing emails',
    description: 'Receive emails about new products, features, and more.',
} as const;

export const SecurityEmails = {
    key: 'marketingEmails',
    name: 'Security emails',
    description: 'Receive emails about your account security.',
} as const;

export const EmailSettings = [MarketingEmails, SecurityEmails];
