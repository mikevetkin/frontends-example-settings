// import { SaveOrDiscard } from '@/context/settings/shared/save-or-discard/ui/components/SaveOrDiscard';
// import { Setting } from '../../../../shared/setting/ui/components/Setting';
// import { Skeleton } from '@/components/ui/skeleton';
// import { SettingsSectionViewState } from '../components/SettingsSectionViewState';
// import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
// import { EmailSettingsViewState } from './EmailSettingsViewState';

// export const EmailNotificationSettings = () => {
//   const { viewState, dispatch } = useEmailSettings();

//   const renderContent = (viewState: EmailSettingsViewState) => {
//     const { settings } = viewState;

//     switch (settings.constructor) {
//       case SettingsSectionViewState:
//         return (
//           <>
//             {(settings as SettingsSectionViewState).list.map((setting) => (
//               <Setting
//                 viewState={setting}
//                 onChange={(value) =>
//                   dispatch({
//                     type: 'ChangeSettingEvent',
//                     key: setting.key,
//                     value,
//                   })
//                 }
//               />
//             ))}
//           </>
//         );
//       case SkeletonListViewState:
//         return (
//           <>
//             {(settings as SkeletonListViewState).list.map(() => (
//               <Skeleton className="h-[76px] w-full" />
//             ))}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       {renderContent(viewState)}
//       {viewState.saveOrDiscard && (
//         <SaveOrDiscard
//           viewState={viewState.saveOrDiscard}
//           onClickSave={() => dispatch({ type: 'SaveEvent' })}
//           onClickDiscard={() => dispatch({ type: 'DiscardEvent' })}
//         />
//       )}
//     </div>
//   );
// };
