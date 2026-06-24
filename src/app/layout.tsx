import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://raphaelopizza.cm'),
  title: 'Raphaëlo Pizza — La Meilleure Pizza du Cameroun',
  description:
    'Raphaëlo Pizza — La Meilleure Pizza au Cameroun. Pâte fermentée 48h, cuisson haute température. Commandez directement sur WhatsApp. Yaoundé & Douala.',
  openGraph: {
    title: 'Raphaëlo Pizza — La Meilleure Pizza du Cameroun',
    description:
      'Pâte fermentée 48h, cuisson haute température, artisan depuis 2015. Commandez sur WhatsApp. Yaoundé & Douala.',
    type: 'website',
    locale: 'fr_FR',
    images: ['/hero-pizza.jpg'],
  },
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
