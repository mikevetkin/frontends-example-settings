import { SaveOrDiscard } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscard';
import { Setting } from '../components/Setting';
import { SettingViewState } from '../components/SettingViewState';
import { Skeleton } from '@/components/ui/skeleton';
import { useEmailSettings } from '../store/useEmailSettings';

// Это должно быть компонентом, куда запихиваешь любую модельку настройки с title и списком настроек и она рисуется

export const EmailNotificationSettings = () => {
  const { viewState, dispatch } = useEmailSettings();

  return (
    <div className="flex flex-col gap-4">
      {viewState.settings.map((setting) =>
        setting instanceof SettingViewState ? (
          <Setting
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
