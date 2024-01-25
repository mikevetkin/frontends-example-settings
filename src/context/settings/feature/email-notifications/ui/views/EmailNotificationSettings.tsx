import { SaveOrDiscard } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscard';
import { SettingSwitch } from '../components/SettingSwitch';
import { SettingSwitchViewState } from '../components/SettingSwitchViewState';
import { Skeleton } from '@/components/ui/skeleton';
import { useEmailNotificationSettings } from '../../store/useEmailNotificationSettings';

export const EmailNotificationSettings = () => {
  const { viewState, dispatch } = useEmailNotificationSettings();

  return (
    <section>
      <h3 className="mb-4 text-left text-lg font-medium">
        Email Notifications
      </h3>
      <div className="space-y-4">
        {viewState.settings.map((setting) =>
          setting instanceof SettingSwitchViewState ? (
            <SettingSwitch
              viewState={setting}
              onCheckedChange={() =>
                dispatch({
                  type: 'ToggleEmailSettingsEvent',
                  key: setting.key,
                })
              }
            />
          ) : (
            <Skeleton className="h-[76px] w-full" />
          )
        )}
        {viewState.saveOrDiscard && (
          <SaveOrDiscard
            viewModel={viewState.saveOrDiscard}
            onClickSave={() => dispatch({ type: 'SaveEvent' })}
            onClickDiscard={() => dispatch({ type: 'DiscardEvent' })}
          />
        )}
      </div>
    </section>
  );
};
