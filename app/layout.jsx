import '@styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next" 
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
  metadataBase: new URL("https://project-promptopia-4arq.vercel.app"),
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
    apple: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
    url: "https://project-promptopia-4arq.vercel.app",
    siteName: "Promptopia",
    images: [
      {
        url: "/assets/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Promptopia Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
    images: ["/assets/images/logo.svg"],
  },
};

// ✅ Export viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ✅ Export themeColor separately
export const themeColor = "#f97316";


const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'>
          <Nav/>
          {children}
          <SpeedInsights/>
        </main>
        </Provider>
      </body>
    </html>
  )
};

export default RootLayout;