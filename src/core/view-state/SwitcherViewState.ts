export class SwitcherViewState {
  value: boolean;
  disabled?: boolean;

  constructor({ value, disabled }: SwitcherViewState) {
    this.value = value;
    this.disabled = disabled;
  }
}
