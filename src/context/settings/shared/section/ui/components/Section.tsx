import { SectionViewState } from '@/context/settings/shared/section/ui/components/SectionViewState';
import { Setting } from '../../../setting/ui/components/Setting';
import { EmailSettingsKey } from '@/context/settings/feature/email-notifications/domian/entity/EmailSettingsKey';
import { PersonalSettingsKey } from '@/context/settings/feature/personal/domain/entity/PersonalSettingsKey';
import { SettingsSectionKey } from '@/context/settings/feature/settings/domain/entity/SettingsSectionKey';

interface SectionProps {
  viewState: SectionViewState;
  onChangeSetting: (
    sectionKey: SettingsSectionKey,
    key: EmailSettingsKey | PersonalSettingsKey, // FIXME: Тип обобщить
    value: boolean | string
  ) => void;
}

export const Section: React.FC<SectionProps> = ({
  viewState,
  onChangeSetting,
}) => {
  return (
    <section>
      <h3 className="mb-4 text-left text-lg font-medium">
        {viewState.heading}
      </h3>
      <div className="flex flex-col gap-4">
        {viewState.list.map((setting) => (
          <Setting
            viewState={setting}
            onChange={(value) =>
              onChangeSetting(setting.sectionKey, setting.key, value)
            }
          />
        ))}
      </div>
    </section>
  );
};
