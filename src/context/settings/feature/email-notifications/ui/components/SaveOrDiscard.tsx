import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { SaveOrDiscardViewState } from './SaveOrDiscardViewState';

interface SaveOrDiscardProps {
  viewState: SaveOrDiscardViewState;
  onClickSave: () => void;
  onClickDiscard: () => void;
}

export const SaveOrDiscard: React.FC<SaveOrDiscardProps> = ({
  viewState,
  onClickSave,
  onClickDiscard,
}) => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          disabled={viewState.discard.disabled}
          onClick={onClickDiscard}
        >
          Discard
        </Button>
        <Button disabled={viewState.save.disabled} onClick={onClickSave}>
          {viewState.save.icon && (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          )}
          {viewState.save.label}
        </Button>
      </div>
    </>
  );
};
