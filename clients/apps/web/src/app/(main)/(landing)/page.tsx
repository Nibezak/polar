import { Metadata } from 'next'
import LandingPage from '../../../components/Landing/LandingPage'

export const metadata: Metadata = {
  title: 'Polar — The best monetization platform for developers',
  description: 'The best monetization platform for developers',
  openGraph: {
    title: 'Polar',
    description: 'The best monetization platform for developers',
    siteName: 'Polar',
    images: [
      {
        url: 'https://polar.sh/assets/brand/polar_og.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polar',
    description: 'The best monetization platform for developers',
    images: [
      {
        url: 'https://polar.sh/assets/brand/polar_og.jpg',
        width: 1200,
        height: 630,
        alt: 'Polar',
      },
    ],
  },
}

export default function Page() {
  return <LandingPage />
}
