import type { Metadata } from "next";
import localFont from 'next/font/local'
import { League_Spartan } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./sass/style.scss";
import BodyGradient from './components/body-gradient';
import Coral from './components/coral';
import Noise from './components/noise';
import Bubbles from './components/bubbles';
import Sun from './components/sun';
import Header from './components/header';
import Dolphin from "./components/dolphin";
import Whatsapp from "./components/whatsapp";
import Footer from "./components/footer";
import Player from "./components/player/page";

const myFont = localFont({ src: 'VaryloopSolid/font.woff'});
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Growskills | Wannahave websites uit Mozambique",
  description: "Wannahave websites voor designers",
  icons: [
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '57x57',
      url: '/favicomatic/apple-touch-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '114x114',
      url: '/favicomatic/apple-touch-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '72x72',
      url: '/favicomatic/apple-touch-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '144x144',
      url: '/favicomatic/apple-touch-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '60x60',
      url: '/favicomatic/apple-touch-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '120x120',
      url: '/favicomatic/apple-touch-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '76x76',
      url: '/favicomatic/apple-touch-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon-precomposed',
      type: 'image/png',
      sizes: '152x152',
      url: '/favicomatic/apple-touch-icon-152x152.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '196x196',
      url: '/favicomatic/favicon-196x196.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicomatic/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicomatic/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicomatic/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '128x128',
      url: '/favicomatic/favicon-128.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <div id='site-container'>
          <BodyGradient />
          <Coral />   
          <Dolphin />   
          <Noise />
          <Whatsapp />
          <Bubbles />
          <Sun />
          <Header />
          {/* <Player /> */}
          <div id='content-container'>
            {children}
            <Footer />
            <SpeedInsights/>
          </div>
        </div>
      </body>
    </html>
  );
}
