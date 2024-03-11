import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';

export function settingControlPresentation(
  state: SettingsState,
) {
  const { status } = state;

  return new SwitcherViewState({
    value: false, // FIXME
    disabled: status === 'pending',
  })

  // const value = draft[sectionKey][key];

  // switch (typeof value) {
  //   case 'boolean':
  //     return new SwitcherViewState({
  //       value,
  //       disabled: status === 'pending',
  //     });
  //   case 'string':
  //     return new InputViewState({
  //       value,
  //       disabled: status === 'pending',
  //     });
  // }
}
