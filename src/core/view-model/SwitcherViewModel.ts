export class SwitcherViewModel {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  action?: unknown;

  constructor({ checked, onCheckedChange, action }: SwitcherViewModel) {
    this.checked = checked;
    this.onCheckedChange = onCheckedChange;
    this.action = action;
  }
}
