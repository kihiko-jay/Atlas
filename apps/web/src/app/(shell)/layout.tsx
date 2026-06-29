import * as React from 'react';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { Footer } from '@/components/layout/footer';

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6" id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
