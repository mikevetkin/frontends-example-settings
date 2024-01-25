import { SaveOrDiscard } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscard';
import { SettingSwitch } from '../../components/SettingSwitch';
import { SettingSwitchViewState } from '../../view-model/SettingSwitchViewState';
import { Skeleton } from '@/components/ui/skeleton';
import { useViewController } from './useViewController';

// ViewState = EmailSettingsViewState | ErrorViewState | SkeletonViewState;

export const EmailNotificationSettings = () => {
  const { viewModel, onCheckedChange, onClickSave, onClickDiscard, dispatch } =
    useViewController();

  return (
    <section>
      <h3 className="mb-4 text-left text-lg font-medium">
        Email Notifications
      </h3>
      <div className="space-y-4">
        {viewModel.settings.map((setting) =>
          setting instanceof SettingSwitchViewState ? (
            <SettingSwitch
              viewState={setting}
              onCheckedChange={() => onCheckedChange(setting.key)}
            />
          ) : (
            <Skeleton className="h-[76px] w-full" />
          )
        )}
        {viewModel.saveOrDiscard && (
          <SaveOrDiscard
            viewModel={viewModel.saveOrDiscard}
            onClickSave={onClickSave}
            onClickDiscard={onClickDiscard}
          />
        )}
      </div>
    </section>
  );
};
