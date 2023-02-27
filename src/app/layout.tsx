import './globals.css';

export const metadata = {
  title: 'JobTrac',
  description: 'One place to track all your job applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
