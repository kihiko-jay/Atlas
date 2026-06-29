'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const ThemeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;

  return (
    <header
      className={cn(
        'flex h-14 items-center justify-between border-b border-border bg-background px-4',
        className,
      )}
      role="banner"
    >
      <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
        <span className="text-lg">Atlas</span>
      </Link>

      <nav aria-label="Header navigation" className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={cycleTheme}
        >
          <ThemeIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
      </nav>
    </header>
  );
}
