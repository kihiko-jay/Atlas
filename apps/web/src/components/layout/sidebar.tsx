'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  LayoutDashboard,
  BookOpen,
  Zap,
  Plug,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/app', label: 'Home', icon: Home },
  { href: '/workspace', label: 'Workspace', icon: LayoutDashboard },
  { href: '/knowledge', label: 'Knowledge', icon: BookOpen },
  { href: '/actions', label: 'Actions', icon: Zap },
  { href: '/connectors', label: 'Connectors', icon: Plug },
  { href: '/settings', label: 'Settings', icon: Settings },
] as const;

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn('flex w-56 flex-col border-r border-border bg-background', className)}
      aria-label="Main navigation"
    >
      <nav className="flex flex-1 flex-col gap-1 p-2" role="navigation">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                active
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
              )}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
