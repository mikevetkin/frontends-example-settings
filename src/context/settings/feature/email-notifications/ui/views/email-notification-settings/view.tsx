import { SaveOrDiscard } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscard';
import { SettingSwitch } from '../../components/SettingSwitch';
import { SettingSwitchViewModel } from '../../view-model/SettingSwitchViewModel';
import { Skeleton } from '@/components/ui/skeleton';
import { useViewController } from './useViewController';

export const EmailNotificationSettings = () => {
  const { viewModel, dispatch } = useViewController();

  return (
    <section>
      <h3 className="mb-4 text-left text-lg font-medium">
        Email Notifications
      </h3>
      <div className="space-y-4">
        {viewModel.settings.map((setting) =>
          setting instanceof SettingSwitchViewModel ? (
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
