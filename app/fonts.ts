import localFont from 'next/font/local';

export const uncutSans = localFont({
  src: '../public/UncutSans.woff2',
  variable: '--font-uncut-sans',
  display: 'swap',
});

export const geistMono = localFont({
  src: '../public/GeistMono-Medium.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
}); 