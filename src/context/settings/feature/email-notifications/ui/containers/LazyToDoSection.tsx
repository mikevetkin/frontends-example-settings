import { LazyToDoBlock } from '@/components/ui/lazy-to-do-block';

export const LazyToDoSection = () => (
  <div className="flex flex-col gap-4">
    <LazyToDoBlock className="h-[20px] w-[100px] rounded-full" />
    <LazyToDoBlock className="h-[76px] w-[100%]" />
    <LazyToDoBlock className="h-[76px] w-[100%]" />
  </div>
);
