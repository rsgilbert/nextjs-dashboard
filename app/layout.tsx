import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | Dashboard',
        default: 'Dashboard'
    },
    description: 'The best dashboard ever!',
    metadataBase: new URL('http://localhost:3000')
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >{children}</body>
    </html>
  );
}
