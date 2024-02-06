import { SettingsSectionViewState } from '../../email-notifications/ui/components/SettingsSectionViewState';
import { SettingsSectionKey } from '../domain/entity/SettingsSectionKey';
import { mapSettingsSectionHeading } from '../domain/mapper/mapSettingsSectionHeading';
import { SettingsPageViewState } from '../ui/pages/SettingsPageViewState';

export const settingsPagePresentation = () => {
  return new SettingsPageViewState({
    sections: (Object.keys(SettingsSectionKey) as SettingsSectionKey[]).map(
      (key) =>
        new SettingsSectionViewState({
          heading: mapSettingsSectionHeading[key],
        })
    ),
  });
};
