import ThemeRegistry from '../components/Providers/ThemeRegistry/ThemeRegistry';
import { roboto } from '../config/fonts';
import '../styles/global.scss';

// Checks whether the app is running in a production or development mode
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Page metadata.
 *
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: {
    default: `React starter ${isProduction ? '' : '- development'}`,
    template: `%s ${isProduction ? '' : '- development'}`
  },
  description: "Enterwell's template for web apps based on the React and Next.js.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icons/logo.svg',
        href: '/icons/logo.svg'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icons/logo-dark.svg',
        href: '/icons/logo-dark.svg'
      }
    ]
  }
};

/**
 * Function representing the RootLayout component.
 *
 * @returns RootLayout component
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
