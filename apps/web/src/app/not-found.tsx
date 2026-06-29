import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center"
      aria-label="Page not found"
    >
      <h1 className="text-6xl font-bold text-foreground">404</h1>
      <p className="text-lg text-muted-foreground">Page not found.</p>
      <Button asChild variant="outline">
        <Link href="/">Go home</Link>
      </Button>
    </main>
  );
}
