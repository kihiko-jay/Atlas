import * as React from 'react';
import { cn } from '@/lib/utils';

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'flex h-10 items-center justify-center border-t border-border bg-background px-4 text-xs text-muted-foreground',
        className,
      )}
      role="contentinfo"
    >
      <span>&copy; {new Date().getFullYear()} Mikitech. All rights reserved.</span>
    </footer>
  );
}
