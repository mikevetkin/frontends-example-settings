import { cn } from '@/lib/utils';

function LazyToDoBlock({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('rounded-md bg-secondary/20', className)} {...props} />
  );
}

export { LazyToDoBlock };
