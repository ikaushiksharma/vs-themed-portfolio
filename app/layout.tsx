import Container from '@/components/Container';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import Provider from './provider';
import Script from 'next/script';

export const metadata: Metadata = {
  icons: {
    icon: { url: './favicon.ico', type: 'image/x-icon', rel: 'shortcut icon' },
  },
  title: 'Kaushik Sharma',
  description: 'Kaushik Sharma Portfolio | BE CSE | Chitkara Univeristy | FullStack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-fira_regular bg-dark-background p-4 lg:p-7 w-screen h-screen">
        <Provider>
          <Container>
            <Toaster position="bottom-right" reverseOrder={false} />
            {children}
          </Container>
        </Provider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-07R8J9NNEY" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-07R8J9NNEY');        
        `}
        </Script>
      </body>
    </html>
  );
}
