import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dragonballz',
  description: 'A Farcaster Frame For Dragonballz',
  openGraph: {
    title: 'Dragonballz Frame',
    description: 'A Farcaster Frame Dragonballz',
    images: [`https://dragonballz-testing.vercel.app/dragonballz.jpg`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `https://dragonballz-testing.vercel.app/dragonballz.jpg`,
    'fc:frame:image:aspect_ratio': '1.91:1',
    'fc:frame:post_url': `https://dragonballz-testing.vercel.app/api/basic`,
    'fc:frame:button:1': 'Mint R.I.P AKIRA',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Basic Frame</h1>
    </div>
  )
}
