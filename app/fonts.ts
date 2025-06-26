import localFont from 'next/font/local';

export const geist = localFont({
  src: '../public/Geist.woff2',
  variable: '--font-geist',
  display: 'swap',
});

export const geistMono = localFont({
  src: '../public/GeistMono-Medium.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
}); 