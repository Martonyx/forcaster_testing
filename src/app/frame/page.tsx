import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dragonballz',
  description: 'A Farcaster Frame For Dragonballz',
  openGraph: {
    title: 'Dragonballz Frame',
    description: 'A Farcaster Frame Dragonballz',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/Dragonballz.jpg`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/Dragonballz.jpg`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/basic`,
    'fc:frame:button:1': 'Mint',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Basic Frame</h1>
    </div>
  )
}
