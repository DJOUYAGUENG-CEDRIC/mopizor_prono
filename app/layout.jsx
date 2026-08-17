import './globals.css';

export const metadata = {
  title: 'Mopizor Prono',
  description: 'Assistant expert en pronostics sportifs',
  icons: { icon: '/vini.jpeg' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
