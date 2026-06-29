import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Atlas — AI Operating System for Business Software',
};

export default function LandingPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center"
      aria-label="Landing page"
    >
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Atlas
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">
        AI Operating System for Business Software
      </p>
      <p className="text-sm text-muted-foreground">Built by Mikitech</p>
      <Button asChild>
        <Link href="/app">Open App</Link>
      </Button>
    </main>
  );
}
