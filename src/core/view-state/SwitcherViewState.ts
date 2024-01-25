export class SwitcherViewState<E> {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  event?: E;

  constructor({ checked, onCheckedChange, event }: SwitcherViewState<E>) {
    this.checked = checked;
    this.onCheckedChange = onCheckedChange;
    this.event = event;
  }
}
