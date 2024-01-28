export class InputViewState {
  value: string;
  disabled: boolean;

  constructor({ value, disabled }: InputViewState) {
    this.value = value;
    this.disabled = disabled;
  }
}
