import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';

interface SkeletonSectionProps {
  viewState: SkeletonListViewState;
}

export const SectionSkeleton: React.FC<SkeletonSectionProps> = ({
  viewState,
}) => (
  <div className="flex flex-col gap-4">
    <Skeleton className="h-[20px] w-[100px] rounded-full" />
    {viewState.list.map((_, key) => (
      <Skeleton className="h-[76px] w-[100%]" key={key} />
    ))}
  </div>
);
