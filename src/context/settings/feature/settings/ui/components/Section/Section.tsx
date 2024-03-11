import { SectionViewState } from '@/context/settings/feature/settings/ui/components/Section/SectionViewState';
import { Setting } from '../Setting/Setting';
import { SettingKey } from '../../../domain/entity/setting/SettingKey';
import { SettingsValue } from '../../../domain/entity/Settings';

interface SectionProps {
  viewState: SectionViewState;
  onChangeSetting: (
    key: SettingKey,
    value: SettingsValue
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
              onChangeSetting(setting.key, value)
            }
            key={setting.key}
          />
        ))}
      </div>
    </section>
  );
};
