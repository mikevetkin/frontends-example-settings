import { Button } from '@/components/ui/button';
import { SaveOrDiscardViewModel } from '../view-model/SaveOrDiscardViewModel';

interface SaveOrDiscardProps {
  viewModel: SaveOrDiscardViewModel;
}

export const SaveOrDiscard: React.FC<SaveOrDiscardProps> = ({ viewModel }) => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={viewModel.discard.onClick}>
          Discard
        </Button>
        <Button onClick={viewModel.save.onClick}>{viewModel.save.label}</Button>
      </div>
    </>
  );
};
