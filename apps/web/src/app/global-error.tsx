'use client';

import { Button } from '@/components/ui/button';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main
          className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center"
          aria-label="Application error"
        >
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="text-muted-foreground">An unexpected error has occurred.</p>
          <Button onClick={reset}>Try again</Button>
        </main>
      </body>
    </html>
  );
}
