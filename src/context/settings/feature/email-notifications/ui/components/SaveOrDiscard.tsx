import { Button } from '@/components/ui/button';
import { SaveOrDiscardViewState } from '../view-model/SaveOrDiscardViewState';
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
        <Button variant="secondary" onClick={onClickSave}>
          Discard
        </Button>
        <Button onClick={onClickDiscard}>{viewModel.save.label}</Button>
      </div>
    </>
  );
};
