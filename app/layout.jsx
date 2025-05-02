import '@styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next" 
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  themeColor: "#f97316", // Tailwind's orange-500 (optional)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
    apple: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
    url: "https://project-promptopia-4arq.vercel.app/", // 🔁 Replace with your actual site URL
    siteName: "Promptopia",
    images: [
      {
        url: "/assets/images/og-image.png", // ✅ Replace with a real OG image
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
    // site: "@",  // 🔁 Optional: Your Twitter handle
    // creator: "@", // 🔁 Optional: Your personal Twitter handle
    images: ["/assets/images/og-image.png"], // ✅ Should match openGraph image
  },
};


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