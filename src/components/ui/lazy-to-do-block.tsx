import { cn } from '@/lib/utils';

function LazyToDoBlock({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-lazy-to-do rounded-md', className)} {...props} />
  );
}

export { LazyToDoBlock };
