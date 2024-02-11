import { SectionViewState } from '@/context/settings/feature/settings/ui/components/Section/SectionViewState';
import { Setting } from '../Setting/Setting';
import { SettingsSectionKey } from '@/context/settings/feature/settings/domain/entity/SettingsSectionKey';
import { SettingsKey } from '../../../domain/entity/SettingsKey';
import { SettingsValue } from '../../../domain/entity/SettingsValue';
import { SaveOrDiscard } from '../SaveOrDiscard/SaveOrDiscard';

interface SectionProps {
  viewState: SectionViewState;
  onChangeSetting: (
    sectionKey: SettingsSectionKey,
    key: SettingsKey,
    value: SettingsValue
  ) => void;
  onSaveSectionSettings: (key: SettingsSectionKey) => void;
  onDiscardSectionSettings: (key: SettingsSectionKey) => void;
}

export const Section: React.FC<SectionProps> = ({
  viewState,
  onChangeSetting,
  onSaveSectionSettings,
  onDiscardSectionSettings,
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
              onChangeSetting(viewState.key, setting.key, value)
            }
            key={setting.key}
          />
        ))}
        {viewState.actions && (
          <SaveOrDiscard
            viewState={viewState.actions}
            onClickSave={() => onSaveSectionSettings(viewState.key)}
            onClickDiscard={() => onDiscardSectionSettings(viewState.key)}
          />
        )}
      </div>
    </section>
  );
};
