import { cn } from '@repo/ui/lib/utils';
import { ComponentProps } from 'react';

export function HelloWorld({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('text-2xl font-bold', className)} {...props}>
      Hello World
    </div>
  );
}
