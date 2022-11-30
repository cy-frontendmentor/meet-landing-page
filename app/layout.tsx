import './globals.css';
import { Red_Hat_Display } from '@next/font/google';

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'], variable: '--font-red-hat' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={redHatDisplay.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
