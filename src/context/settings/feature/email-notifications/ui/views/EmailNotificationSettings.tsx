import { SaveOrDiscard } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscard';
import { SettingSwitch } from '../components/SettingSwitch';
import { SettingSwitchViewState } from '../components/SettingSwitchViewState';
import { Skeleton } from '@/components/ui/skeleton';
import { useEmailNotificationSettings } from '../store/useEmailNotificationSettings';

// Это должно быть компонентом, куда запихиваешь любую модельку настройки с title и списком настроек и она рисуется

export const EmailNotificationSettings = () => {
  const { viewState, dispatch } = useEmailNotificationSettings();

  return (
    <div className="flex flex-col gap-4">
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
          viewState={viewState.saveOrDiscard}
          onClickSave={() => dispatch({ type: 'SaveEvent' })}
          onClickDiscard={() => dispatch({ type: 'DiscardEvent' })}
        />
      )}
    </div>
  );
};
