// src/app/layout.tsx
import '../style/global.css';
import Providers from '../components/Layout/Provider'; // Import the Providers component
import Layout from '../components/Layout/layout'; // Ensure correct casing and path

export const metadata = {
  title: 'My App',
  description: 'Login/Signup App using Next.js 14, Recoil.js, ShadCN UI, and Zod.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Any meta tags or scripts can be added here */}
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
