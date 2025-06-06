import localFont from 'next/font/local';

export const inter = localFont({
  src: '../public/Inter.woff2',
  variable: '--font-inter',
  display: 'swap',
});

export const geistMono = localFont({
  src: '../public/GeistMono-Medium.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
}); 