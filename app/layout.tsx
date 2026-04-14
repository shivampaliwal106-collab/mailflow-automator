import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MailFlow — Email Automator',
  description: 'Free self-hosted email automation platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}