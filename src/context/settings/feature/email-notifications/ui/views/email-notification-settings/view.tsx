import { SaveOrDiscard } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscard';
import { SettingSwitch } from '../../components/SettingSwitch';
import { SettingSwitchViewState } from '../../view-model/SettingSwitchViewState';
import { Skeleton } from '@/components/ui/skeleton';
import { useViewController } from './useViewController';

// ViewModel = EmailSettingsViewModel | ErrorViewModel | SkeletonViewModel;

export const EmailNotificationSettings = () => {
  const { viewModel, dispatch } = useViewController();

  return (
    <section>
      <h3 className="mb-4 text-left text-lg font-medium">
        Email Notifications
      </h3>
      <div className="space-y-4">
        {viewModel.settings.map((setting) =>
          setting instanceof SettingSwitchViewState ? (
            <SettingSwitch viewModel={setting} dispatch={dispatch} />
          ) : (
            <Skeleton className="h-[76px] w-full" />
          )
        )}
        {viewModel.saveOrDiscard && (
          <SaveOrDiscard viewModel={viewModel.saveOrDiscard} />
        )}
      </div>
    </section>
  );
};
