export class SwitcherViewModel {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;

  constructor({ checked, onCheckedChange }: SwitcherViewModel) {
    this.checked = checked;
    this.onCheckedChange = onCheckedChange;
  }
}
