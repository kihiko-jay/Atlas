import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Auth' };

export default function AuthPage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center p-8"
      aria-label="Authentication"
    >
      <p className="text-muted-foreground">Reserved for future sprint.</p>
    </main>
  );
}
