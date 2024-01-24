import { SaveOrDiscard } from '@/context/settings/shared/save-or-discard/ui/components/SaveOrDiscard';
import { useEmailNotificationSettings } from '../../store/useEmailNotificationSettings';
import { SettingSwitch } from '../components/SettingSwitch';
import { SettingSwitchViewModel } from '../view-model/SettingSwitchViewModel';
import { Skeleton } from '@/components/ui/skeleton';

export const EmailNotificationSettings = () => {
  const { viewModel } = useEmailNotificationSettings();

  return (
    <section>
      <h3 className="mb-4 text-left text-lg font-medium">
        Email Notifications
      </h3>
      <div className="space-y-4">
        {viewModel.settings.map((setting) =>
          setting instanceof SettingSwitchViewModel ? (
            <SettingSwitch viewModel={setting} />
          ) : (
            <Skeleton
              className={`w-[${setting.width}] h-[${setting.height}]`}
            />
          )
        )}
        {viewModel.saveOrDiscard && (
          <SaveOrDiscard viewModel={viewModel.saveOrDiscard} />
        )}
      </div>
    </section>
  );
};
