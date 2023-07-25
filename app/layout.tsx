import Container from '@/components/Container';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  icons: {
    icon: { url: './favicon.ico', type: 'image/x-icon', rel: 'shortcut icon' },
  },
  title: 'Kaushik Sharma',
  description: 'VsCode Themed Portfolio for Kaushik Sharma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-fira_regular bg-dark-background p-4 lg:p-7 w-screen h-screen">
        <Container>
          <Toaster position="bottom-right" reverseOrder={false} />

          {children}
        </Container>
      </body>
    </html>
  );
}
