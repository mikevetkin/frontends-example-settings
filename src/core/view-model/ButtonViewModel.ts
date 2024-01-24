export class ButtonViewModel {
  label: string;
  onClick: () => void;

  constructor({ label, onClick }: ButtonViewModel) {
    this.label = label;
    this.onClick = onClick;
  }
}
