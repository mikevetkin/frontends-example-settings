import { Button } from '@/components/ui/button';
import { SaveOrDiscardViewState } from './SaveOrDiscardViewState';
// TODO: Это должно быть контейнером
interface SaveOrDiscardProps {
  viewModel: SaveOrDiscardViewState;
  onClickSave: () => void;
  onClickDiscard: () => void;
}

export const SaveOrDiscard: React.FC<SaveOrDiscardProps> = ({
  viewModel,
  onClickSave,
  onClickDiscard,
}) => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={onClickDiscard}>
          Discard
        </Button>
        <Button onClick={onClickSave}>{viewModel.save.label}</Button>
      </div>
    </>
  );
};
