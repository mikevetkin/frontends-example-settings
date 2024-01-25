export class SwitcherViewState {
  checked: boolean;
  disabled?: boolean;

  constructor({ checked, disabled }: SwitcherViewState) {
    this.checked = checked;
    this.disabled = disabled;
  }
}
